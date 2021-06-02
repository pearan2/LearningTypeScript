/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeRandomIPerson.ts                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:47:30 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:48:46 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { IPerson, makeIPerson } from './makeIPerson'
import { makeRandomILocation } from '../location'
import Chance from 'chance'

const c = new Chance

export const makeRandomIPerson = ():IPerson =>
	makeIPerson(c.name(), c.age(), c.profession(), makeRandomILocation())