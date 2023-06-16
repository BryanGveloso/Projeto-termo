const radompala = (wordsList) => {
    const palavras = wordsList.legth;
    const random = Math.floor(Math.random() * palavras);
    return radompala[random]
}

const test = () => {
    return typeof process !== 'undefined'
    && process.env.NODE_ENV === 'test'
}

const loadWords = async () => {
    return fetch('words.json')
    .then((response) => response.json())
    .then(({ words }) => words)
    .catch(() => [])
}

const start = () => {
    if (test()) {
        module.exports = {
            radompala,
            test,
            loadWords
        }
        return
    }

    window.onload = async () => {
        const database = await loadWords()
        console.log(database)
        console.log('Essa é a plavra randomica: ', radompala(database))
    }
}

start()