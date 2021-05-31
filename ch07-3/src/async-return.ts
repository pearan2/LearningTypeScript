/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-return.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 10:56:33 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 11:09:46 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// async 함수는 값을 반환할 수 있습니다. 이때 반환값은 Promise 형태로 반환되므로 다음처럼
// then 메서드를 호출해 async 함수의 반환값을 얻어야 합니다.

const asyncReturn = async() => {
	return [1, 2, 3]
}

asyncReturn()
	.then((value:number[]) : void => {
		console.log(value)
	})

// async 함수에서 다음처럼 예외가 발생하면 프로그램이 비정상으로 종료됩니다.

const asyncException = async() => {
	throw new Error('error')
}
//asyncException() // 예외발생 // => 프로그램 비정상 종료

// 예외가 발생해서 프로그램이 비정상으로 종료하는 상황을 막으려면, 다음처럼 asyncException 을 단순히
// asyncException() 형태의 함수 호출 방식이 아닌,  asyncException() 이 반혼하는 Promise 객체의 catch
// 메서드를 호출하는 형태로 코드를 작성해야 합니다.

asyncException()
	.catch((error : Error) : void => {
		console.log('error:', error.message)
	})

