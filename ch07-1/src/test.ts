/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   test.ts                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: honlee <honlee@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/05/27 23:19:16 by honlee            #+#    #+#             */
/*   Updated: 2021/05/28 00:06:43 by honlee           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { rejects } from 'assert/strict'
import {readFileSync, readFile} from 'fs'
import { resolve } from 'path/posix'

// 파일을 동기방식으로 읽는 예
console.log('read package.json using synchronous api...')
const buffer:Buffer = readFileSync('./test.txt')
console.log(buffer.toString())

// 파일을 비동기 방식으로 읽는 예
readFile('./test.txt', (error : Error | null, buffer : Buffer) => {
	console.log('read using asynchronous api...')
	console.log(buffer.toString())
})

// Promise 와 async/await 구문을 사용한 예
const readFilePromise = (filename : string) : Promise<string> => 
	new Promise<string>((resolve, reject) => {
		readFile(filename, (error : Error | null, buffer: Buffer) => {
			if (error)
				reject(error)
			else
				resolve(buffer.toString())
		})
	});

(async() => {
	const content = await readFilePromise('./test.txt')
	console.log('read using async()')
	console.log(content)
})()