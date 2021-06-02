/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   IPerson.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:44:49 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:45:38 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ILocation } from '../location'

export type IPerson = {
	name:string
	age:number
	title?:string
	location?:ILocation
}

export {ILocation}