import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import { App } from "./app";

const app = new App();
const bikeid = app.registerBike(new Bike('Bike', 'Mountain', 20, 100, 10, 'A bike', 5, [], { latitude: 0, longitude: 0 }))

app.updateBikeLocation(bikeid, 37.12345, -122.67890)

console.log(app.getBikeLocation(bikeid))