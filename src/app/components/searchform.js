import { ProvinceSelect } from "./province-select";

export function SearchForm() {

    return (
        <div className="mt-8 rounded bg-black px-4 py-8 text-white">
            <form className="items-center gap-4 lg:flex">
              <div className="w-full">
                <label htmlFor="keyword">Busco ofertas de...</label>
                <input
                  id="keyword"
                  className="mt-3 block w-full rounded px-4 py-3 text-black"
                  placeholder="Puesto, empresa o palabra clave"
                  name="search"
                />
              </div>
              <div>
              <label htmlFor="province">
               en...
              </label>
                <ProvinceSelect/>
              </div>
              <input
                className="mt-8 w-full max-w-sm rounded bg-sky-800 py-3 font-semibold"
                type="submit"
                value="BUSCAR"
              />
            </form>
          </div>
    )
}