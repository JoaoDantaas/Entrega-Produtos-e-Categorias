import listProductsService from "../../services/products/listProducts.service";

const listProductsController = async (req, res) => {
    try {
        const categories = await listProductsService()

        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default listProductsController;