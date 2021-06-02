/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   prepend-test.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/02 10:44:42 by honlee            #+#    #+#             */
/*   Updated: 2021/06/02 10:46:45 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// R.prepend 와 R.append 는 기존 배열의 앞뒤에 새 아이템을 삽입한 새 배열을 만들어줍니다. 새 배열을 만들어줍니다 새 배열
// 순수함수 관점에서 기존 배열에 아이템을 직접 ㅅ바입하면 기존 배열의 내용을 훼손하게 되므로 이 함수들이 만들어졌습니다.

import * as R from 'ramda'

const array:number[] = [3, 4]
const newArray = R.prepend(1)(array)
console.log(array, newArray)

const newArray2 = R.append(22)(array)
console.log(array, newArray2)