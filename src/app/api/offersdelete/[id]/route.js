import { NextResponse } from "next/server";
import prisma from "@/app/db";

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const deletedOffer = await prisma.JobOffer.delete({
      where: { id: id },
    });

 return NextResponse.json({
      message: "Oferta eliminada exitosamente",
      deletedOffer,
    })
  } catch (error) {
    console.error("Error eliminando la oferta:", error);
    return NextResponse.json(
      { error: "No se pudo eliminar la oferta" },
      { status: 500 }
    );
  }
}
