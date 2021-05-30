import {readFile} from 'fs'

readFile('./test.txt', (error : Error | null, buffer : Buffer) => {
	if (error) throw error
	else {
		const content:string = buffer.toString()
		console.log(content)

		readFile('./tsconfig.json', (error : Error | null, buffer: Buffer) => {
			if (error) throw error
			else {
				const content:string = buffer.toString()
				console.log(content)
			}
		})
	}
})