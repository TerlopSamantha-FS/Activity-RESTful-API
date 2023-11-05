let products = [
    { id: "1", slug: "nike-shoe", name: "Nike Shoe", price: 23 }
]

const all = () => {
    return products
}

const create = (product) => {
    const id = Number(products[products.length - 1].id) + 1 + ""
    products.push({ id, ...product })
    return products[products.length - 1]
}

const find = (id) => {
    return products.find(p => p.id === id)
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter((product) => product.id !== id);
    return products;
}

module.exports = { all, create, find, update, remove}