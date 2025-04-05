"use client"
import matheusImage from "@/assets/images/perfil-matheus.png";
import Image from "next/image";
import ArroDowm from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <section id="inicial">
    <div className="py-32 md:py-48 lg:py-55 relative z-0 overflow-x-clip" >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          size={455}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-9 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={matheusImage} className="size-[150px]" alt="me" />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="relative">
              <div className="bg-green-500 size-2.5 rounded-full relative" />
              <div
                className="bg-green-500 absolute inset-0 rounded-full 
            animate-ping-large"
              ></div>
            </div>
            <div className=" text-sm font-medium">Aberto a novos projetos</div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="text-center max-w-lg ">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Criando experiências digitais impactantes
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg ">
              Transformando ideias em interfaces fluidas e inteligentes.
              Especializado em desenvolvimento full-stack, Machine Learning e
              IoT, com foco em inovação e performance.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a 
          href="#projetos"
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10"
          >
            <span className="font-semibold">Confira meu trabalho</span>
            <ArroDowm className="size-4" />
          </a>
          <a 
          href="#contato"
          className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10"
          >
            <span>👋</span>
            <span className="font-semibold">Entre em contato</span>
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};
