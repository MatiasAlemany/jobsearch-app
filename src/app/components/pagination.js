import Link from "next/link";
import { getOffersData } from "@/utils/server-offers-data";

export async function Pagination({ searchParams }) {
  const page = searchParams.page || 1;
  const { totalPages, currentPage } = await getOffersData(page);
  return (
    <div className="mt-4">
      <p>Páginas:</p>
      <div className="mt-2 flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link key={i} className="mt-3" href={`/?page=${i + 1}`}>
            <span
              className={`relative rounded border bg-black p-3 px-5 ${
                currentPage == i + 1
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
