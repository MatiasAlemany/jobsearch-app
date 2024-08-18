'use client'
import {DeleteOfferButton} from "@/app/components/delete-offer-button"
export function OfferCard({ title, description, province, companyName, id }) {

  return (
    <div className="flex-col w-full bg-white px-4 py-6 text-black">
      <h2 className="text-lg font-semibold block">{title}</h2>
      <h4 className="text-lg font-semibold block">{companyName}</h4>
      <p className="text-sm">{description}</p>
      <p className="text-sm">{province}</p>
      <DeleteOfferButton id={id}/>
    </div>
  );
}
