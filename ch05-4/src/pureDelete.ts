/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pureDelete.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 22:03:05 by honlee            #+#    #+#             */
/*   Updated: 2021/05/27 22:07:27 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export const pureDelete = <T>(array: readonly T[], cb : (val : T, index? : number) => boolean): T[] =>
{
	return (array.filter((val:T, index:number) => (cb(val, index) == false)))
}
