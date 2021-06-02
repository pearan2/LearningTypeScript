/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   selectRange-test.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 16:39:20 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 16:41:05 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// 다음 코드는 selectRange 함수를 R.filter 와 결합해 포인트가 없는 함수 형태로 구현한 예 입니다.
// 이 예의 내용은 앞서 작서한 ite.ts 와 같지만 여기서는 R.filter 를 한번만 사용하므로 
// 동작속도가 더 빠를 것입니다.

import * as R from 'ramda'
import { selectRange } from './selectRange'

R.pipe(
	R.filter<number, "array">(selectRange(3, 6 + 1)),
	R.tap(n => console.log(n))
)(R.range(1, 10 + 1))