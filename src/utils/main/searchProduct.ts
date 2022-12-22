import { db } from "../../db"

export const crateArr = () => {
    const arr = [...db.products];    
    return arr;
}