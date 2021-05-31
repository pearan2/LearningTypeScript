/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   compose.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 22:01:13 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 22:52:30 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export const compose = <T, R>(...functions: readonly Function[]) : Function => 
	(x: T) => R => {
		const deepCopiedFunctions = [...functions]
		return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
	}