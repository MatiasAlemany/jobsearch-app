import Link from "next/link"

export function CardWrapper({label, actionLabel,href, children}) {
    return (
        <div className="rounded bg-white px-4 py-6">
                  <div className="flex items-start justify-between border-b-2 pb-3">
                    <h2 className="text-lg font-semibold capitalize">
                      {label}
                    </h2>
                    <Link
                      className="cursor-pointer rounded border-2 border-zinc-900 px-3 py-1 text-sm uppercase"
                      href={href}
                    >
                      {actionLabel}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4">
                    {children}
                  </div>
                </div>
    )
}