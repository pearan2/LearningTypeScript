/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sortBy-test.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 10:53:36 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:04:42 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'
import { displayPersons } from './displayPersons'

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson)
const nameSortedPersons = R.sortBy(R.prop('name'))(persons)
const ageSortedPersons = R.sortBy(R.prop('age'))(persons)

displayPersons('sorted by name:\n')(nameSortedPersons)
displayPersons('sorted by age:\n')(ageSortedPersons)

// 아쉽게도 오름차순, 내림차순 정렬을 하지 못하고 항상 오름차순 정렬만 합니다.