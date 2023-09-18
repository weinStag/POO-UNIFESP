import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import { App } from "./app";

const bike = new Bike('Bike', 'Mountain', 20, 100, 10, 'A bike', 5, [], { latitude: 0, longitude: 0 })
const user = new User('Maria', 'maria@mail.com', '1234');
const today = new Date();
const twoDaysFromToday = new Date();
const tomorrow = new Date();
const weekFromToday = new Date();

tomorrow.setDate(twoDaysFromToday.getDate() + 1);
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2);
weekFromToday.setDate(twoDaysFromToday.getDate() + 7);

bike.updateLocation(37.12345, -122.67890)

bike.getLocation()
  .then((address) => {
    if (address) {
      console.log(`Bike Location: ${address}`);
    } else {
      console.log('Unable to retrieve bike location.');
    }
  });
