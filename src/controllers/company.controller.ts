import { Request, Response } from "express";
import { prisma } from '../lib/prisma';


async function getAllCompanies( req: Request  , res: Response ){
    const companies = await prisma.company.findMany();

    return res.json({ companies });
}

async function getCompanyById(req: Request  , res: Response) {
    
}

async function createNewCompany(req: Request  , res: Response) {
    
}

async function deleteCompanyById(req: Request  , res: Response) {
    
}



export default {
    getAllCompanies,
    getCompanyById,
    createNewCompany,
    deleteCompanyById,
}
