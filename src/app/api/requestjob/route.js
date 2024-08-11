import { NextResponse } from "next/server";
import { serverValidateAuth } from "@/utils/server-validate-auth";
import { serverValidateSchema } from "@/utils/server-validate-schema";
import { z } from "zod";
import prisma from "@/app/db";

const schema = z.object({
  offerId: z.string(),
});

export async function POST(req) {
  const data = await req.json();
  const requestedOffer = await serverValidateSchema(schema, data);
  console.log(data);

  try {
    const user = await serverValidateAuth();
    if (!user) {
      return NextResponse.redirect("/api/auth/signin");
    }

    const updatedJobOffer = await prisma.jobOffer.update({
      where: {
        id: requestedOffer.data.offerId,
      },
      data: {
        applicants: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    if (!updatedJobOffer) {
      console.error("Failed to update job offer");
      return NextResponse.json(
        { message: "Failed to update job offer" },
        { status: 500 }
      );
    }

    const userAppliedOffers = await prisma.jobOffer.findMany({
      where: {
        applicants: {
          some: {
            id: user.id,
          },
        },
      },
      select: {
        id: true,
      },
    });

    const userAppliedOffersIds = userAppliedOffers.map((offer) => offer.id);

    console.log({ userAppliedOffersIds });

    return NextResponse.json(
      { message: "Application successful", userAppliedOffersIds },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
