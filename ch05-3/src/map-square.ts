/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   map-square.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 20:49:33 by honlee            #+#    #+#             */
/*   Updated: 2021/05/27 20:52:25 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as util from './utils/utils'

let squres: number[] = util.range(1, 5 + 1)
						.map((v : number) => (v * v))

console.log(squres)


let names: string[] = util.range(1, 5 + 1)
						.map((val : number, index : number) => (`[${index}]:${val}`))

console.log(names)