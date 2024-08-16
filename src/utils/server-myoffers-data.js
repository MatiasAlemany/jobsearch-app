import { redirect } from "next/navigation";
import { serverValidateAuth } from "../utils/server-validate-auth";
import prisma from "@/app/db";

export async function getMyOffersData() {
  const user = await serverValidateAuth();

  if (!user) {
   return redirect("/api/auth/signin");
  }

  // Buscar todas las empresas asociadas al usuario y obtener sus ofertas de trabajo
  const companies = await prisma.company.findMany({
    where: {
      userId: user.id,
    },
    include: {
      JobOffer: true, // Incluir las ofertas de trabajo asociadas a cada empresa
    }
  });

  const myOffers = companies.flatMap(company =>
    company.JobOffer.map(offer => ({
      ...offer,
      companyName: company.name, // Agregamos el nombre de la empresa a cada oferta
    }))
  );

  return {myOffers};
}
