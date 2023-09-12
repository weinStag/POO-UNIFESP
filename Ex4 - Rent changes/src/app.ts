import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import { hash, compare } from 'bcrypt';

export class App{
    users: User[] = [];
    bikes: Bike[] = [];
    rents: Rent[] = [];

    // CREATE REGION

    async registerUser(newUser: User){
        const isAnUser = this.users.some(user => { return user.email === newUser.email });
        if(isAnUser)
            throw new Error('Your email is already registered.');
        newUser.id = crypto.randomUUID();
        const newPassword = await hash(newUser.password, 10);
        newUser.password = newPassword;
        this.users.push(newUser);
    }

    registerBike(newBike: Bike): string{
        newBike.id = crypto.randomUUID();
        this.bikes.push(newBike);
        return newBike.id;
    }

    rentBike(bike: Bike, user: User, date1: Date, date2: Date): void {
        if(!bike.available) {
            throw new Error('Bike unavaliable')
        }

        bike.available = false
        const newRent = new Rent(bike, user, new Date())
        this.rents.push(newRent)
    }

    // END CREATE REGION

    // FIND REGION

    findUserByEmail(email: string): User{
        return this.users.find(user => user.email === email);
    }

    findBikeById(id: string): Bike{
        return this.bikes.find(bike => bike.id === id);
    }

    findBikeRents(bike: Bike): Rent[]{
        return this.rents.filter(rent => rent.bike === bike && bike.available === false);
    }

    findRent(user: User, bike: Bike){
        return this.rents.findIndex(rent => rent.bike === bike && rent.user === user && bike.available === false);
    }

    // END FIND REGION

    // REMOVE REGION

    removeUserByEmail(email: string){
        this.users = this.users.filter(b => b.email !== email);
    }

    removeBikeById(id: string){
        this.bikes = this.bikes.filter(b => b.id !== id);
    }

    returnBike(bike: Bike, user: User): number {
        const currentTime = new Date()
        const rent = this.rents.find(aRent => aRent.bike.id === bike.id && aRent.user.email === user.email && aRent.endDate === undefined)

        if(!rent){
            throw new Error('Rent not found')
        }

        rent.endDate = currentTime
        rent.bike.available = true
        var timeDiff = (rent.endDate.getTime() - rent.startDate.getTime()) / 1000
        timeDiff /= (60*60)
        return rent.bike.rate * timeDiff
    }

    // END REMOVE REGION

    // LIST REGION

    listUsers(){
        console.log(this.users);
    }

    listBikes(){
        console.log(this.bikes);
    }

    listRents(){
        console.log(this.rents);
    }

    // END LIST REGION

    AuthUser(email: string, password: string){
        const user = this.findUserByEmail(email);
        if(this.comparePassword(password, user.password))
            return user;
        throw new Error('Invalid password');
    }
    
    comparePassword = async (password: string, hash: string) : Promise<boolean> => {
        return compare(password, hash)
    }
}