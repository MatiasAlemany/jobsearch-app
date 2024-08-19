import { RequestCard } from "./requestcard";
import { getSolicitudesData } from "@/utils/server-solicitudes-data";
export async function RequestCardList() {
  const  {userAppliedOffers}  = await getSolicitudesData();

  if (!userAppliedOffers || userAppliedOffers.length === 0) {
    return (
      <div className="mx-auto max-w-2xl">
        <h1 className="r px-3 text-2xl font-bold text-zinc-900">
        Mis Solicitudes
      </h1>
        <p className="px-3 mt-5">Aún no haz aplicado a ninguna oferta.</p>
      </div>
    );
  }



  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="r px-3 text-2xl font-bold text-zinc-900">
        Mis Solicitudes
      </h1>
      <div>
        <div>
          <div className="mt-6 flex flex-col gap-4">
            {userAppliedOffers.map(solicitude => 
              <RequestCard key={solicitude.id}
              title={solicitude.title}
              description={solicitude.description}
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
