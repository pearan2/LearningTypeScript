/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   f-g-h.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 21:52:18 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 22:01:09 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export const f = <T>(x: T): string => `f(${x})`
export const g = <T>(x: T): string => `g(${x})`
export const h = <T>(x: T): string => `h(${x})`


// 함수 조합 (function composition)은 작은 기능을 구현한 함수를 여러번 조합해 더 의미있는 함수를
// 만들어 내는 프로그램 설계기법 입니다. 함수 조합을 할수 있는 언어들은 compose 혹은 pipe 라는 이름의
// 함수를 제공하거나 만들 수 있습니다.
// 앞서 f g h 가 있을 때 이 함수들 모두 애리티가 1 이라면 다음처럼 함수를 연결해서 사용 할 수 있다고 했습니다.
// x ~> f ~> g ~> h ~> y

// 이제 이 함수를 가지고 다음 수식을 만들어내는 compose와 pipe 라는 이름의 함수를 만들겠습니다.
// y = h(g(f(x)))

// compose.ts 에서 계속