const express = require('express')
const cors = (require('cors'))
const appFolder = require(`./courses/appetizers`)
const entreeFolder = require(`./courses/entree`)
const sandwichFolder = require(`./courses/sandwiches`)
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, ()=> {
    console.log(`listening at port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('working!')
})

app.get(`/appetizers`, appFolder.getApps)

app.get(`/appetizers/name/:name`, appFolder.getAppName)

app.get(`/entrees`, entreeFolder.getEntrees)

app.get (`/entrees/:id`, entreeFolder.getEntreeId)

app.get(`/entrees/name/:name`, entreeFolder.getEntreeName)

app.get(`/entrees/description/:description`, entreeFolder.byEntreeDescription)

app.get(`/appetizers/description/:description`, appFolder.byAppDescription)

app.get(`/sandwiches`, sandwichFolder.getSandwiches)

app.get (`/sandwiches/:id`, sandwichFolder.getSandwich)

app.get(`/sandwiches/name/:name`, sandwichFolder.getSandwichName)

app.get(`/sandwiches/description/:description`, sandwichFolder.bySandwichDescription)