import prisma from "@/app/db";
import { serverValidateAuth } from "../utils/server-validate-auth";

export async function cancelButtonOffer() {
  const user = await serverValidateAuth();

  if (!user) {
    return []
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

  console.log("USUARIOS QUE APLICARON:", userAppliedOffers);

  const userAppliedOffersIds = userAppliedOffers.map((offer) => offer.id);

  return userAppliedOffersIds;
}
