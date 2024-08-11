'use client'

import { BaseSubmit } from "./base-submit";
import { BaseInput } from "./baseinput";
import { UpdateForm } from "./update-form";
import { usePostResource } from "@/hooks/usePostResource";

export function StudiesUpdateForm() {
  const {onSubmit} = usePostResource("/api/studies", "Study correctly created")

  return (
    <UpdateForm title="Actualiza tus estudios" onSubmit={onSubmit}>
      <BaseInput label="Nombre de el titulo" name="degreeName" required />

      <BaseInput label="Tipo de titulo" name="degreeType" required />

      <BaseInput
        label="Fecha de inicio"
        name="startDate"
        type="date"
        required
      />

      <BaseInput label="Fecha de fin" name="endDate" type="date" required />

      <BaseSubmit value="Añadir Estudios" />
    </UpdateForm>
  );
}
