import { Bike } from './bike'
import { User } from './user'

export class Rent{
    user: User
    bike: Bike
    dateInit: Date
    dateEnd: Date
    hourInit: string
    hourEnd: string
    valueDaily: number
    valueTotal: number
    active: boolean = false
    constructor(user: User, bike: Bike, ini: string, end: string, hourInit: string, hourEnd: string, value: number){
        this.user = user
        this.bike = bike
        this.dateInit = new Date(ini)
        this.dateEnd = new Date(end)
        this.hourInit = hourInit
        this.hourEnd = hourEnd
        this.valueDaily = value
        this.valueTotal = value * ((this.dateInit.getTime() - this.dateEnd.getTime()) / (1000 * 3600 * 24))
        this.bike.available = false
        this.active = true
    }
}