/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   string.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 16:48:43 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 16:51:55 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

// R.trim 함수는 문자열 앞뒤 공백을 제거해줍니다.
console.log(
	R.trim('\t hello \t')
)

console.log(
	R.toUpper('Hello'),
	R.toLower('HELLO')
)

// R.split 함수는 구분자 (delimiter)를 사용해 문자열을 배열로 바꿔줍니다.
// 문자열배열 = R.split(구분자)(문자열)

// 문자열 배열은 R.join 을 사용해 문자열로 바꿀 수 있습니다.
// 문자열 = R.join(구분자)(문자열 배열)

const words: string[] = R.split(' ')(`Hello World!, I'm Peter.`)
console.log(words)
console.log(R.join(' ')(words))