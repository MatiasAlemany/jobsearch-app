import { NextResponse } from "next/server";

export function serverValidateSchema(schema, data){
    const response = schema.safeParse(data);

    if (!response.success) {
      const { errors } = response.error;
      NextResponse.json({error: {
        message: "Invalid Request",
        errors,
      }});
    }

    return response;
}