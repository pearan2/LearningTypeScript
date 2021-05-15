import * as util from './utils/utils'

//1. //1 부터 100 까지 더하기
{
	//명령형 프로그래밍 방식
	let sum:number = 0
	for (let val:number = 1; val <= 100; val++)
	{
		sum += val; // 데이터 생성 + 가공
	}
	console.log(sum)

	//선언형 프로그래밍 방식 (데이터 생성과 가공 과정을 분리한다.)
	let numbers: number[] = util.range(1, 100 + 1) // 데이터 생성
	console.log(util.fold(numbers, (result:number, value:number)=> result + value, 0))


	// 명령형 프로그래밍 방식은, 시스템 자원의 효율을 최우선으로 생각하지만, 선언형 방식은 fold 처럼
	// 범용으로 구현된 함수를 재사용하면서 문제를 해결한다.


	//2. //1부터 100까지 홀수의 합 더하기
	//명령형 방식
	let oddSum :number = 0
	for (let val:number = 1; val <= 100; val += 2)
		oddSum += val;
	console.log(oddSum)

	//선언형 방식
	const isOdd = (n:number):boolean => n % 2 != 0
	console.log(util.fold(util.filter(numbers, isOdd), (result, value)=>result + value, 0))

	//3. //1부터 100까지 각 수의 제곱 더하기
	//선언형 방식
	console.log(
		util.fold( util.map(numbers, (value)=>value * value) , (result, value)=>result +=value, 0)
	)
}
/////////////////////////// 사실 array 에는 필요한 메소드들이 메소드 체인 방식으로 이미 구현되어 있다 ////////////////////
{
	const multiply = (result:number, val:number):number=>result*val;

	let numbers :number[] = util.range(1, 10+1)
	let tempResult = numbers
		.filter(val => val % 2 != 0)
		.map(val => val * val)
		.reduce(multiply, 1) // fold
	let result = Math.round(Math.sqrt(tempResult))
	console.log(result)
}