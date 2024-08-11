'use client'
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function  usePostResource(url, succesMessage) {
    const [loading,setLoading] = useState(false)
  const { toast } = useToast();
  function onSubmit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data);

    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        toast({ title: `${succesMessage} 😎` });
        e.target.reset();
        return;
      }
    }).catch(() => {
      toast({
        title: "Ups.. algo fallo en el proceso de creacion",
        description: "Intentalo de nuevo",
        variant: "destructive",
      });
    }).finally(() => {
      setLoading(false)
    });
}

return {
    loading,
    onSubmit,
}
}