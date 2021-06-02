/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pure-function.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 10:53:28 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 11:03:36 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

const originalArray:number[] = [1,2,3]

const resultArray = R.pipe(
	R.map(R.add(1))
)(originalArray)

console.log(
	originalArray, resultArray
)
