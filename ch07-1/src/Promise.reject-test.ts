// Promise.reject(Error 타입 객체) 를 호출하면 이 'Error 타입 객체'는 항상 catch 메서드의
// 콜백함수에서 얻을 수 있습니다.

Promise.reject(new Error('에러 발생!!'))
	.catch((error : Error):void =>{
		console.log('error:',error.message)
	})
	.finally(() => console.log('exit'))