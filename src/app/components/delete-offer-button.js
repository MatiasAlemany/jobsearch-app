'use client';

import { useRouter } from 'next/navigation'; // Usar `next/navigation` para redireccionar
import { useToast } from '@/components/ui/use-toast'; // Asegúrate de instalar react-toastify

export function DeleteOfferButton({ id }) {
  const router = useRouter();
  const {toast} = useToast()

  const handleClick = async () => {
    try {
      const response = await fetch(`/api/offersdelete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar la oferta');
      }

      const result = await response.json();
      toast({title : "Oferta eliminada exitosamente 😎"});
      router.push('/'); // Redirige a la página de ofertas
    } catch (error) {
      toast({
        title: "Ups.. algo fallo en el proceso de creacion",
        description: "Intentalo de nuevo",
        variant: "destructive",
      });
      console.error('Error al eliminar la oferta:', error);
    }
  };

  return (
    <div className="flex justify-end mt-3">
      <button
        onClick={handleClick}
        className="cursor-pointer rounded border-2 border-zinc-900 px-3 py-1 text-sm uppercase"
      >
        Eliminar Oferta
      </button>
    </div>
  );
}