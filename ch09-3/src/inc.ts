/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   inc.ts                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 11:12:20 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 11:23:14 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// 보통 함수형 프로그래밍은 선언형 프로그래밍 방식으로 코드를 작성합니다.
// 선언형 프로그래밍에서 모든 입력 데이터는 다음처럼 단순 데이터보다
// 배열 형태를 주로 사용합니다.

import * as R from 'ramda'

// const value = 1
// const newValue = R.inc(value) // 2

// const newArray = R.pipe(
// 	R.map(R.inc)
// )([value])  //  [ 2 ]

// 다음 소스는 R.tap 디버깅 함수를 이용해 디버깅 하는 모습을 보여줍니다.

const numbers: number[] = R.range(1, 9 + 1)
const incNumbers = R.pipe(
	R.tap((a:number[]):void => console.log('before inc:' , a)),
	R.map(R.add(1)),
	R.tap((a:number[]):void => console.log('after inc:', a))
)

const newNumbers = incNumbers(numbers)
console.log(newNumbers)