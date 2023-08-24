import { Bike } from "./bike";
import { Rent } from "./rent";
import { Controller } from "./Controller";
import { User } from "./user";

const controller = new Controller()

controller.addBike(new Bike(1,'AETEC-123','red'))
controller.addBike(new Bike(2,'BELLD-456','blue'))
controller.addBike(new Bike(3,'CALOI-789','yellow'))

controller.addUser(new User(1,'Alberto', '111.111.111.11'))
controller.addUser(new User(2,'Berenice', '222.222.222.22'))
controller.addUser(new User(3,'Chico', '333.333.333.33'))

controller.addRent(new Rent(
    controller.getUserById(1),
    controller.getBikeById(1),
    '2023-08-23',
    '2023-09-01',
    '10:00',
    '23:00',
    50
))

controller.addRent(new Rent(
    controller.getUserById(1),
    controller.getBikeById(2),
    '2023-08-23',
    '2023-09-03',
    '06:00',
    '10:00',
    75
))

