module.exports = (words) => {
  return new Promise((resolver, reject) => {
    try {
      const groupedWords = words.reduce((obj, word) => {
        if(obj[word]) { //buscando atributo de objeto via string
          obj[word] = obj[word] + 1 //incrementa a quantidade da palavra
        } else {
          obj[word] = 1 //se for a primeira vez que a palavra foi encontrada define quantidade para 1
        }
        return obj
      }, {})

      const groupedWordsArray = Object
        .keys(groupedWords)
        .map(key => ({ name: key, amount: groupedWords[key] }))
        .sort((w1, w2) => w2.amount - w1.amount) //ordenando de forma decrescente

      resolver(words)
    } catch(e) {
      reject(e)
    }
  })
}