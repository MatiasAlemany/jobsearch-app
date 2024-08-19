"use client";
import { CardWrapper } from "./cardwrapper";
import { useSwitchContext } from "./context-switch";

export function CompaniesProfile({ userInfo }) {
  const { viewMode } = useSwitchContext();
  console.log("viewModeeeeeee:", viewMode);

  return (
  
    viewMode === "company" && (
      <div className="mt-8">
        <CardWrapper userInfo={userInfo}
          label="Mis Empresas"
          actionLabel="Añadir Empresas"
          href="companies-update"
        >
          {userInfo.companies.map((company) => (
            <div key={company.id}>
              <p className="mt-4 text-lg font-semibold">
                {company.name}
              </p>
              {company.address && (
                <p className=" text-zinc-600 mt-2">{company.address}</p>
              )}
            </div>
          ))}
        </CardWrapper>
      </div>
    )
  )
}
