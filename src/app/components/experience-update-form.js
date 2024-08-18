"use client";
import { BaseSubmit } from "./base-submit";
import { BaseInput } from "./baseinput";
import { UpdateForm } from "./update-form";
import { usePostResource } from "@/hooks/usePostResource";

export function ExperienceUpdateForm() {
  const { onSubmit } = usePostResource(
    "/api/experiencies",
    "Experience correctly created"
  );

  return (
    <UpdateForm title="Crea una nueva experiencia laboral" onSubmit={onSubmit}>
      <BaseInput label="Nombre de la empresa" name="companyName" required />

      <BaseInput
        label="Puesto Desempeñado"
        name="role"
        minLength={3}
        required
      />

      <BaseInput
        label="Fecha de inicio"
        name="startDate"
        type="date"
        required
      />

      <BaseInput label="Fecha de fin" name="endDate" type="date" required />
      
      <BaseSubmit value="Añadir experiencia" />
    </UpdateForm>
  );
}
