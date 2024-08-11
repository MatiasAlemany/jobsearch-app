import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/db";

export async function getStudiesData() {
  const session = await getServerSession(authOptions);
  /* console.log("Usuario:", session) */

  if (!session || !session.user) {
    redirect("/api/auth/signin");
    return;
  }

  const studies = await prisma.studies.findMany();
  console.log("Studies:", studies);
  return { studies };
}
