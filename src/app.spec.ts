import sinon from "sinon"
import { App } from "./app"
import { Bike } from "./bike"
import { User } from "./user"
import { Location } from "./location"
import { BikeNotFoundError } from "./errors/bike-not-found-error"
import { UnavailableBikeError } from "./errors/unavailable-bike-error"
import { DuplicatedUserError } from "./errors/duplicated-user-error"
import { UserNotFoundError } from "./errors/user-not-found-error"
import { RentNotFoundError } from "./errors/rent-not-found-error"

describe('App', () => {
    it('should correctly calculate the rent amount', async () => {
        const app = new App()
        const user = new User('Jose', 'jose@mail.com', '1234')
        await app.registerUser(user)
        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, [])
        app.registerBike(bike)
        const clock = sinon.useFakeTimers();
        app.rentBike(bike.id, user.email)
        const hour = 1000 * 60 * 60
        clock.tick(2 * hour)
        const rentAmount = app.returnBike(bike.id, user.email)
        expect(rentAmount).toEqual(200.0)
    })

    it('should be able to move a bike to a specific location', () => {
        const app = new App()
        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, [])
        app.registerBike(bike)
        const newYork = new Location(40.753056, -73.983056)
        app.moveBikeTo(bike.id, newYork)
        expect(bike.location.latitude).toEqual(newYork.latitude)
        expect(bike.location.longitude).toEqual(newYork.longitude)
    })

    it('should throw bike not found error when trying to move an unregistered bike', () => {
        const app = new App()
        const newYork = new Location(40.753056, -73.983056)
        expect(() => {
            app.moveBikeTo('fake-id', newYork)
        }).toThrow(BikeNotFoundError)
    })

    it('should throw bike not found error when trying to rent an unregistered bike', () => {
        const app = new App()
        const user = new User('Jose', 'jose@mail.com', '1234')
        expect(() => {
            app.rentBike('fake-id', user.email)
        }).toThrow(BikeNotFoundError)
    })

    it('should throw rent not found error when trying to return a bike that was not rented', async () => {
        const app = new App()
        const user = new User('Jose', 'jose@mail.com', '1234')
        await app.registerUser(user)
        const bike = new Bike('caloi mountainbike', 'mountain bike', 1234, 1234, 100.0, 'My Bike', 5, [])
        app.registerBike(bike)
        expect(() => {
            app.returnBike(bike.id, user.email)
        }).toThrow(RentNotFoundError)
    })

    it('should correctly handle bike rent', async () => {
        const app = new App()
        const user = new User('Jose', 'jose@mail.com', '1234')
        await app.registerUser(user)
        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, [])
        app.registerBike(bike)
        app.rentBike(bike.id, user.email)
        expect(app.rents.length).toEqual(1)
        expect(app.rents[0].bike.id).toEqual(bike.id)
        expect(app.rents[0].user.id).toEqual(user.id)
    })

    it('should throw unavaiable bike error when trying to rent unavailable bike', async () => {
        const app = new App()
        const user = new User('Jose', 'jose@mail.com', '1234')
        await app.registerUser(user)
        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, [])
        app.registerBike(bike)
        app.rentBike(bike.id, user.email)
        expect(() => {
            app.rentBike(bike.id, user.email)
        }).toThrow(UnavailableBikeError)
    })

    it('should throw duplicated user error when trying to register a user with an existing email', async () => {
        const app = new App();
        const user1 = new User('Jose', 'jose@mail.com', '1234');
        await app.registerUser(user1);
        await expect(app.registerUser(user1)).rejects.toThrow(DuplicatedUserError);
    })

    it('should throw user not found error when trying to find a non existing user', () => {
        const app = new App();
        expect(() => {
            app.findUser('fakeid');
        }).toThrow(UserNotFoundError);
    })

    it('should throw user not found error when trying to authenticate a non existing user', async () => {
        const app = new App();
        await expect(app.authenticate('fakeid', 'fakepassword')).rejects.toThrow(UserNotFoundError);
    })

    it('should throw bike not found error when trying to locate a non existing bike', () => {
        const app = new App();
        expect(() => {
            app.findBike('fakeid');
        }).toThrow(BikeNotFoundError);
    })

    it('should remove a user', async () => {
        const app = new App();
        const user = new User('Jose', 'jose@mail.com', '1234');
        await app.registerUser(user);
        app.removeUser(user.email);
        expect(app.users.length).toEqual(0);
    })
})