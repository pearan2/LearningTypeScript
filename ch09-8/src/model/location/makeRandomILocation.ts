/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeRandomILocation.ts                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:38:08 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:40:01 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ILocation } from './ILocation'
import { makeILocation } from './makeILocation'
import { makeRandomICoordinates } from '../coordinates'
import Chance from 'chance'
const c = new Chance

export const makeRandomILocation = (): ILocation =>
	makeILocation(c.country(), c.city(), c.address(), makeRandomICoordinates())