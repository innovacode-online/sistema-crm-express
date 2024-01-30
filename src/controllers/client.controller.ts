import { Request, Response } from "express";
import { prisma } from '../lib/prisma';


async function getClients( req: Request, res: Response ) {
    const clients = await prisma.client.findMany();
    return res.json({ clients });
}


async function showClient( req: Request, res: Response ) {
    const { id } = req.params;
    const client = await prisma.client.findUnique({
        where: {
            id,
        },
        select: {
            company: true,
            name: true,
            lastname: true,
            email: true,
            numberPhone: true,
        },
    });

    if( !client ) return res.status( 404 ).json({ message: "No se encontro el cliente" });

    return res.json({ client });
}


async function createClient( req: Request, res: Response ) {
    const { name, email, lastname, companyId, numberPhone } = req.body;

    if( !name ) return res.status(400).json({ message: "Debe asignar un nombre" });
    if( !lastname ) return res.status(400).json({ message: "El apellido es obligatorio" });
    if( !companyId ) return res.status(400).json({ message: "Debe asignarle una empresa" });
    if( !email ) return res.status(400).json({ message: "Debe agregar un correo electronico" });
    if( !numberPhone ) return res.status(400).json({ message: "Debe asignar un numero de referencia" });

    const clientExist = await prisma.client.findFirst({
        where: { email }
    })

    if( clientExist ) return res.status(400).json({ message: "Ya se registro un cliente con ese correo" });

    const client = await prisma.client.create({
        data: {
            email,
            lastname,
            numberPhone,
            name,
            companyId
        }
    })

    return res.status(201).json({
        message: "Cliente registrado con exito",
        client
    })


}


async function updateClient( req: Request, res: Response ) {
    const { id } = req.params;

    const clientExist = await prisma.client.findUnique({
        where: {
            id,
        }
    });

    if( !clientExist ) return res.status( 404 ).json({ message: "No se encontro el cliente" });

    const { email, lastname, name, companyId } = req.body;

    const client = await prisma.client.update({
        where: { id },
        data: { email, lastname, name, companyId },
    });


    return res.status(200).json({
        message: "Se actualizo la informacion del cliente",
        client,
    })
}


async function deleteClient( req: Request, res: Response ) {
    const { id } = req.params;

    const client = await prisma.client.findUnique({
        where: {
            id,
        }
    });

    if( !client ) return res.status( 404 ).json({ message: "No se encontro el cliente" });

    await prisma.client.delete({
        where: {
            id
        }
    });

    return res.status(200).json({
        message: "Se elimino el cliente",
        client,
    });
}


export default {
    getClients,
    showClient,
    createClient,
    updateClient,
    deleteClient,
}