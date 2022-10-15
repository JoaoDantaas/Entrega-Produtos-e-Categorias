import createProductsService from "../../services/products/createProducts.service"

const createProductsController = async (req, res) => {
    try {
        const {name, price, category_id} = req.body

        const products = await createProductsService(name, price, category_id)
    
        return res.status(201).json({ 
            message: "Product created",
            product: products

        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export default createProductsController;