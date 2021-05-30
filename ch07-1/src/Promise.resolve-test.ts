// Promise 클래스는 resolve 라는 클레스메서드 (정적메서드) 를 제공합니다. 앞서 Promise 객체를 생성할 때
// resolve 함수를 호출하였는데, Promise.resolve는 이를 클래스 메서드로 구현한 것입니다.
// Promise.resolve(값) 형태로 호출하면 항상 이 '값' 은 then 메서드에서 얻을 수 있습니다.

Promise.resolve(1)
	.then(( value : number) : void => {
		console.log(value)
	})

Promise.resolve('hello')
	.then((value:string) : number => {
		console.log(value)
		return (2)
	})

Promise.resolve([1, 2, 3])
	.then((value:number[]) : void => {
		console.log(value)
	})

Promise.resolve({name: 'Jack', age: 32})
	.then((value:object) : void => {
		console.log(value)
	})
