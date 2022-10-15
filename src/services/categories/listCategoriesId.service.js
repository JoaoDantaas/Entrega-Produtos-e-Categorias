import database from "../../database"

const listCategoriesIdService = async (id) => {
    try {
        const res = await database.query(
            `SELECT 
                *
            FROM 
                categories
            WHERE 
                id = ($1);`, 
            [id]
            )

        if(res.rows.length === 0){
            return {message: "id not found"}
        }
        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
   
}

export default listCategoriesIdService;