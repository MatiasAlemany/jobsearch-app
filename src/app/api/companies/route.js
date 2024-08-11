import { NextResponse } from "next/server";
import prisma from "@/app/db";
import { z } from "zod";
import { serverValidateAuth } from "@/utils/server-validate-auth";
import { serverValidateSchema } from "@/utils/server-validate-schema";

// SCHEMA FOR VALIDATION FROM SERVER

const schema = z.object({
  name: z.string().min(1),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
  website: z.string().optional(),
});

export async function POST(req) {
  //User is logged
  const user = await serverValidateAuth();

  //GETTING DATA
  const data = await req.json();

  //ZOD VALIDATOR
  const response = serverValidateSchema(schema, data);

  // Aquí puedes añadir la lógica para manejar los datos de la empresa, como guardarlos en una base de datos
  try {
    const newCompany = await prisma.company.create({
      data: {
        ...response.data,
        phoneNumber: parseInt(data.phoneNumber) || undefined,
        userId: user.id,
      },
    });

    return NextResponse.json({
      message: "Solicitud POST exitosa",
      company: newCompany,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid Request" }, { status: 500 });
  }
}
