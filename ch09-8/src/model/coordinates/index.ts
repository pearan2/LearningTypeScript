/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:15:44 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:17:02 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { ICoordinates } from './ICoordinates'
import { makeICoordinates } from './makeICoordinates'
import { makeRandomICoordinates } from './makeRandomICoordinates'

// ICoordinates 와 makeICoordinates, makeRandomICoordinates를 re-export 한다.
export {ICoordinates, makeICoordinates, makeRandomICoordinates}