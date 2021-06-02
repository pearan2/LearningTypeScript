/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   assoc.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 22:39:05 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 22:42:28 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// 객체의 특정 속성값을 변경하려면 R.assoc 함수를 사용하는데, 이런 목적으로 사용하는 함수를
// 세터 라고 합니다. 다음은 R.assoc 함수를 사용하는 예 입니다.

import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const getName = R.pipe(R.prop<'name', string>('name'), R.tap(n => console.log(n)))

const person:IPerson = makeRandomIPerson()
const originalName = getName(person)

const modifiedPerson = R.assoc<string, 'name'>('name', 'Alber Einstein')(person)
const modifiedName = getName(modifiedPerson)

console.log(person, modifiedPerson)