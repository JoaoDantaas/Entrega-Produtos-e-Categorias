import database from "../../database"

const deleteProductsService = async (id) => {
    try {
        const res = await database.query(
            `DELETE FROM
                products
             WHERE
                id = ($1) RETURNING *;`, 
            [id]
            )

        return {
            message: "Product deleted",
            product: res.rows[0]
        }

    } catch (error) {
        throw new Error(error)
    }
   
}

export default deleteProductsService;