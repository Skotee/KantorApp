import { createInterface } from 'readline'
import { createReadStream, writeFile } from 'fs'
import path from 'path'

const writeExampleConfig = arr => {
  let output = ``

  arr.map(element => {
    output = `${output}${element.join(' ')}\n`
  })

  writeFile(path.join(__dirname, process.argv[3]), output, () => {})
  console.log('[/bin/copyEnv] Successfully copied example config')
}

const lineReader = createInterface({
  input: createReadStream(path.join(__dirname, process.argv[2]))
})

const variablesToWrite = []
lineReader.on('line', line => {
  const splitLine = line.split(' ')
  variablesToWrite.push([splitLine[0], splitLine[1]])
})

lineReader.on('close', () => writeExampleConfig(variablesToWrite))
