import database from "../../database"

const updateProductsService = async (name, price, id) => {
    try {
        const res = await database.query(
            `UPDATE
                products
            SET
                name = ($1),
                price = ($2)
            WHERE
                id = ($3) RETURNING *;`, 
            [name, price, id]
            )

        return {
            message: "Product updated",
            product: res.rows[0]
        }

    } catch (error) {
        throw new Error(error)
    }
   
}

export default updateProductsService;