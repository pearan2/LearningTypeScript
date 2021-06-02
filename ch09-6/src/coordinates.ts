/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   coordinates.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 20:17:56 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 20:19:47 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// 여기서 눈여겨봐야 할 점은 아래의 import 구문입니다. coordinates는 파일 이름이 아니라 디렉터리 이름입니다.
// 하지만 해당 디렉터리에 index.ts 파일이 있으면 타입스크립트 컴파일러는 './model/coordinates/index' 로 해석합니다.
import { ICoordinates, makeRandomICoordinates } from './model/coordinates'

const coordinates: ICoordinates = makeRandomICoordinates()
console.log(coordinates)