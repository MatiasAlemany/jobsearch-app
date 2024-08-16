import Image from "next/image"
import {JobRequestDialog} from "@/app/components/job-request-dialog"
import {cancelButtonOffer} from "@/utils/server-cancel-button"

const workTimeLabels = {
  fullTime: "Full-Time",
  partTime: "Part-Time"
};

const contractTypeLabels = {
  indefinite: "Permanent",
  fixed: "Fixed-Term",
  formation: "Training"
};

export async function JobCard({offer}) {
  const userAppliedOffersIds = await cancelButtonOffer()
    return (
        <div className="flex w-full bg-white px-2 py-4">
                <Image
                  alt=""
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  className="h-16 w-16 rounded border"
                  style={{color : 'transparent'}}
                  src="/media/zod.svg"
                />
                <div className="px-4">
                  <h2>{offer.title}</h2>
                  <p className="text-blue-400">{offer.company.name}</p>
                  <p className="mt-3 text-base">{offer.description}</p>
                  <p className="mt-2 text-sm text-stone-500">
                    {offer.province} | {contractTypeLabels[offer.contract]} |  {workTimeLabels[offer.workTime]} | {offer.salary}
                  </p>
                  <JobRequestDialog offer={offer} userAppliedOffersIds={userAppliedOffersIds}/>
                </div>
              </div>
    )
}