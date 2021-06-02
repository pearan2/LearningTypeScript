/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   makeIPerson.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:46:35 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:47:27 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { IPerson, ILocation } from './IPerson'

export const makeIPerson = (
	name:string,
	age:number,
	title?:string,
	location?:ILocation
) => ({name, age, title, location})

export { IPerson, ILocation }