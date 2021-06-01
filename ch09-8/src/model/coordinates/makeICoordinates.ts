/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeICoordinates.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:12:22 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:13:49 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ICoordinates } from './ICoordinates'

export const makeICoordinates = (latitude: number, longitude: number): ICoordinates => 
	({latitude, longitude})