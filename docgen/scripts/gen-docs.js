const handleErrorCode = require('./util').handleErrorCode
const path = require('path')
const shell = require('shelljs')
const tmp = require('tmp')

/**
 * Entry point.
 */
function main(argv) {
  shell.mkdir('-p', 'docs')
  shell.pushd('-q', 'docs')
  handleErrorCode(shell.exec('npm init -y'))
  handleErrorCode(shell.exec('npm install docusaurus-init'))
  handleErrorCode(shell.exec('docusaurus-init'))
  shell.mv('docs-examples-from-docusaurus/', 'docs')
  shell.mv('website/blog-examples-from-docusaurus/', 'website/blog')
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
