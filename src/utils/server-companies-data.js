import prisma from "@/app/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getData() {
  
  const session = await getServerSession(authOptions)
  /* console.log("Usuario:", session) */

  if(!session || !session.user){
     redirect("/api/auth/signin")
     return;
  }

  const companies = await prisma.company.findMany();
 /*  console.log("Companies", companies) */
  return { companies };
}