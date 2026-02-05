"use client";

import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FranchiseForm = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulando envio de email
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast.success("Pedido enviado com sucesso! Entraremos em contacto em breve.", {
        description: "Enviado para: geral@babybeef.pt",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-brand-charcoal border-brand-gold/20 text-brand-ivory">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-brand-gold">Solicitar Dossier de Investimento</DialogTitle>
          <DialogDescription className="text-brand-ivory/60">
            Preencha os seus dados abaixo para receber informações detalhadas sobre o modelo de franquia Baby Beef & Co.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Ex: João Silva" 
                required 
                className="bg-brand-muted/50 border-brand-gold/10 focus:border-brand-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="joao@exemplo.com" 
                required 
                className="bg-brand-muted/50 border-brand-gold/10 focus:border-brand-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input 
                id="phone" 
                placeholder="+351 9XX XXX XXX" 
                required 
                className="bg-brand-muted/50 border-brand-gold/10 focus:border-brand-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Cidade de Interesse</Label>
              <Input 
                id="location" 
                placeholder="Ex: Porto, Braga, etc." 
                required 
                className="bg-brand-muted/50 border-brand-gold/10 focus:border-brand-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Observações (Opcional)</Label>
              <Textarea 
                id="message" 
                placeholder="Conte-nos brevemente sobre o seu perfil de investidor..." 
                className="bg-brand-muted/50 border-brand-gold/10 focus:border-brand-gold min-h-[100px]"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-brand-gold text-brand-charcoal hover:bg-brand-ivory font-bold py-6 transition-all"
          >
            {loading ? "A enviar..." : "Enviar Solicitação"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FranchiseForm;