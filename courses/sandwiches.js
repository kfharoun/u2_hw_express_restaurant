const getSandwiches = (req, res) => {
    res.send(sandwiches)
}

const sandwiches = [
    {
        name: "Lobster Roll", 
        price: "28.95", 
        description: "chilled lobster meat, lightly dressed with mayonnaise, chopped celery, grilled buttery roll"
    },
    {
        name: "Oyster Po Boy", 
        price: "19.95", 
        description: "lightly fried oysters, lettuce, tomato, pickles, remoulade, colselaw, toasted baguette"
    },
    {
        name: "Sunset Farm Burger", 
        price: "16.95",
        description: "Narraganset 1/2 lb all natural free-range beef, Vermont cheddar, lettuce, tomato"
    }
]

const getSandwich = (req, res) => {
    res.send(sandwiches[req.params.id])
}

const getSandwichName = (req, res) => {
    const name = req.params.name.toLowerCase()
    const sandwichName = sandwiches.filter(sandwich => sandwich.name.toLowerCase().includes(name))
    res.send(sandwichName)
}

const bySandwichDescription = (req, res) => {
    const description = req.params.description.toLowerCase()
    const sandwichDescName = sandwiches.filter(sandwich => sandwich.description.toLowerCase().includes(description))
    res.send(sandwichDescName)
}

module.exports = {
    getSandwiches,
    getSandwich,
    getSandwichName,
    bySandwichDescription
}
