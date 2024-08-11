'use client'
import { BaseSubmit } from "./base-submit";
import { BaseInput } from "./baseinput";
import { ProvinceSelect } from "./province-select";
import { UpdateForm } from "./update-form";
import { usePostResource } from "@/hooks/usePostResource";

export function ProfileUpdateForm() {
  const {loading, onSubmit} = usePostResource("/api/profile", "Perfil actualizado correctamente")
  return (
    <UpdateForm title="Actualiza tu informacion" onSubmit={onSubmit}>
      <div>
        <h3 className="border-b-2 py-3 text-lg font-semibold">Sobre mi</h3>

        <BaseInput label="Nombre" name="customName" minLength={3} required />

        <BaseInput label="Apellido" name="customSecondName" minLength={3} required />

        <BaseInput label="Fecha de nacimiento" name="birthdate" type="date" required/>
      </div>

      <div>
        <h3 className="mt-6 border-b-2 py-3 text-lg font-semibold">
          Lugar de residencia
        </h3>
        <label className="mt-4 block" htmlFor="province">
          Provincia
        </label>

        <ProvinceSelect />

        <BaseInput label="Calle" name="address" />
      </div>

      <BaseSubmit value="ACTUALIZAR" disabled={loading} />  
    </UpdateForm>
  );
}
