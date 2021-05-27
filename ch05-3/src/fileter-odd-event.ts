import * as util from './utils/utils'  // util import

//odds, evens
const array: number[] = util.range(1, 10 + 1)

let odds: number[] = array.filter((value : number) => (value % 2 != 0))
let evens: number[] = array.filter((value : number) => (value % 2 == 0))
console.log(odds, evens)