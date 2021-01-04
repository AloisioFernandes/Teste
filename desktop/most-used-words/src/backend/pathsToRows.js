const fs = require('fs') //file system

module.exports = (paths) => {
  return new Promise((resolver, reject) => {
    try {
      const rows = paths
        .map(path => fs.readFileSync(path).toString('utf-8'))
        .reduce((fullText, fileText) => `${fullText}\n${fileText}`) //retorn uma string com todas as frases
        .split('\n')
      resolver(rows)
    } catch(e) {
      reject(e)
    }
  })
}