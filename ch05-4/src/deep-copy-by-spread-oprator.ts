/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   deep-copy-by-spread-oprator.ts                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 21:26:10 by honlee            #+#    #+#             */
/*   Updated: 2021/05/27 21:26:47 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const oArray:number[] = [1, 2, 3, 4]
const deepCopiedArray:number[] = [...oArray]
deepCopiedArray[0] = 0
console.log(deepCopiedArray, oArray)