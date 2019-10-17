create = (req, res, next) => {
    const { name, description, price, image_url} = req.body;
    const db = req.app.get("db");
    db.create_product(name, description, price, image_url).then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.status(500).json("ERROR: Could not run SQL query.");
    })
};

getOne = (req, res, next) => {
    const {product_id} = req.params;
    const db = req.app.get("db");
    db.read_product(+product_id).then(product => {
        console.log(prodcut);
        res.sendStatus(200).json(product);
    }).catch(error => {
        console.log(error);
        res.status(500).json("ERROR: Could not run SQL query.");
    })
};

getAll = (req, res, next) => {
    const {product_id} = req.params;
    const db = req.app.get('db');
    db.read_products(+product_id).then(products => {
        console.log(products);
        res.status(200).json(products)
    }).catch(error => {
        console.log(error);
        res.status(500).json("ERROR: Could not run SQL query.");
    })
};

update = (req, res, next) => {
    const { params, query} = req.params;
    const db = req.app.get('db');
    db.update_products([params.id, query,desc]).then(product => {
        res.sendStatus(200).json(product);
    }).catch(error => {
        console.log(error);
        res.status(500).json("ERROR: Could not run SQL query.");
    })
};

delete_product = (req, res, next) => {
    const {product_id} = req.params;
    const db = req.app.get('db');
    db.delete_product(+product_id).then(product => {
        res.sendStatus(200).json(product);
    }).catch(error => {
        res.status(500).json("ERROR: Could not run SQL query.");
    })
};

module.exports = {
    create,
    getOne,
    getAll,
    update,
    delete_product
};