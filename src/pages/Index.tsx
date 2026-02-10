/* Progress Bar */
/* Hero Section Container */
/* Navigation / Header - Posicionamento ultra-compacto baseado na referência */
/* Hero Content Section - Começa imediatamente após o menu */
/* A Marca Section */
/* Montra Real Section */
/* Produtos Highlights */
/* Leve Baby Beef para casa Section */
/* Testimonials Section */
/* Logística Section (Franchise Focus) */
/* Franquias Section */
/* Footer / Contacto */
/* Hero Section Container */
/* Navigation / Header - Posicionamento ultra-compacto baseado na referência */
/* Background Image para o Topo */
/* Desktop Grid / Mobile Carousel */
/* Mobile Carousel - Only visible on small screens */
/* Desktop Grid / Mobile Carousel for Cortes Premium */
/* Mobile Carousel for Cortes Premium */
"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import {
    ChefHat,
    Flame,
    MapPin,
    TrendingUp,
    ShieldCheck,
    Phone,
    ChevronDown,
    Instagram,
    Facebook,
} from "lucide-react";

import FireParticles from "../components/FireParticles";
import TestimonialsSection from "../components/TestimonialsSection";
import FranchiseForm from "../components/FranchiseForm";
import OrderForm from "../components/OrderForm";
import HomeProductsSection from "../components/HomeProductsSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
    const {
        scrollYProgress
    } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div
            className="bg-brand-charcoal text-brand-ivory font-sans selection:bg-brand-gold selection:text-brand-charcoal">
            {}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-50 origin-left"
                style={{
                    scaleX
                }} />
            <FireParticles />
            {}
            <div className="relative flex flex-col">
                {}
                <div className="relative flex flex-col">
                    {}
                    <nav
                        className="relative w-full z-40 flex flex-col items-center bg-brand-charcoal overflow-hidden">
                        {}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/vintage_film_bg.jpg"
                                alt="Background"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                        </div>
                        <div className="w-full max-w-4xl px-6 overflow-hidden relative z-10">
                            <img
                                src="/header-placa-premium.png"
                                alt="Baby Beef & Co. - O Rei do Talho"
                                className="w-full h-auto object-cover scale-[1.15] -my-[8%] md:-mb-[10%]" />
                        </div>
                        <div className="w-full bg-black/40 border-y border-white/10 relative z-10">
                            <div
                                className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-bold px-6 py-4">
                                <a
                                    href="#marca"
                                    className="hover:text-brand-gold transition-colors text-white">A Marca</a>
                                <a
                                    href="#produtos"
                                    className="hover:text-brand-gold transition-colors text-white">Os Nossos Cortes</a>
                                <a
                                    href="#lojas"
                                    className="hover:text-brand-gold transition-colors text-white">Lojas</a>
                                <a
                                    href="#franquias"
                                    className="hover:text-brand-gold transition-colors text-white">Franquias</a>
                                <a
                                    href="#contacto"
                                    className="hover:text-brand-gold transition-colors text-white">Contacto</a>
                                <OrderForm>
                                    <button
                                        className="hidden md:block bg-brand-gold text-brand-charcoal px-6 py-1.5 rounded-full text-[11px] md:text-[13px] uppercase font-black tracking-widest hover:bg-white transition-all duration-300 shadow-lg ml-4">Reservar
                                                                                                                                                                                                                    </button>
                                </OrderForm>
                            </div>
                        </div>
                    </nav>
                    {}
                    <section className="relative h-[80vh] flex items-center overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                            <img
                                src="/hero-master-cut.png"
                                alt="Master Butcher Cut"
                                className="w-full h-full object-cover object-center scale-105"
                                style={{
                                    imageRendering: "auto"
                                }} />
                        </div>
                        <div className="relative z-20 px-8 md:px-24 max-w-4xl py-20 md:pt-1 md:pb-20">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -50
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.3
                                }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[1px] w-12 bg-brand-gold" />
                                    <span className="text-brand-gold uppercase tracking-[0.5em] text-xs font-bold">ESTABELECIDO EM PORTUGAL</span>
                                </div>
                                <h1
                                    className="text-5xl md:text-[100px] font-serif mb-8 leading-[0.9] drop-shadow-2xl">O Mundo do Talho <br />
                                    <span className="italic text-brand-gold">agora tem um Rei.</span>
                                </h1>
                                <p
                                    className="text-xl md:text-2xl text-brand-ivory/80 font-light mb-12 max-w-xl leading-relaxed">Maestria, tradição e os melhores cortes do mundo, selecionados para a sua mesa.
                                                                                                                                                                                                                                  </p>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <a href="#produtos">
                                        <button
                                            className="bg-brand-gold text-brand-charcoal px-8 md:px-12 py-3 md:py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl w-full md:w-auto text-[11px] md:text-sm">Descobrir Coleção
                                                                                                                                                                                                                                                                    </button>
                                    </a>
                                    <FranchiseForm>
                                        <button
                                            className="border border-white/20 backdrop-blur-md bg-white/5 px-8 md:px-12 py-3 md:py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all shadow-xl text-[11px] md:text-sm">Seja um Franqueado
                                                                                                                                                                                                                                                                    </button>
                                    </FranchiseForm>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2
                            }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-brand-gold">
                            <ChevronDown size={32} />
                        </motion.div>
                    </section>
                    {}
                    <section
                        id="marca"
                        className="relative pt-12 md:pt-24 pb-6 md:pb-12 overflow-hidden bg-brand-charcoal">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/vintage_film_bg.jpg"
                                alt="Background"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                        </div>
                        <div
                            className="relative z-10 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                initial={{
                                    opacity: 0,
                                    x: -50
                                }}
                                transition={{
                                    duration: 0.8
                                }}>
                                <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">A Nossa Essência</h2>
                                <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">O Diferencial Baby Beef</h3>
                                <p className="text-brand-ivory/70 text-lg leading-relaxed mb-6">Na Baby Beef, acreditamos que a excelência começa na origem e se revela no corte.
                                                                                                                                                                                                                              Não somos apenas um talho — somos especialistas em carne, movidos pela paixão pela mestria, pela tradição e pela qualidade absoluta.
                                                                                                                                                                                                                            </p>
                                <p className="text-brand-ivory/70 text-lg leading-relaxed mb-8">Cada peça que chega ao nosso balcão é cuidadosamente selecionada segundo critérios rigorosos de raça, marmoreio, frescura e consistência, garantindo uma experiência superior desde a escolha até ao momento à mesa. Trabalhamos apenas com fornecedores certificados e processos controlados, respeitando a cadeia de frio e os mais elevados padrões de segurança alimentar.
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
                            <div
                                className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-black bg-brand-muted/20">
                                <img
                                    src="/staff-premium.jpeg"
                                    alt="Equipa Premium"
                                    className="w-full h-full object-contain md:object-contain object-center" />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>
                        </div>
                    </section>
                    {}
                    <section
                        className="relative pt-6 md:pt-12 pb-12 md:pb-24 overflow-hidden bg-brand-charcoal">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/vintage_film_bg.jpg"
                                alt="Background Texture"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                        </div>
                        <div className="relative z-10 max-w-7xl mx-auto px-8 mb-12">
                            <div
                                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                <div>
                                    <h2
                                        className="text-brand-gold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4">O Espaço</h2>
                                    <h3 className="text-3xl md:text-4xl font-serif">Nossas Carnes Selecionadas</h3>
                                </div>
                                <p
                                    className="text-brand-ivory/60 max-w-xs text-left md:text-right text-sm md:text-base">Qualidade que se vê. Sabor que se lembra. Visite as nossas lojas físicas.
                                                                                                                                                                                                                </p>
                            </div>
                        </div>
                        {}
                        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                            <div
                                className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/talho-real-1.jpeg"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        alt="Talho Real" />
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/montra-elite.jpeg"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        alt="Montra de Elite" />
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/talho-real-2.jpeg"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        alt="Interior Loja" />
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/montra-3.jpeg"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        alt="Carne Selecionada 1" />
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/montra-4.jpeg"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        alt="Carne Selecionada 2" />
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/montra-5.jpg"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        alt="Carne Selecionada 3" />
                                </div>
                                <div className="h-96 rounded-2xl overflow-hidden shadow-xl lg:col-span-3">
                                    <img
                                        src="/montra-6.jpeg"
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                        alt="Montra Completa" />
                                </div>
                            </div>
                            {}
                            <div className="md:hidden">
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true
                                    }}
                                    className="w-full">
                                    <CarouselContent>
                                        {[
                                            "/talho-real-1.jpeg",
                                            "/montra-elite.jpeg",
                                            "/talho-real-2.jpeg",
                                            "/montra-3.jpeg",
                                            "/montra-4.jpeg",
                                            "/montra-5.jpg",
                                            "/montra-6.jpeg"
                                        ].map((src, index) => (<CarouselItem key={index}>
                                            <div className="h-[450px] rounded-2xl overflow-hidden shadow-xl mx-2">
                                                <img src={src} className="w-full h-full object-cover" alt={`Slide ${index}`} />
                                            </div>
                                        </CarouselItem>))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-4 mt-6">
                                        <CarouselPrevious
                                            className="static translate-y-0 h-10 w-10 bg-brand-gold border-brand-gold text-brand-charcoal hover:bg-brand-ivory hover:text-brand-charcoal transition-colors shadow-lg" />
                                        <CarouselNext
                                            className="static translate-y-0 h-10 w-10 bg-brand-gold border-brand-gold text-brand-charcoal hover:bg-brand-ivory hover:text-brand-charcoal transition-colors shadow-lg" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </section>
                    {}
                    <section
                        id="produtos"
                        className="relative py-12 md:py-24 overflow-hidden bg-brand-charcoal">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/vintage_film_bg.jpg"
                                alt="Background Texture"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                        </div>
                        <div className="relative z-10 max-w-7xl mx-auto px-8">
                            <div className="text-center mb-16">
                                <h2
                                    className="text-brand-gold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-4">A Seleção do Rei</h2>
                                <h3 className="text-3xl md:text-6xl font-serif mb-8 leading-tight">Cortes Premium, esse é o nosso Compromisso.</h3>
                                <p
                                    className="text-brand-ivory/70 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">Os Cortes Premium Baby Beef são pensados para quem reconhece e valoriza a diferença. Da picanha ao ribeye, do tomahawk aos cortes especiais preparados, cada peça é trabalhada com precisão por profissionais experientes que dominam a arte do talho moderno.</p>
                            </div>
                            {}
                            <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
                                {[
                                    {
                                        title: "Kits Grelhados",
                                        img: "/kit-premium-2.jpeg",
                                        desc: "A praticidade do 'Pegue e Leve' com a nossa qualidade."
                                    },
                                    {
                                        title: "Cortes de Elite",
                                        img: "/ribeye-salt.jpeg",
                                        desc: "Trabalhamos apenas com fornecedores certificados e processos controlados, respeitando a anatomia da carne."
                                    },
                                    {
                                        title: "Churrasco em Casa",
                                        img: "/kit-churrasco-fire.jpeg",
                                        desc: "Tudo o que precisa para o churrasco perfeito com o selo Baby Beef."
                                    }
                                ].map((product, idx) => (<motion.div
                                    key={idx}
                                    whileHover={{
                                        y: -10
                                    }}
                                    className="bg-brand-charcoal border border-brand-gold/10 rounded-2xl overflow-hidden group">
                                    <div className="h-72 overflow-hidden">
                                        <img
                                            src={product.img}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="p-8">
                                        <h4 className="text-2xl font-serif text-brand-gold mb-2">{product.title}</h4>
                                        <p className="text-brand-ivory/60 text-sm mb-6">{product.desc}</p>
                                        <OrderForm>
                                            <button
                                                className="w-full py-3 border border-brand-gold/30 rounded-lg text-xs uppercase font-bold tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-all">Reservar Corte
                                                                                                                                                                                                                                                                                    </button>
                                        </OrderForm>
                                    </div>
                                </motion.div>))}
                            </div>
                            {}
                            <div className="md:hidden mb-16">
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true
                                    }}
                                    className="w-full">
                                    <CarouselContent>
                                        {[
                                            {
                                                title: "Kits Grelhados",
                                                img: "/kit-premium-2.jpeg",
                                                desc: "A praticidade do 'Pegue e Leve' com a nossa qualidade."
                                            },
                                            {
                                                title: "Cortes de Elite",
                                                img: "/ribeye-salt.jpeg",
                                                desc: "Trabalhamos apenas com fornecedores certificados e processos controlados."
                                            },
                                            {
                                                title: "Churrasco em Casa",
                                                img: "/kit-churrasco-fire.jpeg",
                                                desc: "Tudo o que precisa para o churrasco perfeito com o selo Baby Beef."
                                            }
                                        ].map((product, idx) => (<CarouselItem key={idx}>
                                            <div
                                                className="bg-brand-charcoal border border-brand-gold/10 rounded-2xl overflow-hidden mx-2 h-full">
                                                <div className="h-64 overflow-hidden">
                                                    <img
                                                        src={product.img}
                                                        alt={product.title}
                                                        className="w-full h-full object-cover" />
                                                </div>
                                                <div className="p-6">
                                                    <h4 className="text-xl font-serif text-brand-gold mb-2">{product.title}</h4>
                                                    <p className="text-brand-ivory/60 text-sm mb-6">{product.desc}</p>
                                                    <OrderForm>
                                                        <button
                                                            className="w-full py-3 border border-brand-gold/30 rounded-lg text-xs uppercase font-bold tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-all">Reservar Corte
                                                                                                                                                                                                                                                                                                                                                      </button>
                                                    </OrderForm>
                                                </div>
                                            </div>
                                        </CarouselItem>))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-4 mt-6">
                                        <CarouselPrevious
                                            className="static translate-y-0 h-10 w-10 bg-brand-gold border-brand-gold text-brand-charcoal hover:bg-brand-ivory hover:text-brand-charcoal transition-colors shadow-lg" />
                                        <CarouselNext
                                            className="static translate-y-0 h-10 w-10 bg-brand-gold border-brand-gold text-brand-charcoal hover:bg-brand-ivory hover:text-brand-charcoal transition-colors shadow-lg" />
                                    </div>
                                </Carousel>
                            </div>
                            <div className="max-w-4xl mx-auto px-8 text-center">
                                <p className="text-brand-ivory/70 text-lg leading-relaxed mb-8">Aqui, o corte não é apenas técnico — é estratégico. Respeitamos a anatomia da carne para preservar sabor, textura e suculência, oferecendo cortes ideais tanto para o churrasco perfeito como para preparações mais refinadas.
                                                                                                                                                                                                                              </p>
                                <p className="text-brand-gold font-serif text-2xl mb-8 italic">"Porque quando a carne é realmente boa, não precisa de excessos. Precisa de respeito."
                                                                                                                                                                                                                              </p>
                                <div className="pt-12 border-t border-brand-gold/10">
                                    <h4 className="text-3xl font-serif text-brand-gold mb-6">O Rei do Talho</h4>
                                    <p className="text-brand-ivory/80 text-lg mb-8">Na Baby Beef, elevamos o talho a um novo patamar. Unimos tradição e inovação, rigor e paixão, produto e experiência.
                                                                                                                                                                                                                                                  </p>
                                    <div className="inline-block px-8 py-4 border border-brand-gold/30 rounded-lg">
                                        <p className="text-brand-gold font-black uppercase tracking-[0.2em] text-sm">O MUNDO DO TALHO TEM UM REI, E O REI DO TALHO CHAMA-SE BABY BEEF.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {}
                    <HomeProductsSection />
                    {}
                    <TestimonialsSection />
                    {}
                    <section
                        className="py-12 md:py-24 relative overflow-hidden bg-brand-charcoal border-t border-brand-gold/10">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/vintage_film_bg.jpg"
                                alt="Background Texture"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
                            <p className="text-brand-ivory/70 text-lg leading-relaxed mb-8">Aqui, o corte não é apenas técnico — é estratégico. Respeitamos a anatomia da carne para preservar sabor, textura e suculência, oferecendo cortes ideais tanto para o churrasco perfeito como para preparações mais refinadas.
                                                                                                                                                                          </p>
                            <p className="text-brand-gold font-serif text-2xl mb-8 italic">"Porque quando a carne é realmente boa, não precisa de excessos. Precisa de respeito."
                                                                                                                                                                          </p>
                            <div className="pt-12 border-t border-brand-gold/10">
                                <h4 className="text-3xl font-serif text-brand-gold mb-6">O Rei do Talho</h4>
                                <p className="text-brand-ivory/80 text-lg mb-8">Na Baby Beef, elevamos o talho a um novo patamar. Unimos tradição e inovação, rigor e paixão, produto e experiência.
                                                                                                                                                                                                                              </p>
                                <div className="inline-block px-8 py-4 border border-brand-gold/30 rounded-lg">
                                    <p className="text-brand-gold font-black uppercase tracking-[0.2em] text-sm">O Churrasco tem um Rei. E o Rei do Talho chama-se Baby Beef.
                                                                                                                                                                                                                                                          </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {}
                    <section
                        className="relative py-12 md:py-24 bg-brand-charcoal border-y border-brand-gold/10 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/vintage_film_bg.jpg"
                                alt="Background Texture"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                        </div>
                        <div
                            className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
                            <div
                                className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/van-mercedes.jpeg"
                                    className="w-full h-full object-cover"
                                    alt="Distribuição" />
                                <div
                                    className="absolute top-4 left-4 bg-brand-gold text-brand-charcoal px-4 py-1 rounded-full text-xs font-bold uppercase">Frota Própria</div>
                            </div>
                            <div className="order-1 md:order-2">
                                <ShieldCheck size={40} className="text-brand-gold mb-6" />
                                <h3 className="text-4xl font-serif mb-6">Qualidade & Distribuição Refrigerada</h3>
                                <p className="text-brand-ivory/70 text-lg mb-8">Garantimos a integridade de cada corte através da nossa própria rede de logística. Controle total da cadeia de frio, desde a origem até à porta do franqueado ou do cliente.
                                                                                                                                                                                                                              </p>
                                <div className="flex gap-4">
                                    <img
                                        src="/carro-smart.jpeg"
                                        className="w-24 h-24 rounded-lg object-cover border border-brand-gold/20"
                                        alt="Mini Delivery" />
                                    <img
                                        src="/mota-delivery.jpeg"
                                        className="w-24 h-24 rounded-lg object-cover border border-brand-gold/20"
                                        alt="Moto Delivery" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {}
                    <section
                        id="franquias"
                        className="py-16 md:py-32 px-8 bg-brand-gold text-brand-charcoal overflow-hidden">
                        <div className="max-w-6xl mx-auto flex flex-col items-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                className="w-full mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-charcoal/10">
                                <img
                                    src="/franchise-storefront.jpeg"
                                    className="w-full h-auto object-cover"
                                    alt="Modelo de Loja Baby Beef" />
                            </motion.div>
                            <div className="text-center w-full">
                                <TrendingUp size={48} className="mx-auto mb-8" />
                                <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Expanda o Reinado. <br />Seja um Franqueado.</h2>
                                <p className="text-xl mb-12 opacity-80 max-w-2xl mx-auto">A Baby Beef & Co. oferece um modelo de negócio estruturado, logística de frio premium e uma marca com autoridade imediata no mercado.
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
                                <FranchiseForm>
                                    <button
                                        className="bg-brand-charcoal text-brand-gold px-6 md:px-12 py-3 md:py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl text-[10px] md:text-sm">
                                        <span className="hidden md:inline">Solicitar Dossier de Investimento</span>
                                        <span className="md:hidden">Fale Conosco</span>
                                    </button>
                                </FranchiseForm>
                            </div>
                        </div>
                    </section>
                    {}
                    <footer id="contacto" className="pt-24 pb-12 bg-black text-brand-ivory/60">
                        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12 mb-20">
                            <div className="md:col-span-2">
                                <div
                                    className="text-3xl font-serif font-bold tracking-tighter text-brand-gold mb-6">BABY BEEF <span className="text-brand-ivory font-light">& CO.</span>
                                </div>
                                <p className="text-lg max-w-md mb-8">Elevando o padrão do talho em Portugal através da mestria e da paixão pelo fogo.
                                                                                                                                                                                                                              </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full border border-brand-ivory/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full border border-brand-ivory/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                                        <Facebook size={20} />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h5
                                    className="text-brand-ivory font-bold mb-6 uppercase tracking-widest text-xs">Menu</h5>
                                <ul className="space-y-4 text-sm">
                                    <li><a href="#marca" className="hover:text-brand-gold">A Marca</a></li>
                                    <li><a href="#produtos" className="hover:text-brand-gold">Os Nossos Cortes</a></li>
                                    <li><a href="#franquias" className="hover:text-brand-gold">Franquias</a></li>
                                    <li><a href="#lojas" className="hover:text-brand-gold">Lojas</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5
                                    className="text-brand-ivory font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h5>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start gap-2">
                                        <MapPin size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                        <span>Rua Polido Valente nº 12 - loja 3<br />2675-672 Colinas do Cruzeiro - Odivelas</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Phone size={16} className="text-brand-gold" />219 335 677
                                                                                                                                                                                                                                                            </li>
                                    <li className="flex items-center gap-2 underline text-brand-gold">geral@babybeef.pt
                                                                                                                                                                                                                                                            </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center md:items-start">
                                <h5
                                    className="text-brand-ivory font-bold mb-4 uppercase tracking-widest text-xs">Segurança</h5>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 w-full">
                                    <p
                                        className="text-[10px] uppercase tracking-[0.2em] text-brand-ivory/60 mb-4 text-center md:text-left">Este talho está assegurado pela:</p>
                                    <div className="flex flex-col items-center md:items-start gap-2">
                                        <span className="text-3xl font-serif font-bold text-white tracking-tight">Allianz</span>
                                        <div className="h-[1px] w-full bg-brand-gold/20 my-2" />
                                        <p className="text-sm font-serif text-brand-gold italic">Com seguro Multirriscos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="max-w-7xl mx-auto px-8 pt-12 border-t border-brand-ivory/10 text-center text-xs tracking-widest uppercase">© 2024 Baby Beef | O Mundo do Talho agora tem um Rei.
                                                                                                                                                                              </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Index;