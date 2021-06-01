/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeILocation.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:36:07 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:37:31 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ILocation } from './ILocation'
import { ICoordinates, makeICoordinates } from '../coordinates'

export const makeILocation = (
	country: string,
	city: string,
	address: string,
	coordinate: ICoordinates
): ILocation => ({country, city, address, coordinate})