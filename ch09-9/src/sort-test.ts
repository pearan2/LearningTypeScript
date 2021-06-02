/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sort-test.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 10:50:17 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 10:52:20 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'

type voidToNumberFunc = () => number

const makeRandomNumber = (max:number) : voidToNumberFunc => ():number => Math.floor(Math.random() * max)

const array = R.range(1, 5 + 1).map(makeRandomNumber(100))
const sortedArray = R.sort( (a:number, b:number):number => a - b )(array)

console.log(sortedArray)