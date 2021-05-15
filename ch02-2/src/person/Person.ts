import * as utils from '../utils/makeRandomNumber'

export interface IPerson
{
    name : string
    age : number
}

//export default 는 한 모듈이 내보내는 기능 중 오직 한 개에만 붙일 수 있다.
//export default 가 붙은 기능은 import 문으로 불러 올떄 중괄호 없이 사용 할 수 있다.
export default class Person implements IPerson
{
    constructor (public name: string, public age: number = utils.makeRandomNumber()){}
}

export const makePerson = (name: string, age:number = utils.makeRandomNumber()) => ({name, age})
