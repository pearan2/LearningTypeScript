import {readFile} from 'fs'

export const readFilePromise = (filename: string): Promise<string> => 
	new Promise<string>((
		resolve: (value: string) => void,
		reject: (error: Error | null) => void) => {
			readFile(filename, (error : Error | null, buffer : Buffer) => {
				if (error) reject(error)
				else resolve(buffer.toString())
			})
		}
	)