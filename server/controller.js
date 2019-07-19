module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then(products => res.status(200).json(products))
            .catch(err => console.log(`Error: ${err}`))
    },
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_product(id)
            .then(product => res.status(200).json(product))
            .catch(err => console.log(`Error: ${err}`))
    },
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, image} = req.body;
        db.create_product([name, price, image])
            .then(() => res.status(200))
            .catch(err => console.log(`Error: ${err}`))
    }, 
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const {name, price, image} = req.body;
        db.edit_product([id, name, price, image])
            .then(() => res.status(200))
            .catch(err => console.log(`Error: ${err}`))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product(id)
            .then(() => res.status(200))
            .catch(err => console.log(`Error: ${err}`))
    }  
}
