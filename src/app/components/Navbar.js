'use client'

import Link from "next/link";
import { NavLink } from "./navlink";
import { SessionData } from "./sessionData";
import { useSwitchContext } from "./context-switch"

export function Navbar() {
  const {viewMode} = useSwitchContext()
  console.log("viewMode:", viewMode)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link className="flex items-center" href="/">
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-black">
            JobFinder
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
            <li>
              <div>
                <NavLink href={"/"}>Inicio</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink href="/profile">Mi Perfil</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink href="/requests">Mis Solicitudes</NavLink>
              </div>
            </li>
            {viewMode === "company" && (
              <>
                <li>
                  <div>
                    <NavLink href="/offers">Mis Ofertas</NavLink>
                  </div>
                </li>
                <li>
                  <div>
                    <NavLink href="/offer-update">Crear Oferta</NavLink>
                  </div>
                </li>
              </>
            )}
            <li>
              <div>
                <SessionData />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
