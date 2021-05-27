/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pureSort-test.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 21:28:59 by honlee            #+#    #+#             */
/*   Updated: 2021/05/27 21:29:43 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {pureSort} from './pureSort'

let beforeSort:number[] = [6, 2, 9 ,0]
const afferSort = pureSort(beforeSort)
console.log(afferSort, beforeSort)