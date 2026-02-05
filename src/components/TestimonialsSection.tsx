"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Santos",
    role: "Entusiasta de Churrasco",
    content: "A qualidade da picanha é simplesmente de outro mundo. O corte é perfeito e a marmorização garante um sabor que nunca encontrei em outro talho em Portugal.",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    role: "Chef de Cozinha",
    content: "Como profissional, sou extremamente exigente com a matéria-prima. A Baby Beef entrega consistência e frescura impecáveis em todos os pedidos. Recomendo vivamente.",
    rating: 5
  },
  {
    name: "Miguel Ferreira",
    role: "Cliente Regular",
    content: "O atendimento é excelente e o conhecimento dos talhantes sobre cada corte ajuda muito na escolha. O Kit Churrasco facilitou imenso os meus almoços de domingo.",
    rating: 5
  },
  {
    name: "Carla Matos",
    role: "Organizadora de Eventos",
    content: "Para os meus eventos premium, só confio na Baby Beef. A apresentação dos cortes preparados é magnífica e o feedback dos convidados é sempre positivo.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-brand-charcoal overflow-hidden border-t border-brand-gold/10">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4 font-bold">Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-16">O Que Dizem Nossos Clientes</h3>
        </motion.div>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <div className="flex justify-center mb-8">
                <Quote className="text-brand-gold opacity-30" size={48} />
              </div>
              
              <p className="text-xl md:text-2xl text-brand-ivory/90 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold text-brand-gold mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-xs uppercase tracking-widest text-brand-ivory/50">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-brand-gold w-8" : "bg-brand-gold/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;