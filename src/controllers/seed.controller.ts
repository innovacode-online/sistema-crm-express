import { Request, Response } from "express";
import { prisma } from "../lib/prisma";



// PLANTAR DATOS EN LA DB
async function seedDatabase( req: Request, res: Response ) {
    
    await prisma.client.deleteMany();
    await prisma.company.deleteMany();

    await prisma.company.create({
        data: 
            {
                name: "Innova Code",
                direction: "Achumani 32",
                email: "innovacode@correo.com",
                numberPhone: "77722999",
                clients: {
                    createMany: {
                        data: [
                            {
                                name: "Mattias",
                                lastname: "Duarte",
                                email: "mattias@innovacode.com",
                                numberPhone: "77722999",
                            },
                            {
                                name: "Alexandre",
                                lastname: "Duarte",
                                email: "alexandre@innovacode.com",
                                numberPhone: "77722999",
                            },
                            {
                                name: "Ian",
                                lastname: "Velazquez",
                                email: "ian@innovacode.com",
                                numberPhone: "77722999",
                            },
                            {
                                name: "Milton",
                                lastname: "Mamani",
                                email: "milton@innovacode.com",
                                numberPhone: "77722999",
                            }
                        ]
                    }
                }
            },

        

    })


    return res.json({
        message: "Seeding database"
    })

}

export default {
    seedDatabase,
}