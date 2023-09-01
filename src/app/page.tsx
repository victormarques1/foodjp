import Image from "next/image";
import Sushi from "../../public/sushi.svg";
import Img2 from "../../public/img-2.svg";
import { Header } from "./components/Header";
import Link from "next/link";
import { Populars } from "./components/Populars";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full p-4 md:p-8">
        <Header />
        <section className="md:mt-20 w-full flex">
          <div className="md:mt-28 mt-12 flex flex-col">
            <h1 className="text-black-main font-semibold text-3xl md:text-4xl pb-4 md:pb-6">
              Comida Oriental
            </h1>
            <span className="md:text-2xl pb-4 md:pb-8">
              A culinária Japonesa é bastante equilibrada, sendo muito rica em
              peixes (ômega 3), vegetais, massas e ingredientes frescos.
            </span>
            <button className="w-full md:max-w-sm bg-red-main text-white rounded-[10px] md:p-4 p-2 font-semibold md:text-2xl">
              Cardápio
            </button>
          </div>
          <div className="w-full justify-end text-center md:pl-12 hidden md:block">
            <Image src={Sushi} alt="Sushi Image" className="" />
          </div>
        </section>

        <section className="md:mt-20 w-full flex flex-col md:flex-row">
          <div className="w-full text-center md:mt-0 mt-8">
            <Image src={Img2} alt="Image" className="w-full" />
          </div>
          <div className="flex flex-col justify-center md:pl-12 mt-8 text-center md:text-start">
            <h1 className="text-black-main font-semibold text-3xl md:text-4xl pb-4 md:pb-6 ">
              Feita de forma Tradicional
            </h1>
            <span className="md:text-2xl pb-4 md:pb-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              placeat fugiat eligendi vel, aliquam rem molestias dicta
              perspiciatis deleniti.
            </span>
            <Link href="/" className="text-red-main font-medium md:text-2xl mt-2 md:mt-0 underline hover:font-semibold">
              Ler mais sobre o modo de preparo
            </Link>
          </div>
        </section>
        <Populars />
        
      </div>
    </div>
  );
}
