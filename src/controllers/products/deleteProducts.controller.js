import deleteProductsService from "../../services/products/deleteProducts.service";

const deleteProductsController = async (req, res) => {
    try {
        const { id } = req.params;

        const categories = await deleteProductsService(id);

        return res.status(204).json(categories)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default deleteProductsController;