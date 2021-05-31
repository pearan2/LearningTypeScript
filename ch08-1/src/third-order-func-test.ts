/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   third-order-func-test.ts                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 12:14:15 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 12:24:19 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { FristOrderFunc, SecondOrderFunc, ThirdOrderFunc } from "./function-signature";

export const add3: ThirdOrderFunc<number, number> = 
	(x: number): SecondOrderFunc<number, number> =>
	(y: number): FristOrderFunc<number, number> =>
	(z: number): number => x + y + z

// console.log(
// 	add3(1)(2)(3) // 6
// )