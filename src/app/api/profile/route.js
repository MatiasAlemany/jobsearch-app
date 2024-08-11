import { serverValidateAuth } from "@/utils/server-validate-auth";
import { serverValidateSchema } from "@/utils/server-validate-schema";
import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/app/db";

const schema = z.object({
  customName: z.string().min(3),
  customSecondName: z.string().min(3).optional(),
  birthdate: z.string().optional(),
  province: z.string().optional(),
  address: z.string().optional(),
});

export async function POST(req) {

  //User is logged
  const user = await serverValidateAuth();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  //Getting data
  const data = await req.json();

  //Zod validator
  const result = await serverValidateSchema(schema, data);
  const profile = result.data

  if (profile.birthdate) {
    profile.birthdate = new Date(profile.birthdate);
  }

  try {
    const updateProfile = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: profile,
    });

    return NextResponse.json({
      message: "Solicitud POST exitosa",
      user: updateProfile,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: "Invalid Request" }, { status: 500 });
  }
  }

