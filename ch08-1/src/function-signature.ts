/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   function-signature.ts                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 11:29:29 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 11:31:27 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export type FristOrderFunc<T, R> = (arg0 : T) => R
export type SecondOrderFunc<T, R> = (arg0 : T) => FristOrderFunc<T, R>
export type ThirdOrderFunc<T, R> = (arg0: T) => SecondOrderFunc<T, R>

