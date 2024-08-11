import { redirect } from "next/dist/server/api-utils";
import { serverValidateAuth } from "../utils/server-validate-auth";
import prisma from "@/app/db";

export async function getSolicitudesData() {
  const user = await serverValidateAuth();

  if (!user) {
    redirect("/api/auth/signin");
    return;
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
      title: true,
      description: true,
    },
  });

  return { userAppliedOffers };
}
