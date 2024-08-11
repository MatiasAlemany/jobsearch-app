import { serverValidateAuth } from "@/utils/server-validate-auth";
import { serverValidateSchema } from "@/utils/server-validate-schema";
import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/db";

const schema = z.object({
  degreeName: z.string().min(3),
  degreeType: z.string().min(3),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});

export async function POST(req) {
  //USER LOGGED
  const user = await serverValidateAuth();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  //GETTING DATA
  const data = await req.json();
  console.log("Study:", data);

  //ZOD VALIDATOR
  const result = serverValidateSchema(schema, data);
  const studies = result.data;

    // Convert dates to Date objects
    studies.startDate = new Date(studies.startDate);
    studies.endDate = new Date(studies.endDate);

  try {
    const newStudy = await prisma.studies.create({
      data:{ 
      ...studies,
      userId: user.id,}
    });

    return NextResponse.json({
      message: "Study succesfuly created",
      studies: newStudy,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid Request" }, { status: 500 });
  }
}
