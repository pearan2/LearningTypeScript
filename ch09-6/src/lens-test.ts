/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   lens-test.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 22:51:59 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 23:06:28 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'
import { makeLens, getter, setter, setterUsingFunc } from './lens'
import { IPerson, makeRandomIPerson } from './model/person'

const nameLens = makeLens('name')
const getName = getter(nameLens)
const setName = setter(nameLens)
const setNameUsingFunc = setterUsingFunc(nameLens)

const person:IPerson = makeRandomIPerson()

const name = getName(person)
const newPerson = setName('Albert Einstein')(person)
const anotherPerson = setNameUsingFunc(name => `'Mr. ${name}'`)(person)
const capitalPerson = setNameUsingFunc(R.toUpper)(person)

console.log( name, getName(newPerson), getName(anotherPerson), getName(capitalPerson))

// IPerson 객체의 longitude 속성값을 알려면 person.location.coordinates.longitude 와 같은
// 코드를 작성해야 합니다. 람다 라이브러리에서는 객체의 이런 중첩속성(nested property)를 'path' 라고 합니다.
// 렌즈 = R.lensPath(['location', 'coordinate', 'longitude'])

const longitudeLens = R.lensPath(['location', 'coordinate', 'longitude'])
const getLongitude = getter(longitudeLens)
const setLongitude = setter(longitudeLens)
const setLongitudeUsingFunc = setterUsingFunc(longitudeLens)

const person2:IPerson = makeRandomIPerson()

const longitude = getLongitude(person2)
const newPerson2 = setLongitude(0.1234567)(person2)
const anotherPerson2 = setLongitudeUsingFunc(R.add(0.1234567))(person2)

console.log(
	longitude, getLongitude(newPerson2), getLongitude(anotherPerson2)
)
