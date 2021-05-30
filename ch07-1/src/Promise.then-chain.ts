// Promise 의 then 인스턴스 메서드를 호출 할 때 사용한 콜백함수는 값을 반환할 수 있습니다.
// 이 Then 에서 반환된 값은 또 다른 then 메서드를 호출 해 값을 수신 할 수 있습니다.
// 흥미롭게도 then 메서드는 반환된 값이 Promise 타입이면 이를 해소(resolve)한 값을 반환합니다.
// 만약 거절(reject) 당한 값일때는 catch 메서드에서 이 거절당한 값을 얻을 수 있습니다.
// Promise 객체에 then 메서드를 여러번 호출하는 모드를 then-체인 이라고 합니다.
// 다음 코드는 then-chain 을 보여줍니다.

Promise.resolve(1)
	.then((value : number) : Promise<boolean> =>{
		console.log(value)
		return (Promise.resolve(true))
	})
	.then((value: boolean): number[] =>{
		console.log(value)
		return ( [1,2,3] )
	})
	.then((value: number[]): object =>{
		console.log(value)
		return ({name : 'jack', age:32})
	})
	.then((value :object):void => {
		console.log(value)
		return 
	})