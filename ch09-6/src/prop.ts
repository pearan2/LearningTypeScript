/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   prop.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:53:54 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 22:36:58 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// lens 란?
// 렌즈는 하스켈언어의 Control.Lens 라이브러리 내용 중 자바스크립트에서 동작할 수 있는 게터와 세터
// 기능만을 람다 함수로 구현한 것입니다. 람자의 렌즈기능을 활용하면, 객체의 속성값을 얻거나, 설정하는 등의 작업을 손쉽게 할 수 있습니다
// 렌즈 기능은 다음 첫번째 항목처럼 객체의 특정 속성에 대한 렌즈를 만들고, 나머지 과정을 진행하는 방식으로 이용합니다.

// 1. R.lens 함수로 객체의 특정 속성에 대한 렌즈를 만든다.
// 2. 렌즈를 R.view 함수에 적용해 속성값을 얻는다.
// 3. 렌즈를 R.set 함수에 적용해 속성값이 바뀐 새로운 객체를 얻는다.
// 4. 렌즈와 속성값을 바꾸는 함수를 R.over 함수에 적용해 값이 바뀐 새로운 객체를 얻는다.

// 렌즈 기능을 이하려면 R.prop 와 R.assoc 라는 함수를 알아야합니다. R.prop 는 'property' 라는 뜻입니다.
// R.prop 는 객체의 특정 속성값을 가져오는 함수로서, 이런 동작을 하는 함수를 게터라고 합니다.

import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const person: IPerson = makeRandomIPerson()

const name = R.pipe(
	R.prop<'name',string>('name'),		// 참조 : https://stackoverflow.com/questions/51936369/what-is-the-record-type-in-typescript
	R.tap(name => console.log(name))
)(person)