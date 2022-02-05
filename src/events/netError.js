module.exports = (client) =>{
    client.on('shardError', err => {
        console.error(err)
    })
}