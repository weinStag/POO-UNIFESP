export class Bike {
    id: number
    model: string
    color: string
    available: Boolean = true
    constructor(id: number, model: string, color: string){
        this.id = id
        this.model = model
        this.color = color
    }
}