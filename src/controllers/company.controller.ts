import { Request, Response } from "express";
import { prisma } from '../lib/prisma';


async function getAllCompanies( req: Request  , res: Response ){
    const companies = await prisma.company.findMany();
    return res.json({ companies });
}

async function getCompanyById(req: Request  , res: Response) {
    // const id = req.params.id;
    const { id } = req.params;

    const company = await prisma.company.findFirst({
        where: {
            id,
        },
        include: {
            clients: true,
        }
    });

    if( !company ){
        return res.status( 404 ).json({
            message: "No se encontro la empresa"
        })
    }


    return res.json({
        company
    })

}

async function createNewCompany(req: Request  , res: Response) {

    const { name, email, direction, numberPhone } = req.body;

    if( !name ) return res.status(400).json({ message: "Debe asignar un nombre" });
    if( !email ) return res.status(400).json({ message: "Debe agregar un correo electronico" });
    if( !direction ) return res.status(400).json({ message: "Debe asignar una dirección" });
    if( !numberPhone ) return res.status(400).json({ message: "Debe asignar un numero de referencia" });


    const company = await prisma.company.create({
        data: {
            name,
            email,
            direction,
            numberPhone,
        }
    });


    return res.json({
        message: 'Empresa registrada',
        company
    })
}

async function deleteCompanyById(req: Request  , res: Response) {
    const { id } = req.params;

    const company = await prisma.company.findFirst({
        where: {
            id,
        }
    });

    if( !company ){
        return res.status( 404 ).json({
            message: "No se encontro la empresa"
        })
    }

    await prisma.company.delete({
        where: {
            id
        }
    });

    return res.status( 200 ).json({
        message: "Se elimino la empresa",
        company,
    })
}



export default {
    getAllCompanies,
    getCompanyById,
    createNewCompany,
    deleteCompanyById,
}
