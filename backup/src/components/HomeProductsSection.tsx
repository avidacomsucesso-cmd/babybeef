"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';

const homeProducts = [
  { title: "Churrasqueira Portátil", img: "/churrasqueira-premium.jpeg", price: "Sob Consulta" },
  { title: "Tábua de Corte Real", img: "/tabua-premium.jpeg", price: "€45,00" },
  { title: "Faca de Mestre", img: "/faca-premium.jpeg", price: "€89,00" },
  { title: "Avental de Couro", img: "/aventais-premium.jpeg", price: "€39,00" },
  { title: "Vinho Reserva do Rei", img: "/vinho-premium.jpeg", price: "€24,00" },
  { title: "Boné Oficial", img: "/bone-premium.jpeg", price: "€15,00" },
  { title: "Carvão Vegetal 5kg", img: "/carvao-premium.jpeg", price: "€7,50" },
  { title: "Polo Premium", img: "/polo-premium.jpeg", price: "€29,00" }
];

const HomeProductsSection = () => {
  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4 font-bold">Estilo de Vida</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Leve Baby Beef para casa</h3>
          <p className="text-brand-ivory/60 max-w-2xl mx-auto italic">
            A experiência do Rei não termina no talho. Descubra a nossa linha exclusiva de acessórios, vestuário e complementos premium para o seu churrasco.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {homeProducts.map((product, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-brand-muted/20 border border-brand-gold/10 rounded-xl overflow-hidden group h-full scale-[0.9]"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-serif text-brand-gold mb-1">{product.title}</h4>
                    <p className="text-sm text-brand-ivory font-bold">{product.price}</p>
                    <button className="mt-3 text-[9px] uppercase tracking-widest text-brand-gold hover:text-brand-ivory transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 border-brand-gold/30 bg-transparent text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal" />
            <CarouselNext className="static translate-y-0 border-brand-gold/30 bg-transparent text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeProductsSection;