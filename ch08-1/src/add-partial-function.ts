/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   add-partial-function.ts                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 12:20:29 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 12:24:27 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { FristOrderFunc, SecondOrderFunc } from "./function-signature";
import { add } from "./second-order-func";

const add1: FristOrderFunc<number, number> = add(1) // add1은 부분함수

console.log(
	add1(3), // 4
	add(1)(2)  // 3 
)