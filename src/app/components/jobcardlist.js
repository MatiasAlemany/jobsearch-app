import { JobCard } from "./jobcard";

import { getOffersData } from "@/utils/server-offers-data";


export async function JobCardList({searchParams}) {
  const search = await searchParams.search
  const province = await searchParams.province || undefined
  const page = await searchParams.page || 1
  const { offers } = await getOffersData(page, province, search);
  return (
    <div>
      <h3 className="mt-6 text-xl font-semibold">Ofertas para ti</h3>
      <div className="mt-6 flex flex-col gap-6">
        {offers.map((offer) => (
          <JobCard offer={offer} key={offer.id} />
        ))}
      </div>
      
    </div>
  );
}
