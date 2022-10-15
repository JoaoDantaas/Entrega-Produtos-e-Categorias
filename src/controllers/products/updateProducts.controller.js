import updateProductsService from "../../services/products/updateProducts.service";

const updateProductsController = async (req, res) => {
    try {
        const {name, price} = req.body;
        const { id } = req.params;

        const categories = await updateProductsService(name, price, id);

        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default updateProductsController;