import { CardWrapper } from "../components/cardwrapper";
import { getProfileData } from "@/utils/server-profile-data";
import { CompaniesProfile } from "../components/companies-profile";

export default async function Profile() {
  const { userInfo } = await getProfileData();
  console.log("UserInfo", userInfo)

  return (
    <div>
      <div className="min-h-screen bg-zinc-50 px-4 py-8 text-black">
        <div className="mx-auto max-w-2xl">
          <h1 className="r px-3 text-2xl font-bold text-zinc-900">Perfil</h1>
          <div>
            <div>
              <div className="mt-8">
                <CardWrapper
                  label="Mi informacion"
                  actionLabel="Editar Informacion Personal"
                  href="/profile-update"
                >
                  <h2 className="mt-4 text-lg font-semibold">
                    {userInfo.customName}
                  </h2>
                  {userInfo.customSecondName && (
                    <p className="text-zinc-400">{userInfo.customSecondName}</p>
                  )}
                  {userInfo.birthdate && (
                    <p className="text-zinc-400">
                      {new Date(userInfo.birthdate).toLocaleDateString()}
                    </p>
                  )}
                  {userInfo.province && (
                    <p className="text-zinc-400">{userInfo.province}</p>
                  )}
                  {userInfo.address && (
                    <p className="text-zinc-400">{userInfo.address}</p>
                  )}
                  {userInfo.email && (
                    <p className="text-zinc-400">{userInfo.email}</p>
                  )}
                </CardWrapper>
              </div>

              <CompaniesProfile userInfo={userInfo} />

              <div className="mt-8">
                <CardWrapper
                  label="Mi experiencia"
                  actionLabel="Añadir Experiencia"
                  href="/experience-update"
                >
                  {userInfo.experience.map((experience) => (
                    <div key={experience.id}>
                      <p className="mt-4 text-lg font-semibold">
                        {experience.companyName}
                      </p>
                      <p className="text-zinc-400">{experience.role}</p>
                      <p className="text-zinc-400">
                        {new Date(experience.startDate).toLocaleDateString()}-
                        {new Date(experience.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </CardWrapper>
                <div className="mt-8">
                  <CardWrapper
                    label="Mis Estudios"
                    actionLabel="Añadir Estudios"
                    href="/studies-update"
                  >
                    <span className=" mt-4 bg-zinc-100 px-2 text-sm self-start">
                      Superiores
                    </span>
                    {userInfo.studies.map((study) => (
                      <div key={study.id}>
                        <p className="text-lg">
                          Titulo:
                          {study.degreeName}
                        </p>
                        <p className="text-zinc-400">
                          Orientacion:
                          {study.degreeType}
                        </p>
                        <p className="text-zinc-400">
                          {new Date(study.startDate).toLocaleDateString()}-
                          {new Date(study.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </CardWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
