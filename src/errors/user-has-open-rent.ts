export class UserHasOpenRent extends Error {
    public readonly name = 'UserHasOpenRent'
    constructor () {
      super('User has open rent(s).')
    }
}