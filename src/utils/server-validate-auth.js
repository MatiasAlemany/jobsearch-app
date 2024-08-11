import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function serverValidateAuth() {
  //CHECK IF USER EXISTS

  const session = await getServerSession(authOptions);
  const user = session?.user;
  /* console.log("ACA ESTAN LOS DATOS", session); */

  // IF DOESN'T EXIST SEND ERROR

  if (!user) {
    return NextResponse.json(
      { error: { message: "Unauthorized" } },
      { status: 401 }
    );
  }

  return user;
}
