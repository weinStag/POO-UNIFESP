import { Bike } from "./bike";
import { User } from "./user";

export class Rent {
    public endDate: Date | undefined
    constructor (
        public bike: Bike,
        public user: User,
        public startDate: Date,
    ) {
        this.bike = bike
        this.user = user
        this.startDate = startDate
    }
}