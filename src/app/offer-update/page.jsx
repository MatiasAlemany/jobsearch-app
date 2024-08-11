import { OfferUpdateForm } from "../components/offer-update-form";
import {getData} from "../../utils/server-companies-data"

export default async function OffersUpdate() {
  const {companies} = await getData()
  return (
    <div>
      <div className="min-h-screen bg-zinc-50 px-4 py-8 text-black">
        <OfferUpdateForm companies={companies} />
      </div>
    </div>
  );
}
