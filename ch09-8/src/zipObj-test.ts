/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   zipObj-test.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 23:29:37 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 23:31:12 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'
import { makeRandomIPerson, IPerson } from './model/person'

// R.zipObj 함수는 다음처럼 '키 배열'과 '값 배열' 이라는 두가지 매개변수를 결합해 객체로 만들어 줍니다.

const originalPerson:IPerson = makeRandomIPerson()
const keys:string[] = R.keys(originalPerson)
const values:any[] = R.values(originalPerson)
const zippedPerson:IPerson = R.zipObj(keys, values) as IPerson
console.log('originalPerson:',originalPerson, 'zippedPerson', zippedPerson)