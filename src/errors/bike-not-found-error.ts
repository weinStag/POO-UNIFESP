export class BikeNotFoundError extends Error {
  public readonly name: string = 'BikeNotFoundError';
  constructor() {
    super('Bike not found');
  }
}
