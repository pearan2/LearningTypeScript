/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   await-test.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 10:47:37 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 10:53:36 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {test1} from './await_test1'
import {test2} from './await_test2'

test1()
test2()

// 예상결과 : 1 1 hello hello
// 실행결과 : 1 hello 1 hello 

// 마치 두 함수가 동시에 실행된것 처럼 보입니다.
// async 함수 수정자가 붙은 함수는 다음처럼 흥미로운 성질이 있습니다.
// 1. 일반 함수처럼 사용 할 수 있다.
// Promise 객체로 사용 할 수 있다.
