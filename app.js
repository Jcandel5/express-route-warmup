const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (res,req) => {
    res.json({'data': data})
})


app.get('/:id', (req, res) => {
    var id = req.params.id
    let result = data.filter(colony => +id == colony.id)
    res.json({'result': result })
})

app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'Not found' }})
  })

  app.use((err, req, res, next) => {
    res.status(500).json({ error: { message: 'Stop Hacking' }})
  })



app.listen(3000, function () {
    console.log(`listening on ${port}`)
})
const listener = () => console.log(`Pool Party on Port ${port}`)
app.listen(port, listener)
