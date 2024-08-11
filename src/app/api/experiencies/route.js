import { serverValidateAuth } from "@/utils/server-validate-auth";
import { serverValidateSchema } from "@/utils/server-validate-schema";
import { z } from "zod";
import { NextResponse } from "next/server";
import prisma from "@/app/db";

const schema = z.object({
  companyName: z.string().min(1),
  role: z.string().min(3),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});

export async function POST(req) {
  //USER IS LOGGED
  const user = await serverValidateAuth();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  //GETTING DATA
  const data = await req.json();
  /* console.log("Datos", data); */

  //ZOD VALIDATOR
  const response = serverValidateSchema(schema, data);
  const experienceData = response.data;

  // Convert dates to Date objects
  experienceData.startDate = new Date(experienceData.startDate);
  experienceData.endDate = new Date(experienceData.endDate);

  try {
    const newExperience = await prisma.experience.create({
      data: {
        ...experienceData,
        userId: user.id,
      },
    });

    return NextResponse.json({
      message: "Experience created",
      experience: newExperience,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid Request" }, { status: 500 });
  }
}
