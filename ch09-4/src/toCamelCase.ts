/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   toCamelCase.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 16:53:32 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:03:14 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

type StringToStringFunc = (arg0:string) => string

export const toCamelCase = (delim: string): StringToStringFunc => {
	const MakeFirstToCapital = (word: string) => {
		const characters = word.split('')
		return characters.map((c, index) => index == 0 ? c.toUpperCase() : c).join('')
	}
	
	const indexedMap = R.addIndex<string, string>(R.map) // R.map 의 콜백 함수에 index 매개변수 제공
	return R.pipe(
		R.trim,					// 앞뒤로 공백 문자 제거
		R.split(delim),			// delim 문자열을 구분자로 배열로 전환
		R.map(R.toLower),		// 배열에 있는 모든 문자열을 소문자로 전환
		indexedMap( (value:string, index:number) => index > 0 ? MakeFirstToCapital(value) : value ),	// 두번째 문자열부터 첫 문자만 대문자로 전환
		R.join('')				// 배열을 다시 문자열로 전환
	) as StringToStringFunc
}
