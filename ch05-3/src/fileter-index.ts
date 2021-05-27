/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   fileter-index.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 20:42:48 by honlee            #+#    #+#             */
/*   Updated: 2021/05/27 20:48:52 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// filter 메서드는 두번째 매개변수에 index 라는 선택 속성을 제공합니다. 다음 코드는
// index 값을 사용해 배열을 반으로 나누는 예입니다.

import * as util from './utils/utils'

const array: number[] = util.range(1, 10 + 1)
const half:number = array.length / 2

let belowHalf:number[] = array.filter((v :number, index :number) => (index < half))
let overHalf:number[] = array.filter((v:number, index:number) => (index >= half))

console.log(belowHalf, overHalf)