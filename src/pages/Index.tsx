"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChefHat, Flame, MapPin, TrendingUp, ShieldCheck, Phone, ChevronDown, Instagram, Facebook } from 'lucide-react';
import FireParticles from '../components/FireParticles';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-brand-charcoal text-brand-ivory font-sans selection:bg-brand-gold selection:text-brand-charcoal">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <FireParticles />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-brand-charcoal to-transparent">
        <div className="flex items-center gap-4">
          <img src="/logo.jpeg" alt="Logo" className="h-12 w-12 rounded-full border border-brand-gold/30 object-cover" />
          <div className="text-2xl font-serif font-bold tracking-tighter text-brand-gold">
            BABY BEEF <span className="text-brand-ivory font-light">& CO.</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] font-medium">
          <a href="#marca" className="hover:text-brand-gold transition-colors">A Marca</a>
          <a href="#produtos" className="hover:text-brand-gold transition-colors">Produtos</a>
          <a href="#franquias" className="hover:text-brand-gold transition-colors">Franquias</a>
          <a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a>
        </div>
        <button className="bg-brand-gold text-brand-charcoal px-6 py-2 rounded-full text-xs uppercase font-bold tracking-widest hover:bg-brand-ivory transition-all duration-300">
          Reservar
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/bull-banner.jpeg" 
            alt="Official Banner" 
            className="w-full h-full object-contain md:object-contain"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 mt-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">O Rei do Talho</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-none">
              O Churrasco tem <br /> <span className="italic">um Rei.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="bg-brand-gold text-brand-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Conheça a Marca
              </button>
              <button className="border border-brand-ivory/30 backdrop-blur-sm px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-ivory hover:text-brand-charcoal transition-all">
                Investir em Franquias
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-brand-gold"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* A Marca Section */}
      <section id="marca" className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">A Filosofia</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">A Arte de Servir a Perfeição em Cada Corte.</h3>
          <p className="text-brand-ivory/70 text-lg leading-relaxed mb-8">
            A Baby Beef & Co. nasceu da paixão pelo fogo e pelo respeito absoluto ao produto. Não somos apenas um talho; somos os guardiões da tradição do churrasco premium em Portugal. Cada peça é selecionada, cada corte é uma assinatura de mestria.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-brand-gold mb-2 font-serif text-3xl font-bold">PT</div>
              <p className="text-xs uppercase tracking-wider text-brand-ivory/50">ADN Português</p>
            </div>
            <div>
              <div className="text-brand-gold mb-2 font-serif text-3xl font-bold">21+</div>
              <p className="text-xs uppercase tracking-wider text-brand-ivory/50">Dias de Maturação</p>
            </div>
          </div>
        </motion.div>
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-black">
          <img 
            src="/staff-premium.jpeg" 
            alt="Equipa Premium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* Montra Real Section */}
      <section className="py-24 bg-brand-muted/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">O Espaço</h2>
            <h3 className="text-4xl font-serif">A Nossa Montra Diária</h3>
          </div>
          <p className="text-brand-ivory/60 max-w-xs text-right hidden md:block">
            Qualidade que se vê. Sabor que se lembra. Visite as nossas lojas físicas.
          </p>
        </div>
        <div className="flex gap-4 px-8 animate-fade-in">
          <div className="w-1/3 h-96 rounded-2xl overflow-hidden">
            <img src="/talho-real-1.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Talho Real" />
          </div>
          <div className="w-1/3 h-96 rounded-2xl overflow-hidden">
            <img src="/montra-carne.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Montra de Carne" />
          </div>
          <div className="w-1/3 h-96 rounded-2xl overflow-hidden">
            <img src="/talho-real-2.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Interior Loja" />
          </div>
        </div>
      </section>

      {/* Produtos Highlights */}
      <section id="produtos" className="py-24 bg-brand-muted/30">
        <div className="max-w-7xl mx-auto px-8 text-center mb-16">
          <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">Seleção do Rei</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Cortes que Impressionam</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
          {[
            { title: "Kits Grelhados", img: "/kit-premium-2.jpeg", desc: "A praticidade do 'Pegue e Leve' com a nossa qualidade." },
            { title: "Cortes Premium", img: "/ribeye-salt.jpeg", desc: "Cortes de elite preparados pelos nossos mestres." },
            { title: "Churrasco em Casa", img: "/kit-churrasco-fire.jpeg", desc: "Tudo o que precisa para o churrasco perfeito." }
          ].map((product, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-brand-charcoal border border-brand-ivory/10 rounded-2xl overflow-hidden group"
            >
              <div className="h-72 overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif text-brand-gold mb-2">{product.title}</h4>
                <p className="text-brand-ivory/60 text-sm">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logística Section (Franchise Focus) */}
      <section className="py-24 bg-brand-charcoal border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="/van-mercedes.jpeg" className="w-full h-full object-cover" alt="Distribuição" />
            <div className="absolute top-4 left-4 bg-brand-gold text-brand-charcoal px-4 py-1 rounded-full text-xs font-bold uppercase">Frota Própria</div>
          </div>
          <div className="order-1 md:order-2">
            <ShieldCheck size={40} className="text-brand-gold mb-6" />
            <h3 className="text-4xl font-serif mb-6">Qualidade & Distribuição Refrigerada</h3>
            <p className="text-brand-ivory/70 text-lg mb-8">
              Garantimos a integridade de cada corte através da nossa própria rede de logística. Controle total da cadeia de frio, desde a origem até à porta do franqueado ou do cliente.
            </p>
            <div className="flex gap-4">
               <img src="/carro-smart.jpeg" className="w-24 h-24 rounded-lg object-cover border border-brand-gold/20" alt="Mini Delivery" />
               <img src="/mota-delivery.jpeg" className="w-24 h-24 rounded-lg object-cover border border-brand-gold/20" alt="Moto Delivery" />
            </div>
          </div>
        </div>
      </section>

      {/* Franquias Section */}
      <section id="franquias" className="py-32 px-8 bg-brand-gold text-brand-charcoal">
        <div className="max-w-5xl mx-auto text-center">
          <TrendingUp size={48} className="mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Expanda o Reinado. <br />Seja um Franqueado.</h2>
          <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">
            A Baby Beef & Co. oferece um modelo de negócio estruturado, logística de frio premium e uma marca com autoridade imediata no mercado.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-left mb-16">
            <div className="border-l-2 border-brand-charcoal/20 pl-6">
              <h5 className="font-bold text-lg mb-2">Suporte 360º</h5>
              <p className="text-sm opacity-70">Do treino de mestres talhantes à gestão de marketing.</p>
            </div>
            <div className="border-l-2 border-brand-charcoal/20 pl-6">
              <h5 className="font-bold text-lg mb-2">Logística Exclusiva</h5>
              <p className="text-sm opacity-70">Cadeia de frio própria garantindo qualidade total.</p>
            </div>
            <div className="border-l-2 border-brand-charcoal/20 pl-6">
              <h5 className="font-bold text-lg mb-2">Alta Rentabilidade</h5>
              <p className="text-sm opacity-70">Um conceito boutique com escala industrial.</p>
            </div>
          </div>
          <button className="bg-brand-charcoal text-brand-gold px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
            Solicitar Dossier de Investimento
          </button>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="pt-24 pb-12 bg-black text-brand-ivory/60">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="text-3xl font-serif font-bold tracking-tighter text-brand-gold mb-6">
              BABY BEEF <span className="text-brand-ivory font-light">& CO.</span>
            </div>
            <p className="text-lg max-w-md mb-8">
              Elevando o padrão do churrasco em Portugal através da mestria e da paixão pelo fogo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-brand-ivory/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-brand-ivory/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-brand-ivory font-bold mb-6 uppercase tracking-widest text-xs">Menu</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-gold">A Nossa História</a></li>
              <li><a href="#" className="hover:text-brand-gold">Cortes Premium</a></li>
              <li><a href="#" className="hover:text-brand-gold">Franquias</a></li>
              <li><a href="#" className="hover:text-brand-gold">Lojas</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-ivory font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-gold" /> Lisboa, Portugal</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-brand-gold" /> +351 210 000 000</li>
              <li className="flex items-center gap-2 underline text-brand-gold">geral@babybeef.pt</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 pt-12 border-t border-brand-ivory/10 text-center text-xs tracking-widest uppercase">
          © 2024 Baby Beef & Co. | O Churrasco tem um Rei.
        </div>
      </footer>
    </div>
  );
};

export default Index;