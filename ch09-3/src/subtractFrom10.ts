/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   subtractFrom10.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 11:39:16 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 11:55:05 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

// R.add, R.multiply 와 달리 R.substract, R.divied 는 매개변수의 순서에 따라 값이 달라집니다.

const subtract = (a:number) => (b:number) => a - b
const subtractFrom10 = subtract(10)

const newArray = R.pipe(
	R.map(subtractFrom10), // 10 - value
	R.tap(a => console.log(a))
)(R.range(1, 9 + 1))

// 그렇다면 다음처럼 동작하는 함수는 완전히 새로 만들어져야 할까요?
// (a)(b) => b - a

// R.flip 이라는 함수를 제공하는데, 2차 고차함수의 매개변수 순서를 바꿔줍니다.

const reverseSubstract = R.flip(R.subtract)

const newArray2 = R.pipe(
	R.map(reverseSubstract(10)),		// value - 10
	R.tap(a => console.log(a))
)(R.range(1, 9 + 1))
