import IPerson from './person/Person'
import Person, {makePerson} from './person/Person'
import Chance from 'chance'
import * as R from 'ramda'


const chance = new Chance()
let people: IPerson[] = R.range(0, 2).map((n : number) => new Person(chance.name(), chance.age()))
console.log(people)