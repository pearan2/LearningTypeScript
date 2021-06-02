/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   displayPersons.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 10:55:09 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 11:03:35 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'
import { IPerson } from './model/person'

export const displayPersons = (input_str:string) => 
	R.pipe(
		R.map((person:IPerson) => ( {name:person.name, age:person.age}) ),
		R.tap(n => console.log(input_str, n))
	)
