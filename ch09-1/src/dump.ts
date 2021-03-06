/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   dump.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 22:47:31 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 22:48:22 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

// 람다 라이브러리는 대부분 2차 고차함수 형태로 구현되어 있습니다.
// 2차 고차함수는 포인트가 없는 함수 형태로 사용 할 수 있습니다. 다음 dump 함수와 같습니다.

export const dump = R.pipe(
	R.tap(n => console.log(n))
)