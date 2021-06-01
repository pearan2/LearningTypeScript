/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   toPairs-test.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 23:13:36 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 23:22:36 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// R.toPair 함수는 객체의 속성을 분해해 배열로 만들어 줍니다.
// 이때 배열의 각 아이템은 [string, any] 타입 튜플입니다. 실행 결과를 보면 IPerson 객체의
// 모든 속성이 [키, 값] 형태의 배열로 만들어 진 것을 볼 수 있습니다.

import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const person:IPerson = makeRandomIPerson()
const pairs: [string, any][] = R.toPairs(person)
const pairs_location: [string, any][] = R.toPairs(person['location'] as object)

console.log(pairs_location)
console.log(pairs)

// R.fromPairs 함수는 [키:값] 형태의 아이템을 가진 배열을 다시 객체로 만들어줍니다.
const person2: IPerson = R.fromPairs(pairs) as IPerson
console.log('person2:', person2)