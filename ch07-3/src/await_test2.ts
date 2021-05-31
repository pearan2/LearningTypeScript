/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   await_test2.ts                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 10:44:26 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 10:45:08 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export async function test2() {
	let value:string = await 'hello'
	console.log(value)
	value = await Promise.resolve('hello')
	console.log(value)
}