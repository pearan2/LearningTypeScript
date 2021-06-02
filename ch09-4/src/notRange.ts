/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   notRange.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 16:42:11 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 16:44:48 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// R.not 은 이름 그대로 입력값이 true이면 false 를 반환하고, false 이면 true 를 반환합니다.
// 앞서 구현한 selectRange와 반대로 작용하는 notRange 함수는 다음처럼 R.pipe 로 R.not
// 을 selectRange와 결합해 사용하면 쉽게 구현 할 수 있습니다.

import * as R from 'ramda'
import { selectRange } from './selectRange'
export const notRange = (min:number, max:number) => R.pipe(selectRange(min, max), R.not)

R.pipe(
	R.filter<number, "array">(notRange(3, 6 + 1)),
	R.tap(n => console.log(n))
)(R.range(1, 10 + 1))