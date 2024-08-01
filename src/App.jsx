import { useState } from "react";
import "./App.css";

function App() {
  const [colorBg, setColor] = useState(0);

  return (
    <>
      <div
        className="h-screen w-screen bg-black relative duration-200 transition-all text-center text-5xl items-center flex justify-center font-semibold text-white cursor-pointer"
        style={{ backgroundColor: colorBg}}
      >
        The Color is {colorBg || "black"}
        <div className="h-14 w-3/4 bg-white absolute left-40 bottom-10 rounded-lg flex justify-center items-center gap-5 flex-wrap">
          <button
            onClick={() => setColor("red")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-red-700"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-green-700"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-blue-700"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-orange-700"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-yellow-700"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-purple-700"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("grey")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-slate-700"
          >
            Grey
          </button>
          <button
            onClick={() => setColor("pink")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-pink-700"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black", "white")}
            className="text-white border-black text-base border h-9 w-20 rounded-full font-bold bg-black"
          >
            Black
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="text-black border-black text-base border h-9 w-20 rounded-full font-bold bg-cyan-700"
          >
            Cyan
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
