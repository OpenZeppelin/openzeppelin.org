const handleErrorCode = require('./util').handleErrorCode
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
    const parentDir = path.resolve('..')
    const outputDir = path.resolve('docs')
    const websiteDir = path.resolve(outputDir, 'website')
    const apiDir = path.resolve(websiteDir, 'build', 'api')
    shell.cd(tempDir)
    handleErrorCode(shell.exec('git clone https://github.com/OpenZeppelin/zeppelin-solidity.git'))
    shell.cd('zeppelin-solidity')
    handleErrorCode(shell.exec(`git checkout -b ${tag} ${tag}`))
    handleErrorCode(shell.exec(`npx soldoc ${repoDir} ${outputDir} --exclude mocks,examples`))
    shell.cd(websiteDir)
    handleErrorCode(shell.exec('npm run build'))
    shell.mv(apiDir, parentDir)
  }
  finally {
    shell.rm('-rf', tempDir)
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
