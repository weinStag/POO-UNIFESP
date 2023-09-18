import { App } from "./app";
import { Bike } from "./bike";
import { User } from "./user";
import { sinon } from 'sinon';
import { Location } from "./location";

describe('App', () => {
    it('should correctly calculate the rent amount', async () => {
        const app = new App();
        const user1 = new User('user1', 'email@email.com', '1234');
        await app.registerUser(user1);
        const bike = new Bike('Bike', 'Mountain', 20, 100, 10, 100 ,'A bike', 5, [], { latitude: 0, longitude: 0 });
        const clock = sinon.useFakeTimers();
        app.registerBike(bike);
        app.rentBike(bike.id, user1.email)
        const hour = 1000 * 60 * 60;
        clock.tick(2 * hour);
        const rentAmount = app.returnBike(bike.id, user1.email);
        expect(rentAmount).toEqual(200);
    })

    it('should be able to move a bike to a specific location', () => {
        const app = new App();
        const location = new Location(37.12345, -122.67890);
        const bike = new Bike('Bike', 'Mountain', 20, 100, 10, 100 ,'A bike', 5, [], { latitude: 0, longitude: 0 });
        app.registerBike(bike);
        app.updateBikeLocation(bike.id, location.latitude, location.longitude);
        expect(bike.location.latitude).toEqual(location.latitude);
        expect(bike.location.longitude).toEqual(location.longitude);
    });

    it('should throw an exception when trying to move an unerigistered bike', () => {
        const app = new App();
        const location = new Location(37.12345, -122.67890);
        expect(() => app.updateBikeLocation('fakeId', location.latitude, location.longitude)).toThrow();
    });
});