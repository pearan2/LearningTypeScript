/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-as-promise.ts                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 10:53:45 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 10:56:24 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { test1 } from "./await_test1";
import { test2 } from "./await_test2";

test1()
	.then(() => test2())

// 앞서 본 await-test.ts 는 async 함수를 일반함수로 사용 한 예입니다. 반면에 다음 코드는 async 함수를 Promise 객체로 사용한 예입니다.
// 앞 코드는 test1() 함수 호출이 해소(resolve) 된 다음에 비로소 test2() 함수를 호출하므로 실행결과가 await-test.ts 와 다릅니다.

