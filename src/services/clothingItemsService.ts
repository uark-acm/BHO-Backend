import databaseConnection from "../loaders/postgres"

export const getClothingItems = async () => {
    const queryResponse = await databaseConnection.query('select * from orders;');
    return 
}