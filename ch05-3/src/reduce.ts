/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   reduce.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 20:52:44 by honlee            #+#    #+#             */
/*   Updated: 2021/05/27 20:59:12 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as util from './utils/utils'

let reduceSum: number = util.range(1, 100 + 1)
								.reduce( (result : number, value : number ) => (result + value) , 0)
console.log(reduceSum)


let reduceSum2:number = util.range(1, 10 + 1)
								.reduce( (result: number, value : number) => (result * value) , 1)
console.log(reduceSum2)