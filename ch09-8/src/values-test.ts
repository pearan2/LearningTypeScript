/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   values-test.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 23:27:59 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 23:28:38 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as R from 'ramda'
import { makeRandomIPerson } from './model/person'

// R.values 함수는 객체의 속성값만 추려서 any[] 타입 배열로 반환합니다.

const values:any[] = R.values(makeRandomIPerson())
console.log(values)