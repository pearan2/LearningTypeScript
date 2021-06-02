/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   quadratic-test.ts                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 14:38:59 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 14:39:52 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'
import {quadratic} from './quadratic'

const input: number[] = R.range(1, 10 + 1)
const quadraticResult = R.pipe(
	R.map(quadratic),
	R.tap(a => console.log(a))
)(input)