import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/db";

export async function getExperiencesData() {
  
    const session = await getServerSession(authOptions)
    /* console.log("Usuario:", session) */

    if(!session || !session.user){
       redirect("/api/auth/signin")
       return;
    }

  const experiences = await prisma.experience.findMany({
    where: {
     userId: session.user.id
    }
  });
  console.log("Experiences:", experiences);
  return { experiences };
}
