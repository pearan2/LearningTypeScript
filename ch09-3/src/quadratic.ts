/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   quadratic.ts                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/06/01 14:36:41 by honlee            #+#    #+#             */
/*   Updated: 2021/06/01 14:37:55 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {f, exp, square} from './f-using-ramda'

export const quadratic = f(1, 2, 1)
export {exp, square}  // exp와 square를 다시 export 한다.
