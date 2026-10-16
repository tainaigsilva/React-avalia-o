import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { LuCheckCheck } from "react-icons/lu";

const App = () => {
  const [nota, setNota] = useState(null);
  const [mostrarNotas, setMostrarNotas] = useState(false);
  return (
    <div className="bg-stone-950 h-screen flex justify-center items-center">
      <div className="w-80 bg-linear-to-b from-slate-500 to-slate-950/2  p-6 rounded-4xl">
        {
          mostrarNotas ? (
            <>
              <div className="w-25 h-25 rounded-full border-2 border-white/50 text-white m-auto my-15 flex justify-center items-center">
                <LuCheckCheck size={50} color="green" />
              </div>
              <h3 className="text-orange-500 bg-white/10 rounded-2xl text-center"> Sua nota foi {nota} de 5</h3>
              <p className="text-white text-center mt-4">Obrigada por sua avaliação</p>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center">
                <BiSolidStar className="text-yellow-400 " />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"> Escolha uma nota</h3>
              <p className="text-gray-300 text-xs mb-4">Selecione uma avaliação de 1 a 5 estrelas</p>
              <div className="flex justify-between mb-4 *:w-10 *:h-10 *:rounded-full *:bg-white/10* *:text-gray-300 *:hover:bg-red-400 *:hover:text-white *:transition-colors *:cursor-pointer *:[&.active]:bg-orange-500 *:[&.active]:text-white">
                <button onClick={() => setNota(1)} className={nota == 1 ? "active" : ""}>1</button>
                <button onClick={() => setNota(2)} className={nota == 2 ? "active" : ""}>2</button>
                <button onClick={() => setNota(3)} className={nota == 3 ? "active" : ""} >3</button>
                <button onClick={() => setNota(4)} className={nota == 4 ? "active" : ""} >4</button>
                <button onClick={() => setNota(5)} className={`[&.active]:bg-blue-500! ${nota == 5 ? "active" : ""}`} >5</button>

              </div>
              <button onClick={() => setMostrarNotas(true)}
              disabled={nota== null}
               className="w-full h-10 rounded-full bg-orange-400 text-white hover:bg-white hover:text-orange-400 transition-colors cursor-pointer">Enviar</button>

            </>
          )

        }
      </div>
    </div>
  );
}

export default App;