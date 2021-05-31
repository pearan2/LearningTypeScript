/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   second-order-func.ts                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 11:33:57 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 12:24:02 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { FristOrderFunc, SecondOrderFunc } from "./function-signature";

export const add: SecondOrderFunc<number, number> = 
	(x: number): FristOrderFunc<number, number> =>  // add 함수는 number type 인 x 를 하나 받아서, FirstOrderFunc<number, number> 타입을 아웃풋으로 준다.
	(y:number): number => x+y // 아웃풋으로 나가는 FirstOrderFunc<number, number> 타입의 함수는, number type 인 y 를 받아서, number 를 아웃풋으로 준다.
									// 이때 함수 몸체는 x+y 이다.


// console.log(
// 	add(1)(2)   //  3  이런식으로 함수 호출 연산자를 두번 연속해서 사용합니다. 함수형 프로그래밍언어에서는 이를 커리(curry) 라고 합니다.
// )