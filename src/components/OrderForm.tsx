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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ShoppingCart, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const MEAT_CATEGORIES = {
  essentials: {
    label: "Essenciais",
    items: ["Entrecosto", "Acém", "Pá", "Peito", "Aba", "Rabadilha", "Ossobuco", "Entremeada", "Costeleta de Porco", "Peito de Frango", "Coxas de Frango"]
  },
  classics: {
    label: "Clássicos",
    items: ["Bife da Vazia", "Bife do Lombo", "Alcatra", "Maminha", "Rosbife", "Fraldinha", "Lombo de Porco", "Secretos de Porco Preto", "Plumas de Porco Preto", "Costeletas de Borrego"]
  },
  nobles: {
    label: "Nobres",
    items: ["Picanha", "Ribeye", "T-Bone", "Prime Rib", "Vazia Maturada", "Presa de Porco Preto", "Carré de Borrego"]
  },
  premium: {
    label: "Premium & Especiais",
    items: ["Tomahawk", "Porterhouse", "Dry Aged Ribeye", "Picanha Maturada", "Wagyu", "Kit Churrasco Premium"]
  }
};

const OrderForm = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCuts, setSelectedCuts] = useState<string[]>([]);
  const [orderType, setOrderType] = useState("pickup");

  const toggleCut = (cut: string) => {
    setSelectedCuts(prev => 
      prev.includes(cut) ? prev.filter(c => c !== cut) : [...prev, cut]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCuts.length === 0) {
      toast.error("Por favor, selecione pelo menos um corte.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast.success("Reserva recebida com sucesso!", {
        description: `Entraremos em contacto para confirmar os pesos e valores.`,
      });
      setSelectedCuts([]);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col bg-brand-charcoal border-brand-gold/20 text-brand-ivory p-0">
        <DialogHeader className="p-6 border-b border-brand-gold/10">
          <DialogTitle className="text-3xl font-serif text-brand-gold flex items-center gap-3">
            <ShoppingCart className="text-brand-gold" />
            Reserva de Carnes Premium
          </DialogTitle>
          <DialogDescription className="text-brand-ivory/60">
            Selecione os seus cortes e agende a sua recolha ou entrega.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex-1 overflow-hidden flex flex-col md:flex-row">
          {/* Meat Selection Area */}
          <div className="flex-1 border-r border-brand-gold/10 p-6 overflow-hidden flex flex-col">
            <h4 className="text-lg font-serif text-brand-gold mb-4">Selecione os Cortes</h4>
            <Tabs defaultValue="essentials" className="w-full h-full flex flex-col">
              <TabsList className="bg-brand-muted/50 border border-brand-gold/10 w-full justify-start overflow-x-auto h-auto p-1 mb-4">
                {Object.entries(MEAT_CATEGORIES).map(([key, cat]) => (
                  <TabsTrigger key={key} value={key} className="text-xs data-[state=active]:bg-brand-gold data-[state=active]:text-brand-charcoal">
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollArea className="flex-1 pr-4">
                {Object.entries(MEAT_CATEGORIES).map(([key, cat]) => (
                  <TabsContent key={key} value={key} className="mt-0 space-y-3">
                    {cat.items.map(item => (
                      <div key={item} className="flex items-center space-x-3 p-2 hover:bg-brand-gold/5 rounded-lg transition-colors cursor-pointer" onClick={() => toggleCut(item)}>
                        <Checkbox 
                          id={item} 
                          checked={selectedCuts.includes(item)}
                          onCheckedChange={() => toggleCut(item)}
                          className="border-brand-gold/50 data-[state=checked]:bg-brand-gold"
                        />
                        <label className="text-sm font-medium leading-none cursor-pointer flex-1">
                          {item}
                        </label>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </ScrollArea>
            </Tabs>
          </div>

          {/* Contact & Logistics Area */}
          <ScrollArea className="flex-1 p-6 bg-brand-muted/20">
            <div className="space-y-6">
              <div>
                <Label className="text-brand-gold mb-3 block">Modo de Entrega</Label>
                <RadioGroup defaultValue="pickup" className="flex gap-4" onValueChange={setOrderType}>
                  <div className="flex items-center space-x-2 bg-brand-charcoal p-3 rounded-lg border border-brand-gold/10 flex-1">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="flex items-center gap-2 cursor-pointer">
                      <MapPin size={16} /> Retirar no Talho
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-brand-charcoal p-3 rounded-lg border border-brand-gold/10 flex-1">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="flex items-center gap-2 cursor-pointer">
                      <ShoppingCart size={16} /> Entrega
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar size={14} /> Data
                  </Label>
                  <Input type="date" id="date" required className="bg-brand-charcoal border-brand-gold/10 focus:border-brand-gold" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Horário</Label>
                  <Input type="time" id="time" required className="bg-brand-charcoal border-brand-gold/10 focus:border-brand-gold" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" required className="bg-brand-charcoal border-brand-gold/10" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2"><Mail size={14} /> Email</Label>
                    <Input id="email" type="email" required className="bg-brand-charcoal border-brand-gold/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2"><Phone size={14} /> WhatsApp</Label>
                    <Input id="phone" required className="bg-brand-charcoal border-brand-gold/10" />
                  </div>
                </div>
                
                {orderType === "delivery" && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="address">Endereço Completo</Label>
                    <Input id="address" placeholder="Rua, Número, Andar, Código Postal" required className="bg-brand-charcoal border-brand-gold/10" />
                  </div>
                )}
              </div>

              <div className="pt-4 sticky bottom-0 bg-brand-muted/20">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-gold text-brand-charcoal hover:bg-brand-ivory font-bold py-6 text-lg"
                >
                  {loading ? "A processar..." : `Confirmar Reserva (${selectedCuts.length} itens)`}
                </Button>
                <p className="text-[10px] text-center mt-4 text-brand-ivory/40 uppercase tracking-widest">
                  O pagamento será efetuado no momento da entrega/recolha.
                </p>
              </div>
            </div>
          </ScrollArea>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;