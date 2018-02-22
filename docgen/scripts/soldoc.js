const path = require('path')
const shell = require('shelljs')
const tmp = require('tmp')

/**
 * Entry point.
 */
function main(argv) {
  if(argv.length !== 3) {
    console.error([
      'Missing OpenZeppelin repository tag.',
      'Usage: npm run soldoc -- <tag>',
      'Example: npm run soldoc -- v1.7.0'
    ].join('\n'))
    process.exit(1)
  }
  const tag = argv[2]
  const tempDir = tmp.dirSync().name
  try {
    const repoDir = path.resolve(tempDir, 'zeppelin-solidity')
    const outputDir = path.resolve('docs')
    shell.cd(tempDir)
    handleErrorCode(shell.exec('git clone https://github.com/OpenZeppelin/zeppelin-solidity.git'))
    shell.cd('zeppelin-solidity')
    handleErrorCode(shell.exec(`git checkout -b ${tag} ${tag}`))
    handleErrorCode(shell.exec(`npx soldoc ${repoDir} ${outputDir} --exclude mocks,examples`))
  }
  finally {
    shell.rm('-rf', tempDir)
  }
}

/**
 * Handle any potential error codes returned by a shelljs
 * command execution.
 */
function handleErrorCode(commandOutput) {
  if (commandOutput.code !== 0) {
    throw new Error([
      `Command line operation failed with code ${commandOutput.code}.`,
      `Standard error output: ${commandOutput.stderr}`
    ].join('\n'))
  }
}

if (require.main === module) {
  try {
    main(process.argv)
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}
