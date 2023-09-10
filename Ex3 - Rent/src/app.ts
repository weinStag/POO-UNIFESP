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

    rentBike(bikeId: string, userEmail: string, start: Date, end: Date){
        try {
            const bike = this.findBikeById(bikeId);
            const user = this.findUserByEmail(userEmail);

            const bikeRents = this.findBikeRents(bike);
            const newRent = Rent.create(bikeRents, bike, user, start, end);

            this.rents.push(newRent);
        } catch (e) {
            throw new Error(e);
        }
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
        return this.rents.filter(rent => rent.bike === bike && !rent.dateReturned);
    }

    findRent(user: User, bike: Bike){
        return this.rents.findIndex(rent => rent.bike === bike && rent.user === user && !rent.dateReturned);
    }

    // END FIND REGION

    // REMOVE REGION

    removeUserByEmail(email: string){
        this.users = this.users.filter(b => b.email !== email);
    }

    removeBikeById(id: string){
        this.bikes = this.bikes.filter(b => b.id !== id);
    }

    returnBike(userEmail: string, bikeId: string, date: Date){
        const bike = this.findBikeById(bikeId);
        const user = this.findUserByEmail(userEmail);
        const rentIndex = this.findRent(user, bike);
        this.rents[rentIndex].dateReturned = date;
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
        if(compare(password, user.password))
            return user;
        throw new Error('Invalid password');
    }
    
    comparePassword = async (password: string, hash: string) : Promise<boolean> => {
        return compare(password, hash)
    }
}