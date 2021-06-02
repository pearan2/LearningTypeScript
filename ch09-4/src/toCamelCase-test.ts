/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   toCamelCase-test.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 17:13:10 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 17:13:45 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {toCamelCase} from './toCamelCase'

console.log(
	toCamelCase(' ')('Hello world'),
	toCamelCase('_')('Hello_albert_einstein')
)