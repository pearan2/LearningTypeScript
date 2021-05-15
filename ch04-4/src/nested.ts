export const calc = (value : number, cb : (number : number)=>void) : void =>
{
	const add = (a:number, b:number) : number =>{return (a+b)}
	function multi(a: number, b : number) : number
	{
		return (a * b)
	}

	const result :number = multi(add(1,2),value)
	cb(result) 
}

export const calc2 = (value : number, cb : (number : number)=>string) : void =>
{
	const add = (a:number, b:number) : number =>{return (a+b)}
	function multi(a: number, b : number) : number
	{
		return (a * b)
	}

	const result :number = multi(add(1,2),value)
	cb(result) 
}