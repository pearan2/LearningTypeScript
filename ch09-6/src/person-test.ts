/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   person-test.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:49:45 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:50:11 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { IPerson, makeRandomIPerson } from './model/person'

const person: IPerson = makeRandomIPerson()
console.log(person)