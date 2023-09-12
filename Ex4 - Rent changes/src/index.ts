import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import { App } from "./app";

const bike = new Bike('mountain bike', 'mountain', 123, 500, 100.5, 'desc', 5, []);
const user = new User('Maria', 'maria@mail.com', '1234');
const today = new Date();
const twoDaysFromToday = new Date();
const tomorrow = new Date();
const weekFromToday = new Date();

tomorrow.setDate(twoDaysFromToday.getDate() + 1);
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2);
weekFromToday.setDate(twoDaysFromToday.getDate() + 7);
