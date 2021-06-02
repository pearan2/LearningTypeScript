/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ILocation.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:34:33 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:36:02 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ICoordinates } from '../coordinates'

export type ILocation = {
	country:string
	city?:string
	address?:string
	coordinate?: ICoordinates
}