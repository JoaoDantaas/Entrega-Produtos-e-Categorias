import listCategoriesIdService from "../../services/categories/listCategoriesId.service";

const listCategoriesIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const categories = await listCategoriesIdService(id);

        return res.status(200).json(categories);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default listCategoriesIdController;