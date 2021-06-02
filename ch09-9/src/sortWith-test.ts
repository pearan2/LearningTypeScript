/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sortWith-test.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 11:04:57 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:08:45 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'
import { displayPersons } from './displayPersons'

const persons: IPerson[] = R.range(1, 4 +1).map(makeRandomIPerson)
const nameSortedPersons = R.sortWith( [R.descend(R.prop('name'))] )(persons) as IPerson[]
const ageSortedPersons = R.sortWith( [R.descend(R.prop('age'))] )(persons) as IPerson[]


displayPersons('sorted by name:\n')(nameSortedPersons)
displayPersons('sorted by age:\n')(ageSortedPersons)