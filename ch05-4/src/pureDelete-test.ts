/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pureDelete-test.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 22:05:03 by honlee            #+#    #+#             */
/*   Updated: 2021/05/27 22:06:49 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {pureDelete} from './pureDelete'

const mixedArray: object[] = [
	[], {name:'Jack'}, {name: 'Jane', age: 32}, ['description']
]

const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val))
console.log(objectsOnly)