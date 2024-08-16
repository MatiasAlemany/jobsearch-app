import { OfferCard } from "./offerCard"
import {getMyOffersData} from "../../utils/server-myoffers-data"

export async function OfferCardList() {
  const {myOffers} = await getMyOffersData()

  if (!myOffers || myOffers.length === 0) {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="r px-3 text-2xl font-bold text-zinc-900">
          Mis Ofertas
        </h1>
        <p>No tienes ofertas creadas.</p>
      </div>
    );
  }

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
                  province={offer.province}
                  companyName={offer.companyName}
                />
                )}
                
              </div>
            </div>
          </div>
        </div>
    )
}