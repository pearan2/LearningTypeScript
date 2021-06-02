/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ite.ts                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 15:43:01 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 16:34:52 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Array.filter 함수에서 사용되는 콜백 함수는 boolean 타입 값을 반환해야 하는데,
// 함수형 프로그래밍에서 boolean 타입 값을 반환해 어떤 조건을 만족해야하는지 판단하는 함수를 '서술자'라고 합니다.

// R.lt(a)(b): boolean  // a < b 이면 true
// R.lte(a)(b): boolean // a <= b 이면 true
// R.gt(a)(b): boolean //  a > b 이면 true
// R.gte(a)(b): boolean // a >= b 이면 true

// 이 함수들은 주로 R.filter 함수와 결합해 포인트가 없는 함수 형태로 사용됩니다.
// 다음 코드는 배열의 아이템중 3보다 크거나 같은 수만 선택하는 작업을 R.lte 선택자를 사용해 구현한 예입니다.
// R.lte(3) 은 3 <= x 의 의미입니다.

import * as R from 'ramda'

R.pipe(
	R.filter<number, "array">(R.lte(3)),
	R.tap(n => console.log(n))
)(R.range(1, 10 + 1))

R.pipe(
	R.filter<number, "array">(R.gt(6 + 1)),
	R.tap((n:number[]):void => console.log(n))
)(R.range(1, 10 + 1))

R.pipe(
	R.pipe(
		R.filter(R.lte(3)),
		R.filter(R.gt(6 + 1)),
		R.tap(n => console.log(n))
	)
)(R.range(1, 10 + 1))