function promise(){
    return new Promise((res, rej) => {
        res('done')
    })
}

module.exports = promise