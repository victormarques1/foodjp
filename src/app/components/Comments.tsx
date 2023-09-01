import Image from "next/image";
import React from "react";
import Daniele from "../../../public/daniele.svg";
import Ricardo from "../../../public/ricardo.svg";
import estrelas from "../../../public/estrelas.svg"

const Comments = () => {
  return (
    <div className="mt-8 md:mt-24">
      <h1 className="text-black-main font-semibold text-2xl md:text-5xl text-center">
        Comentários
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center mt-8 md:mt-12">
        <div className="bg-gray-bg-pop flex flex-col items-center justify-center rounded-lg md:rounded-3xl">
          <Image src={Daniele} alt="Ramen de frango" className="mt-8"/>
          <h2 className="font-medium text-2xl md:text-3xl text-center text-black-main pt-8">
            Daniele Almeida
          </h2>
          <p className="text-gray-light md:text-lg pt-4 px-8 text-center">
          Ótimo serviço! Encantada com a qualidade dos pratos.
          </p>
          <Image src={estrelas} alt="Feedback" className="my-4"/>
        </div>
        <div className="bg-gray-bg-pop flex flex-col items-center justify-center rounded-lg md:rounded-3xl mt-8 md:mt-0">
          <Image src={Ricardo} alt="Ramen Apimentado" className="mt-8" />
          <h2 className="font-medium text-2xl md:text-3xl text-center text-black-main pt-8">
            Ricardo França
          </h2>
          <p className="text-gray-light md:text-lg pt-4 px-8 text-center">
          Não é apenas a comida excelente, o serviço torna a experiência especial.
          </p>
          <Image src={estrelas} alt="Feedback" className="my-4"/>
        </div>
      </div>
    </div>
  );
};

export default Comments;
