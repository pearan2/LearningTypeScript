const multiply = (result : number, val : number) => (result * val)

let numbers: number[] = [1,2,3,4,5,6,7,8,9,10]

let tempResult:number		 = numbers
							.filter( (ele : number) => (ele % 2 != 0) )
							.map( (x : number) => (x * x) )
							.reduce(multiply, 1)

let result:number = Math.round( Math.sqrt(tempResult))
console.log(result)

