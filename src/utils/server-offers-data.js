import prisma from "@/app/db";
export async function getOffersData(page, province, search) {
  /* Pagination home page */
  const itemsPerPage = 10;
  const totalItems = await prisma.jobOffer.count();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = page || 1;

  const offers = await prisma.jobOffer.findMany({
    include: {
      company: {
        select: {
          name: true,
          email:true,
          phoneNumber:true,
          website: true,
        },
      },
    },
    where: {
      province: province || undefined,
      AND: [
        {
          OR: [
            {
              title: {
                contains: search,
              },
            },
            {
              company: {
                name: {
                  contains: search,
                },
              },
            },
          ],
        },
      ],
    },
    // Paginación: cuántas ofertas mostrar por página
    skip: (currentPage - 1) * itemsPerPage,
    take: itemsPerPage,
  });


  console.log("Provincia", province);
  /* console.log(offers) */

  return { totalPages, currentPage, offers };
}
