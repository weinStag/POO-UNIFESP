import { Bike } from './bike';
import { Rent } from './rent';
import { User } from './user';

export class Controller {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    addUser(newUser: User){
        this.users.push(newUser) 
    }

    addBike(newBike: Bike){
        this.bikes.push(newBike)
    }

    addRent(newRent: Rent){
        this.rents.push(newRent)
    }

    getBikeById(id: number): Bike{
        const bike = this.bikes.filter((element => element.id == id));
        return bike[0]
    }

    getUserById(id: number): User{
        const user = this.users.filter((element => element.id == id));
        return user[0]
    }
}