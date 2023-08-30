import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

export class app{
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    addUser(newUser: User): void{
        const isAnUser = this.users.some(user => { return user.email === newUser.email })
        if(isAnUser)
            throw new Error('Overlapping dates.')
        this.users.push(newUser)
    }
}