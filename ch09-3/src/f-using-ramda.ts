/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   f-using-ramda.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 14:31:08 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 14:33:46 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

export const exp = (N:number)=> (x:number):number => x ** N
export const square = exp(2)

type NumberToNumberFunc = (arg0: number) => number

export const f = (a:number, b:number, c:number): NumberToNumberFunc =>
	(x:number):number => R.add(
		R.add(
			R.multiply(a)(square(x))
		)(R.multiply(b)(x))
		,c
	)

