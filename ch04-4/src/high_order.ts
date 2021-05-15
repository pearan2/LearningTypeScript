const add0 = (a :number, b:number) : number => { return (a+b)} // 보통 함수

const add1 = (a: number) : (b :number) => number => (b:number):number => a+b

const add2 = (a:number) : (b :number) => number =>				// 미친 함수
{
	return ( (b: number) : number => {return a+b} )
}

type NumberToNumberFunc = (a :number)=>number

export const add = (a:number) : NumberToNumberFunc => 
{
	const _add : NumberToNumberFunc = (b : number) :number =>
	{
		return (a + b) // 클로저
	}
	return (_add)
}
