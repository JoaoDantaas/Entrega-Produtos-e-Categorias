import deleteCategoriesService from "../../services/categories/deleteCategories.service";

const deleteCategoriesController = async (req, res) => {
    try {
        const { id } = req.params;

        const categories = await deleteCategoriesService(id);

        return res.status(204).json(categories)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default deleteCategoriesController;