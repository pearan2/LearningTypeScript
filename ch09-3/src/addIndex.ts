/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   addIndex.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 11:30:01 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 11:38:55 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

// Array.map 은 두번째 매개변수로 index 를 제공하지만, R.map 은 Array.map 과는 다르게 index
// 매개변수를 기본으로 제공하지 않습니다. 따라서 R.map이 Array.map 처럼 동작하려면 다음처럼
// R.addIndex 함수를 사용해 R.map이 index를 제공하는 새로운 함수를 만들어야 합니다.

// const indexedMap = R.addIndex(R.map)

// 이렇게 만들어진 indexMap은 다음처럼 두번째 매개변수로 index를 제공합니다.
// indexMap((value: number, index:number) => R.add(number)(index))

// 아래코드가 왜 동작안하는지 모르겠음. 나중에 다시 공부 필요.

// const addIndex = R.pipe(
// 	R.addIndex(R.map)(R.inc),
// 	//R.addIndex(R.map)((value:number, index:number) => R.add(value)(index)),
// 	R.tap(a => console.log(a))
// )

// const newNumbers = addIndex(R.range(1, 9 + 1))