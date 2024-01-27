import { Request, Response } from "express";


async function getAllCompanies( req: Request  , res: Response ){

    return res.json({ 
        mensaje: 'Hola mundo'
    })

}



export default {
    getAllCompanies,
}
