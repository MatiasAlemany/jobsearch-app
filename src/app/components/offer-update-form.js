'use client'
import { BaseSelect } from "./base-select";
import { BaseSubmit } from "./base-submit";
import { BaseTextArea } from "./base-textarea";
import { BaseInput } from "./baseinput";
import { ProvinceSelect } from "./province-select";
import { UpdateForm } from "./update-form";
import { usePostResource } from "../../hooks/usePostResource";

export function OfferUpdateForm({companies}) {
  const {loading, onSubmit} = usePostResource("/api/offers", "Oferta creada correctamente")

  return (
    <UpdateForm title="Crear Oferta" onSubmit={onSubmit}>
      <BaseInput name="title" label="Titulo de la oferta" minLength={4} required />

      <BaseTextArea
        name="description"
        label="Descripcion de la oferta"
        minLength={6}
        required
      />

      <BaseSelect name="companyId" label="Empresa Asociada">
        {companies ? companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option> 
        )) : <p>Debes crear una empresa</p>}
      </BaseSelect>

      <BaseSelect name="workTime" label="Tipo de Jornada">
        <option value="fullTime">Jornada Completa</option>
        <option value="partTime">Jornada Parcial</option>
      </BaseSelect>

      <BaseSelect name="contract" label="Tipo de contrato">
        <option value="indefinite">Permanente</option>
        <option value="fixed">Temporal</option>
        <option value="formation">Prácticas</option>
      </BaseSelect>

      <BaseSelect name="salary" label="Salario Anual">
        <option value="menos-de-16000">Menos de 16.000€</option>
        <option value="entre-16000-y-25000">Entre 16.000€ y 25.000€</option>
        <option value="entre-25000-y-35000">Entre 25.000€ y 35.000€</option>
        <option value="mas-de-35000">Más de 35.000€</option>
      </BaseSelect>

      <label htmlFor="province" className="mt-3 block">
        Provincia
      </label>
      <ProvinceSelect />

      <BaseSubmit disabled={loading} value="Enviar" />
    </UpdateForm>
  );
}
