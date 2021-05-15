import {init} from './init'
import {calc, calc2} from './nested'
import {add} from './high_order'

init( () => 
		{
			console.log('custom init finished')
		} 
	)

// 가능
calc( 5, (number :number) : void => {
										console.log(number)
})

// 가능
calc( 15, (number :number) : string => {
	console.log(number)
	return 'hello'
})

//불가
// calc2( 15, (number :number) : number => {
// 	console.log(number)
// 	return 3
// })

//즉, 더 높은 데이터형 (string)에서 더 낮은 데이터형 (void) 로는 알아서 오토캐스팅되서 들어가는듯.

//고차함수
console.log(add(5)(3))