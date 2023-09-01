import React from "react";
import Image from "next/image";
import mapa from '../../../public/mapa rio.svg'

export const Location = () => {
  return (
    <div className="mt-8 md:mt-24">
      <h1 className="text-black-main font-semibold text-2xl md:text-5xl text-center md:text-start md:mb-12 mb-4">
        Localização
      </h1>
      <div>
        <Image src={mapa} alt="Mapa rio"/>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-8">
        <input placeholder="Localização para entrega"
        className="border border-black-main rounded p-2 md:text-2xl text-base"
        />
        <button className="bg-red-main text-white rounded p-2 ml-4 md:text-2xl text-base" >
            Buscar
        </button>
      </div>
    </div>
  );
};
