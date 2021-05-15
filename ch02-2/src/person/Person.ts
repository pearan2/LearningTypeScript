import * as utils from '../utils/makeRandomNumber'

export interface IPerson
{
    name : string
    age : number
}

export default class Person implements IPerson
{
    constructor (public name: string, public age: number = utils.makeRandomNumber()){}
}

export const makePerson = (name: string, age:number = utils.makeRandomNumber()) => ({name, age})
