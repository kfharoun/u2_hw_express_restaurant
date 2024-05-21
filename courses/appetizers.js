const getApps = (req, res) => {
    res.send(appetizers)
}

const appetizers = [
    {
        name: "Mussels",
        price: "15.95",
        description: "white wine, herb butter, garlic crostini",
        image: "https://ecsga.org/wp-content/uploads/2020/12/MOBmussels.jpg"
    },
    {
        name: "Lobster Pizza",
        price: "23.95",
        description: "naan, lobster, marscapone, arugula, gouda, mozzarella, white truffle",
        image: "https://lh5.googleusercontent.com/p/AF1QipPv75gV7h07eILE_xCfHejm6blB71WwD24cGUrg"
    },
    {
        name: "Oyster Trio", 
        price: "15.95",
        description: "two Grilled, two Bourbon, two Rockefeller oysters",
        image: "https://parade.com/.image/t_share/MTkwNTgxMTgwNTU3NjMyNjM3/matunuck-oyster-bar-oyster-trio.jpg"
    },
    {
        name: "PT. Judith Calamari", 
        price: "15.95",
        description: "lightly fried, cherry peppers, arugula, capers, citris aoili",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/b0/26/1f/pt-judith-calamari-at.jpg"
    }
]

const getApp = (req, res) => {
    res.send(appetizers[req.params.id])
}

const getAppName = (req, res) => {
    const name = req.params.name.toLowerCase()
    const appName = appetizers.filter(appetizer => appetizer.name.toLowerCase().includes(name))
    res.send(appName)
    console.log(appName)
}

const byAppDescription = (req, res) => {
    const description = req.params.description.toLowerCase()
    const appDescName = appetizers.filter(appetizer => appetizer.description.toLowerCase().includes(description))
    res.send(appDescName)
}

module.exports = {
    getApps, 
    getApp, 
    getAppName, 
    byAppDescription
}