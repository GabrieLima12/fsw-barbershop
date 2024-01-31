import Image from "next/image";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div>
      <Header />
      
      <div>
        <h2 className="text-xl font-bold">Olá, Gabriel</h2>
        <p className="capitalize text-sm" >{
          format(new Date(), "EEEE',' d 'de' MMMM", {
            locale: ptBR,
          })
          }</p>
      </div>
    </div>
  );
}
