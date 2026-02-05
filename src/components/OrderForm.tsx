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
import { ShoppingCart, Calendar as CalendarIcon, MapPin, Phone, Mail } from 'lucide-react';
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  const [selectedCuts, setSelectedCuts] = useState<{name: string, quantity: string, unit: string}[]>([]);
  const [orderType, setOrderType] = useState("pickup");
  const [date, setDate] = useState<Date>();

  const toggleCut = (cut: string) => {
    setSelectedCuts(prev => {
      const exists = prev.find(c => c.name === cut);
      if (exists) {
        return prev.filter(c => c.name !== cut);
      } else {
        return [...prev, { name: cut, quantity: "1", unit: "kg" }];
      }
    });
  };

  const updateQuantity = (name: string, quantity: string) => {
    setSelectedCuts(prev => prev.map(c => c.name === name ? { ...c, quantity } : c));
  };

  const updateUnit = (name: string, unit: string) => {
    setSelectedCuts(prev => prev.map(c => c.name === name ? { ...c, unit } : c));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCuts.length === 0) {
      toast.error("Por favor, selecione pelo menos um corte.");
      return;
    }
    if (!date) {
      toast.error("Por favor, selecione uma data.");
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
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-hidden flex flex-col bg-brand-charcoal border-brand-gold/20 text-brand-ivory p-0">
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
          <div className="flex-1 border-r border-brand-gold/20 p-6 overflow-hidden flex flex-col bg-brand-charcoal">
            <h4 className="text-lg font-serif text-brand-gold mb-4">Selecione os Cortes</h4>
            <Tabs defaultValue="essentials" className="w-full h-full flex flex-col">
              <TabsList className="bg-brand-muted border border-brand-gold/30 w-full flex flex-wrap h-auto p-1 mb-6 gap-1">
                {Object.entries(MEAT_CATEGORIES).map(([key, cat]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="flex-1 min-w-[100px] text-[11px] md:text-xs py-2 data-[state=active]:bg-brand-gold data-[state=active]:text-brand-charcoal font-bold transition-all uppercase tracking-tighter"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollArea className="flex-1 pr-4">
                {Object.entries(MEAT_CATEGORIES).map(([key, cat]) => (
                  <TabsContent key={key} value={key} className="mt-0 space-y-3">
                    {cat.items.map(item => {
                      const selection = selectedCuts.find(c => c.name === item);
                      return (
                        <div 
                          key={item} 
                          className={`flex flex-col space-y-3 p-3 rounded-lg transition-colors border ${
                            selection ? 'bg-brand-gold/10 border-brand-gold' : 'bg-brand-muted/30 border-brand-gold/10 hover:border-brand-gold/30'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Checkbox 
                              id={`cut-${item}`} 
                              checked={!!selection}
                              onCheckedChange={() => toggleCut(item)}
                              className="border-brand-gold/50 data-[state=checked]:bg-brand-gold data-[state=checked]:text-brand-charcoal"
                            />
                            <label 
                              htmlFor={`cut-${item}`}
                              className="text-sm font-bold leading-none cursor-pointer flex-1 text-brand-ivory py-1"
                            >
                              {item}
                            </label>
                          </div>
                          
                          {selection && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="flex items-center gap-2 pl-8 pb-1"
                            >
                              <div className="flex-1 max-w-[100px]">
                                <Input 
                                  type="number" 
                                  value={selection.quantity}
                                  onChange={(e) => updateQuantity(item, e.target.value)}
                                  className="h-8 bg-brand-charcoal border-brand-gold/20 text-xs text-brand-gold font-bold focus:border-brand-gold"
                                  min="0.1"
                                  step="0.1"
                                />
                              </div>
                              <select 
                                value={selection.unit}
                                onChange={(e) => updateUnit(item, e.target.value)}
                                className="h-8 bg-brand-charcoal border border-brand-gold/20 rounded-md text-[10px] uppercase font-bold text-brand-gold px-2 focus:border-brand-gold outline-none"
                              >
                                <option value="kg">Quilos (kg)</option>
                                <option value="g">Gramas (g)</option>
                                <option value="un">Unidades</option>
                              </select>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </TabsContent>
                ))}
              </ScrollArea>
            </Tabs>
          </div>

          {/* Contact & Logistics Area */}
          <ScrollArea className="flex-1 p-6 bg-brand-muted/40">
            <div className="space-y-6">
              <div>
                <Label className="text-brand-gold text-sm font-bold mb-3 block uppercase tracking-wider">Modo de Entrega</Label>
                <RadioGroup defaultValue="pickup" className="flex flex-col gap-3" onValueChange={setOrderType}>
                  <div className={`flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                    orderType === "pickup" ? 'bg-brand-gold/10 border-brand-gold shadow-[0_0_15px_rgba(198,155,60,0.1)]' : 'bg-brand-charcoal border-brand-gold/20'
                  }`}
                  onClick={() => setOrderType("pickup")}>
                    <RadioGroupItem value="pickup" id="pickup" className="border-brand-gold text-brand-gold" />
                    <Label htmlFor="pickup" className="flex items-center gap-3 cursor-pointer text-brand-ivory font-bold text-base">
                      <MapPin size={18} className="text-brand-gold" /> Retirar no Talho
                    </Label>
                  </div>
                  <div className={`flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                    orderType === "delivery" ? 'bg-brand-gold/10 border-brand-gold shadow-[0_0_15px_rgba(198,155,60,0.1)]' : 'bg-brand-charcoal border-brand-gold/20'
                  }`}
                  onClick={() => setOrderType("delivery")}>
                    <RadioGroupItem value="delivery" id="delivery" className="border-brand-gold text-brand-gold" />
                    <Label htmlFor="delivery" className="flex items-center gap-3 cursor-pointer text-brand-ivory font-bold text-base">
                      <ShoppingCart size={18} className="text-brand-gold" /> Entrega ao Domicílio
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-brand-gold font-bold">
                    <CalendarIcon size={14} /> Data da Reserva
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal bg-brand-charcoal border-brand-gold/10 hover:bg-brand-muted focus:border-brand-gold h-12",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-brand-gold" />
                        {date ? format(date, "PPP", { locale: pt }) : <span>Selecione a data</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-brand-charcoal border-brand-gold/20 z-[100]" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={pt}
                        className="bg-brand-charcoal text-brand-ivory"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-brand-gold font-bold flex items-center gap-2">
                    Horário Sugerido
                  </Label>
                  <Input 
                    type="time" 
                    id="time" 
                    required 
                    className="bg-brand-charcoal border-brand-gold/10 focus:border-brand-gold h-12" 
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-brand-gold/10">
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