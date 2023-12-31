import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="flex gap-12 mt-12 items-start">
        <span className="flex font-bold md:text-4xl text-xl md:mt-0">
          <p className="text-black-main">Food</p>
          <p className="text-red-main">JP</p>
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 ">
          <div>
            <h2 className="font-medium md:text-3xl">Contato</h2>
            <p className="text-gray-light mb-2">+55 55 99999-9999</p>
            <p className="text-gray-light">email@gmail.com</p>
          </div>
          <div>
            <h2 className="font-medium md:text-3xl">Sobre nós</h2>
            <p className="text-gray-light mb-2">Menu</p>
            <p className="text-gray-light mb-2">Valores</p>
            <p className="text-gray-light">Página principal</p>
          </div>
          <div>
            <h2 className="font-medium md:text-3xl">Serviços</h2>
            <p className="text-gray-light mb-2">Entrega</p>
            <p className="text-gray-light">Retirada</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
