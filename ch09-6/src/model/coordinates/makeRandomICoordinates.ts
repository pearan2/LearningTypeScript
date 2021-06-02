/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeRandomICoordinates.ts                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:14:18 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:15:25 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ICoordinates } from './ICoordinates'
import { makeICoordinates } from './makeICoordinates'
import Chance from 'chance'

const c = new Chance

export const makeRandomICoordinates = () : ICoordinates =>
	makeICoordinates(c.latitude(), c.longitude())