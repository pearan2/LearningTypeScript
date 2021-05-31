/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   first-order_func.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 11:31:41 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 12:24:14 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { FristOrderFunc } from "./function-signature";

export const inc: FristOrderFunc<number, number> = (x : number) : number => x + 1

// console.log(
// 	inc(1)  //  2
// )