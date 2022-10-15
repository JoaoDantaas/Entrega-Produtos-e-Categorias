import updateCategoriesService from "../../services/categories/updateCategories.service";

const updateCategoriesController = async (req, res) => {
    try {
        const {name} = req.body;
        const { id } = req.params;

        const categories = await updateCategoriesService(name, id);

        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default updateCategoriesController;