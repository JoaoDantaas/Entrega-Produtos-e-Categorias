import listProductsIdService from "../../services/products/listProductsId.service";

const listProductsIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const categories = await listProductsIdService(id);

        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default listProductsIdController;