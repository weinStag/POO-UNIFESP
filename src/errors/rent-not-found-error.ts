export class RentNotFoundError extends Error {
    public readonly name: string = 'RentNotFoundError';
    constructor(){
        super('Rent not found');
    }
}