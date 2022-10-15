import createCategoriesService from "../../services/categories/createCategories.service";

const createCategoriesController = async (req, res) => {
    try {
        const {name} = req.body;

        const categories = await createCategoriesService(name)

        return res.status(201).json(
            { 
                message: "Category created",
                category: categories
    
            })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}

export default createCategoriesController;