/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   keys-test.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 23:25:01 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 23:26:13 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// R.keys 함수는 객체의 속성 이름만 추려서 string[] 타입 배열로 반환합니다. 다음 코드는 
// IPerson 객체에 R.keys 함수를 적용한 예입니다.

import * as R from 'ramda'
import { makeRandomIPerson } from './model/person'

const keys:string[] = R.keys(makeRandomIPerson())
console.log('keys: ',keys)