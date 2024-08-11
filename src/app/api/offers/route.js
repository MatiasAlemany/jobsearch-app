import { NextResponse } from "next/server";
import { z } from "zod";
import { serverValidateAuth } from "@/utils/server-validate-auth";
import { serverValidateSchema } from "@/utils/server-validate-schema";
import prisma from "@/app/db";

const schema = z.object({
  title: z.string().min(4),
  description: z.string().min(6),
  companyId: z.string(),
  workTime: z.string(),
  contract: z.string(),
  salary: z.string(),
  province: z.string(),
});

export async function POST(req) {
  if (req.method === "POST") {
    //User is logged
    const user = await serverValidateAuth();

    //GETTING DATA
    const data = await req.json();

    //ZOD VALIDATOR
    const response = serverValidateSchema(schema, data);

    const userCompanies = await prisma.company.findMany({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
      },
    });

    const userCopmaniesIds = userCompanies.map((company) => company.id);

    const isUserCompany = userCopmaniesIds.some(
      (companyId) => response.data.companyId === companyId
    );

    console.log("Companias", userCopmaniesIds);

    if (!isUserCompany) {
      NextResponse.json({ error: "Invalid Request" }, { status: 500 });
    }

    try {
      const newOffer = await prisma.jobOffer.create({
        data: {
          ...response.data,
          
        },
      });

      return NextResponse.json({
        message: "Solicitud POST exitosa",
        jobOffer: newOffer,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Invalid Request" }, { status: 500 });
    }
  } else {
    NextResponse.json({error: "Invalid Request"},{status:400})
  }
}
