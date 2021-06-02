/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   lens.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 22:45:05 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 22:51:36 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// 렌즈 기능을 사용하려면 일단 렌즈를 만들어야합니다. 렌즈는 다음처럼 R.lens, R.prop, R.assoc의 조합으로
// 만들수 있습니다.

import * as R from 'ramda'

export const makeLens = (propName: string) => R.lens(R.prop(propName), R.assoc(propName))

// 렌즈를 만들었으면 R.view , R.set , R.over 함수에 렌즈를 적용해서 다음과 같은 게터와 세터 그리고
// setterUsingFunc 같은 함수를 만들 수 있습니다.

export const getter = (lens) => R.view(lens)
export const setter = (lens) => <T>(newValue:T) => R.set(lens, newValue)
export const setterUsingFunc = (lens) => <T, R>(func: (T)=>R) => R.over(lens, func)

