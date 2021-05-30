import {readFilePromise} from './readFilePromise'

readFilePromise('./test.txt')
	.then((content: string) => {
		console.log(content)
		return readFilePromise('./test2.txt')
	})
	.then((content: string) => {
		console.log(content)
		return (readFilePromise('.'))
	})
	.catch((error : Error) => {
		console.log('error:', error.message)
	})
	.finally(() => console.log('프로그램 종료'))

// 코드를 실행해보면 readFilePromise 에서 resolve 함수를 호출한 값은 then 메서드의 콜백함수 쪽에 전달되고,
// reject 함수를 호출한 값은 catch 메서드의 콜백함수 쪽에 전달되는 것을 볼 수 있습니다.
// 그리고 마지막에 '프로그램 종료' 라는 출력을 볼 수 있는데, 이것은 finally 메서드가 호출되었다는 것을 의미합니다.
// Promise 객체의 메서드 체인 코드에서 finally 는 항상 마지막에 호출 됩니다.