export function OfferCard({title,description}) {
    return (
        <div className="w-full bg-white px-4 py-6 text-black">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p className="text-sm">{description}</p>
                </div>
    )
}