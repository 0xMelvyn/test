import Image from "next/image";
import demo from "../../public/demo.png";
import { FaPhone, FaPaintRoller, FaTools, FaShieldAlt } from "react-icons/fa";

export default function Main() {
  return (
    <section className="flex mt-6 mx-1 lg:mt-20">
      <div className="lg:w-1/2 lg:mx-6 lg:mt-14">
        <p className="block lg:hidden text-4xl lg:text-5xl pb-4 font-pirulen justify-center">
          Nouveau service de <span className="text-blue-500">Carrosserie</span> !
        </p>
        <Image src={demo} alt="Demo" width={600} className="lg:flex justify-center mx-auto shadow-2xl" />
        <div className="flex justify-center mt-8 text-blue-500 text-7xl gap-20">
          <FaPaintRoller className="transition-transform duration-500 hover:scale-x-[-1]" />
          <FaTools className="transition-transform duration-500 hover:scale-x-[-1]"/>
          <FaShieldAlt className="transition-transform duration-500 hover:scale-x-[-1]"/>
        </div>
        <p className="block lg:hidden text-lg pt-4">
  Découvrez notre <span className="font-bold">nouveau service de carrosserie</span> pour redonner vie à votre véhicule. Que ce soit pour une réparation mineure ou une restauration complète, nous avons ce qu'il vous faut.
</p>
<br />
<p className="block lg:hidden text-lg">
  Nos services incluent :
</p>
<ul className="block lg:hidden text-lg list-disc ml-8 mt-2">
  <li><span className="font-bold">Réparation de rayures</span></li>
  <li><span className="font-bold">Débosselage</span></li>
  <li><span className="font-bold">Nouvelle peinture</span></li>
  <li><span className="font-bold">Protection carrosserie</span></li>
</ul>
<br />
<p className="block lg:hidden text-lg">
  Faites confiance à notre équipe pour un résultat impeccable.
</p>
        <a href="tel:+33479888135" className="flex justify-center lg:hidden text-white items-center my-7">
          <h1 className="bg-blue-500 hover:bg-blue-400 transition duration-300 py-2 px-8 lg:px-16 text-2xl rounded-md flex items-center">
          Obtenez un devis gratuit <FaPhone className="ml-3 text-2xl" />
          </h1>
        </a>
      </div>
      <div className="lg:w-1/2 lg:mx-5">
        <p className="hidden lg:block text-5xl font-pirulen">
          Nouveau service de <span className="text-blue-500">Carrosserie</span> !
        </p>
        <br />
        <p className="hidden lg:block text-lg">
  Découvrez notre <span className="font-bold">nouveau service de carrosserie</span> pour redonner vie à votre véhicule. Que ce soit pour une réparation mineure ou une restauration complète, nous avons ce qu'il vous faut.
</p>
<br />
<p className="hidden lg:block text-lg">
  Nos services incluent :
</p>
<ul className="hidden lg:block text-lg list-disc ml-8 mt-2">
  <li><span className="font-bold">Réparation de rayures</span></li>
  <li><span className="font-bold">Débosselage</span></li>
  <li><span className="font-bold">Nouvelle peinture</span></li>
  <li><span className="font-bold">Protection carrosserie</span></li>
</ul>
<br />
<p className="hidden lg:block text-lg">
  Faites confiance à notre équipe pour un résultat impeccable.
</p>
        <a href="tel:+33479888135" className="hidden lg:flex text-white items-center mt-7">
          <h1 className="bg-blue-500 hover:bg-blue-400 transition duration-300 p-2 text-2xl rounded-md flex items-center">
          Obtenez un devis gratuit<FaPhone className="ml-3 text-2xl" />
          </h1>
        </a>
      </div>
    </section>
  );
}
