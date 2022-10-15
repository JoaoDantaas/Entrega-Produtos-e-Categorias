import database from "../../database"

const deleteCategoriesService = async (id) => {
    try {
        const res = await database.query(
            `DELETE FROM
                categories
             WHERE
                id = ($1) RETURNING *;`, 
            [id]
            )

    return 

    } catch (error) {
        throw new Error(error)
    }
   
}

export default deleteCategoriesService;