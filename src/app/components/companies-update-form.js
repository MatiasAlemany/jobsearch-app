"use client";
import { BaseSubmit } from "./base-submit";
import { BaseInput } from "./baseinput";
import { UpdateForm } from "./update-form";
import { usePostResource } from "@/hooks/usePostResource";

export function CompaniesUpdateForm() {
  const { loading, onSubmit } = usePostResource(
    "/api/companies",
    "Empresa creada correctamente"
  );

  return (
    <UpdateForm title="Crea una nueva empresa" onSubmit={onSubmit}>
      <BaseInput label="Nombre de la empresa" name="name" required />
      <BaseInput label="Direccion" name="address" required />
      <BaseInput label="Telefono" name="phoneNumber" type="number" />
      <BaseInput label="Email" name="email" type="email" />
      <BaseInput label="Sitio Web" name="website" />

      <BaseSubmit value="Crear Empresa" disabled={loading} />
    </UpdateForm>
  );
}
