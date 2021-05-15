//선언형 + 화살표
export const range = (from :number, to :number) : number [] =>
	from < to ? [from, ...range(from + 1, to)] : []

export const fold = <T>(array: T[], callback: (result: T, val: T)=>T, initValue: T) =>
{
	let result: T = initValue;
	for (let i = 0; i < array.length; i++)
		result = callback(result, array[i])
	return (result)
}

export const filter = <T>(array: T[], callback: (value:T, index?: number) => boolean) : T[] =>
{
	let result: T[] = []
	for (let index:number = 0; index < array.length; index++)
	{
		if (callback(array[index], index))
			result = [...result, array[index]]
	}
	return (result)
}

export const map = <T, Q>(array: T[], callback: (value:T, index?: number)=> Q) : Q[] => 
{
	let result: Q[] = [];

	for (let index:number = 0; index < array.length; index++)
	{
		const value = array[index]
		result = [...result, callback(value, index)]
	}
	return result
}