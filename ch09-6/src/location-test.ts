/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   location-test.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:41:55 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:42:31 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { makeRandomILocation, ILocation } from './model/location'

const location: ILocation = makeRandomILocation()
console.log(location)