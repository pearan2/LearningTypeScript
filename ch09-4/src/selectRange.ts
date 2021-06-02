/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   selectRange.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 16:37:18 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 16:39:04 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// R.lt, R.gt 처럼 boolean 타입의 값을 반환하는 함수들은 R.allPass와 R.anyPass 라는 로직
// 함수를 통해 결합 할 수 있습니다.

// R.allPass(서술자 배열)
// R.anyPass(서술자 배열)

import * as R from 'ramda'

type NumberToBooleanFunc = (n:number) => boolean

export const selectRange = (min:number, max:number):NumberToBooleanFunc =>
	R.allPass([R.lte(min), R.gt(max)])

