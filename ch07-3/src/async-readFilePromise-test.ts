/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-readFilePromise-test.ts                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/31 11:11:30 by honlee            #+#    #+#             */
/*   Updated: 2021/05/31 11:15:17 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// readFile 을 프로미스로 만든 readFilePromise.ts 를 async 함수에 적용해보겠습니다.

import { readFilePromise } from "./readFilePromise";

const readFilesAll = async(filename:string[]) => {
	return await Promise.all(filename.map(filename => readFilePromise(filename)))
}

readFilesAll(['./package.json', './tsconfig.json'])
	.then(([packageJson, tsconfigJson] : string[]) => {
		console.log('<package.json>: ', packageJson)
		console.log('<tsconfig.json>: ', tsconfigJson)
	})
	.catch(error => console.log('error: ', error.message))