"use client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

const workTimeLabels = {
  fullTime: "Full-Time",
  partTime: "Part-Time",
};

const contractTypeLabels = {
  indefinite: "Permanent",
  fixed: "Fixed-Term",
  formation: "Training",
};

export function JobRequestDialog({ offer, userAppliedOffersIds }) {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const userAlreadyApplied = userAppliedOffersIds.includes(offer.id);
  console.log("userAlreadyApplied", userAlreadyApplied);

  function requestJob() {
    if (!session) {
      return router.push("/api/auth/signin");
    }

    fetch("/api/requestjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        offerId: offer.id,
      }),
    })
      .then((res) => {
        if (res.ok) {
          toast({ title: "Peticion enviada correctamente 😎" });
          return router.push("/");
        }

        toast({
          title: "Ups.. algo fallo en el proceso de creacion",
          description: "Intentalo de nuevo",
          variant: "destructive",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Ups.. algo fallo en el proceso de creacion",
          description: "Intentalo de nuevo",
          variant: "destructive",
        });
      });
  }

  return (
    <Dialog>
      <DialogTrigger className="mt-2">Ver Detalles</DialogTrigger>
      <DialogContent className="text-black">
        <DialogHeader>
          <DialogTitle>{offer.title}</DialogTitle>
          <DialogDescription>{offer.description}</DialogDescription>
          <p>Empresa:</p>
          <DialogDescription>{offer.company.name}</DialogDescription>
          {offer.company.email && (
            <p>
              <DialogDescription>{offer.company.email}</DialogDescription>
            </p>
          )}
          {offer.company.phoneNumber && (
            <p>
              <DialogDescription>{offer.company.phoneNumber}</DialogDescription>
            </p>
          )}
          <p>Salario:</p>
          <DialogDescription>{offer.salary}</DialogDescription>
          <p>Tipo de contrato</p>
          <DialogDescription>
            {contractTypeLabels[offer.contract]}
          </DialogDescription>
          <p>Tipo de jornada</p>
          <DialogDescription>
            {workTimeLabels[offer.workTime]}
          </DialogDescription>
          <p>Ubicacion</p>
          <DialogDescription>{offer.province}</DialogDescription>
        </DialogHeader>
        <button
          className="bg-black py-3 rounded font-semibold text-white disabled:opacity-55 disabled:cursor-not-allowed"
          onClick={requestJob}
          disabled={!session || userAlreadyApplied}
        >
          {!session
            ? "Inicia sesión para aplicar"
            : userAlreadyApplied
            ? "Ya aplicaste a esta solicitud"
            : "Aplicar a esta oferta"}
        </button>
      </DialogContent>
    </Dialog>
  );
}
