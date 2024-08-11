import { redirect } from "next/dist/server/api-utils";
import { serverValidateAuth } from "../utils/server-validate-auth";
import prisma from "@/app/db";

export async function getMyOffersData() {
  const user = await serverValidateAuth();

  if (!user) {
    redirect("/api/auth/signin");
    return
  }

  const myOffers = await prisma.user.findUnique({
    where: {
      id: user.id
    },
    include: {
        requestedJobs: true,
    }
  });

  return {myOffers:myOffers.requestedJobs};
}
