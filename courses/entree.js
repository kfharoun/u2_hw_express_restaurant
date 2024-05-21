const getEntrees = (req, res) => {
    res.send(entrees)
}

const entrees = [
    {
        name: "Blackened YellowFin Tuna",
        price: "28.95",
        description: "fire-roasted sweet pepper relish, creole mustard cream sauce, mashed red bliss potatoes",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/99/a3/f7/tuna.jpg"
    },
    {
        name: "Boiled Lobster",
        price: "37.95",
        description: "1 1/2lb lobster, corn on the cob, red bliss potatoes", 
        image: "https://therhodelesstraveled.files.wordpress.com/2013/08/lobster.jpg"
    },
    {
        name: "Fish and Chips",
        price: "19.95",
        description: "fresh Atlantic cod, coleslaw, fries, tartar",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/e8/93/bd/photo0jpg.jpg"
    }
]

const getEntreeId = (req, res) => {
    res.send(entrees[req.params.id])
}

const getEntreeName = (req, res) => {
    const name = req.params.name.toLowerCase()
    const entreeName = entrees.filter(entree => entree.name.toLowerCase().includes(name))
    res.send(entreeName)
}

const byEntreeDescription = (req, res) => {
    const description = req.params.description.toLowerCase()
    const entreeDescName = entrees.filter(entree => entree.description.toLowerCase().includes(description))
    res.send(entreeDescName)
}

module.exports = {
    getEntrees, 
    getEntreeId, 
    getEntreeName,
    byEntreeDescription
}
