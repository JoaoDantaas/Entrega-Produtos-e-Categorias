import listProductsCategoryService from "../../services/products/listProductsCategory.service";


const listProductsCategoryController = async (req, res) => {
    try {
        const { id } = req.params;

        const categories = await listProductsCategoryService(id);

        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default listProductsCategoryController;