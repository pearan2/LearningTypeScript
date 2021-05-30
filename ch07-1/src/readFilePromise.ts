//자바스크립트 언어에서 프로미스는 es6 버전에서 정식기능으로 채택됨.
//자바스크립트에서 프로미스는 Promise 라는 이름의 클래스이다.
//따라서 Promise 클래스를 사용하려면 일단 new 연산자를 적용해 일단 프로미스 객체를 만들어야한다.
//그리고 new 연산자로 프로미스 객체를 만들 때 다음처럼 콜백함수를 제공해야 한다.

// const promise = new Promise(콜백함수)

// 여기서 Promise의 콜백 함수는 resolve 와 reject 라는 두개의 매개변수를 가집니다.

// (resolve, reject) => {}

// 타입스크립트에서 Promise 는 다음처럼 제네릭 클래스 형태로 사용합니다.
// const numPromise: Promise<number> = new Promise<number>(콜백함수)
// const strPromise: Promise<string> = new Promise<string>(콜백함수)
// const arrayPromise: Promise<number[]> = new Promise<number[]>(콜백함수)

// 타입 스크립트 Promise 의 콜백함수는 다음처럼 resolve 와 reject 함수를 매개변수로 받는 형태입니다.

// new Promise<T>((
// 	resolve: (sucessValue : T) => void,
// 	reject: (any) => void
// ) => {
// 	// 코드 구현
// })

// resolve 와 reject 함수 
// 프로미스를 코드없이 이해하기는 어려우므로 일단 프로미스를 사용하는 코드를 작성해 보겠습니다. 
// readFile 을 호출하는 내용을 프로미스로 구현한 예 입니다.

import {readFile} from 'fs'

export const readFilePromise = (filename: string): Promise<string> => 
	new Promise<string>((
		resolve: (value: string) => void,
		reject: (error: Error | null) => void) => {
			readFile(filename, (error : Error | null, buffer : Buffer) => {
				if (error) reject(error)
				else resolve(buffer.toString())
			})
		}
	)

//코드에서 37번, 38번 라인을 보면 에러가 발생했을 때는 reject(error) 함수를 호출하고, 에러없이 정상적으로 실행
//되었을 때는 파일 내용이 담긴 buffer 를 이용해, resolve(buffer) 함수를 호출합니다.
//이제 이렇게 구현한 readFilePromise 함수를 사용하는 쪽 코들르 살펴보겠습니다.
//다음 코드는 readFilePromise 함수가 반환하는 Promise 타입 객체의 then, catch, finally 메서드를
//메서드 체인 형식으로 사용합니다. (파일 readFilePromise-test.ts)