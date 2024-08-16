export function OfferCard({title,description, province, companyName}) {
    return (
        <div className="w-full bg-white px-4 py-6 text-black">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <h4 className="text-lg font-semibold">{companyName}</h4>
                  <p className="text-sm">{description}</p>
                  <p className="text-sm" >{province}</p>
                  
                </div>
    )
}