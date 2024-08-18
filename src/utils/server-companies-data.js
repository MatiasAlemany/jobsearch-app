import prisma from "@/app/db";
import { redirect } from "next/navigation";
import { serverValidateAuth } from "./server-validate-auth";

export async function getData() {
  
  const user = await serverValidateAuth()
  
  if (!user){
    redirect("api/auth/sing-in")
  }

  const companies = await prisma.company.findMany({
    where:{
      userId:user.id
    }
  });


 /*  console.log("Companies", companies) */
  return { companies };
}