import React from "react";
import Image from "next/image";
import RamenFrango from "../../../public/ramen-frango.svg";
import RamenApimentado from "../../../public/ramen-apimentado.svg";
import Ramen from "../../../public/ramen.svg";

export const Populars = () => {
  return (
    <div className="mt-8 md:mt-24">
      <h1 className="text-black-main font-semibold text-2xl md:text-5xl text-center">
        Mais populares
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center mt-8 md:mt-12">
        <div className="bg-gray-bg-pop flex flex-col items-center justify-center rounded-lg md:rounded-3xl">
          <Image src={RamenFrango} alt="Ramen de frango" />
          <h2 className="font-medium text-2xl md:text-3xl text-center text-black-main pt-8">Ramen de Frango</h2>
          <p className="text-gray-light md:text-lg pt-4 px-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="text-black-main text-3xl md:font-medium md:text-4xl py-4">R$ 30</p>
        </div>
        <div className="bg-gray-bg-pop flex flex-col items-center justify-center rounded-lg md:rounded-3xl mt-8 md:mt-0">
          <Image src={RamenApimentado} alt="Ramen Apimentado" />
          <h2 className="font-medium text-2xl md:text-3xl text-center text-black-main pt-8">Ramen Apimentado</h2>
          <p className="text-gray-light md:text-lg pt-4 px-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="text-black-main text-3xl md:font-medium md:text-4xl py-4">R$ 30</p>
        </div>
        <div className="bg-gray-bg-pop flex flex-col items-center justify-center rounded-lg md:rounded-3xl mt-8 md:mt-0">
          <Image src={Ramen} alt="Ramen tradicional" />
          <h2 className="font-medium text-2xl md:text-3xl text-center text-black-main pt-8">Ramen Tradicional</h2>
          <p className="text-gray-light md:text-lg pt-4 px-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="text-black-main text-3xl md:font-medium md:text-4xl py-4">R$ 30</p>
        </div>
      </div>
    </div>
  );
};
