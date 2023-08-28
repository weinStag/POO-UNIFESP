import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

const bike = new Bike('mountain bike', 'mountain', 123, 500, 100.5, 'desc', 5, [])
const user = new User('Maria', 'maria@mail.com', '1234')
const today = new Date()
const twoDaysFromToday = new Date()
const tomorrow = new Date()
const weekFromToday = new Date()

tomorrow.setDate(twoDaysFromToday.getDate() + 1)
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
weekFromToday.setDate(twoDaysFromToday.getDate() + 7)

const rent1 = Rent.create([], bike, user, today, twoDaysFromToday)

try {
    const rent2 = Rent.create([ rent1 ], bike, user, tomorrow, weekFromToday)  
    console.log(rent2) 
} catch (e) {
    console.error(e)
}

console.log(rent1)