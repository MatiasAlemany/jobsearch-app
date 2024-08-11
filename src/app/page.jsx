import { SearchForm } from "./components/searchform";
import { JobCardList } from "./components/jobcardlist";
import { Pagination } from "./components/pagination";

export default function Home({searchParams}) {
  
  return (
    <>
      <div>
        <div className="min-h-screen bg-zinc-50 px-4 py-8 text-black">
          <div className="mx-auto max-w-6xl px-4 text-black">
            <SearchForm searchParams={searchParams} />
            <div>
            <JobCardList searchParams={searchParams} />
            <Pagination  searchParams={searchParams}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
