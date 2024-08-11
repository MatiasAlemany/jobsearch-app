
import prisma from "@/app/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getProfileData(){
  const session = await getServerSession(authOptions);
  console.log("Session:", session);

  if(!session) {
    redirect("api/auth/signin")
    return;
  }

  const userId = session.user.id;
  const userEmail = session.user.email;
  /* console.log("User ID:", userId);
  console.log("User Email:", userEmail); */

  const userInfo = await prisma.user.findUnique({
    where: {
        id: userId,
        email: userEmail,
    },
    select: {
        customName:true,
        customSecondName: true,
        birthdate: true,
        province: true,
        address: true,
        email: true,
        companies: true,
        studies: true,
        experience:true,
    }

  });
  /* console.log("Profile:", userInfo) */
  return { userInfo:JSON.parse(JSON.stringify(userInfo)) };
}
