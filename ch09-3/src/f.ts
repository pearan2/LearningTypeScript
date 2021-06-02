/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   f.ts                                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 11:56:53 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 11:59:49 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

// 수학에서 다음 형태의 공식을 자주 볼 수 있습니다.
// f(x) = ax^2 + bx + c
// 이 공식을 타입스크립트로 구현하면 다음과 같습니다.
type NumberToNumberFunc = (arg0 :number) => number

export const f = (a:number, b:number, c:number): NumberToNumberFunc =>
	(x:number):number => (a * x ** 2) + (b * x) + (c)
