/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   await_test1.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 10:32:03 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 10:44:12 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// await 키워드는 피연산자(operand) 의 값을 반환해 줍니다. 그런데 만일 피연산자가 Promise 객체면 
// then 메서드를 호출해 얻은 값을 반환해 줍니다.

// 그런데 await 키워드는 항상 async 라는 이름의 함수 수정자(function modifier)가 있는 함수 몸체에서만 사용 할 수 있습니다.

export const test1 = async() => {
	let value:number = await 1
	console.log(value)
	value = await Promise.resolve(1)
	console.log(value)
}