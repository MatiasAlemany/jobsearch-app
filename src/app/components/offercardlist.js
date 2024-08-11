import { OfferCard } from "./offerCard"
import {getMyOffersData} from "../../utils/server-myoffers-data"

export async function OfferCardList() {
  const {myOffers} = await getMyOffersData()
    return (
        <div className="mx-auto max-w-2xl">
          <h1 className="r px-3 text-2xl font-bold text-zinc-900">
            Mis Ofertas
          </h1>
          <div>
            <div>
              <div className="mt-6 flex flex-col gap-4">
                {myOffers.map(offer => 
                  <OfferCard key={offer.id}
                  title={offer.title}
                  description={offer.description}
                />
                )}
                
              </div>
            </div>
          </div>
        </div>
    )
}