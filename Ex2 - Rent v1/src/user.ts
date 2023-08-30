import { Rent } from './rent'

export class User{
    id: number
    name: string
    document: string
    constructor(id: number, name: string, document: string){
        this.id = id
        this.name = name
        this.document = document
    }
}