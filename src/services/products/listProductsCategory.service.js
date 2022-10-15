import database from "../../database"

const listProductsCategoryService = async (id) => {
    try {
        const res = await database.query(
            `SELECT
                products.name,
                products.price,
                categories.name as category
            FROM
                products
                INNER JOIN categories
                ON categories.id = products.category_id
             WHERE
                products.category_id = ($1)`, 
            [id]
            )
            
        return res.rows

    } catch (error) {
        throw new Error(error)
    }
   
}

export default listProductsCategoryService;