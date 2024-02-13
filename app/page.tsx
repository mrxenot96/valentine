"use client";

import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      // Magyar
       "Nem",
       "Biztos?🙄",
       "Tényleg biztos?🤔",
       "Bizti bizti???😶",
       "Kérlek szerelmem...🙏",
       "Gondold át még egyszer🥺",
       "Ha nemet mondasz, nagyon szomorú leszek🙁",
       "Nagyon szomorú leszek😕",
       "Nagyon nagyon szomorú leszek😓",
       "Nagyon nagyon nagyon szomorú leszek😖",
       "Rendben😡, abbahagyom a kérdezést...",
       "Csak viccelek, KÉRLEK MONDJ IGENT🙏",
       "Nagyon nagyon nagyon nagyon szomorú leszek🥴",
       "Összetöröd a szívem😥😥😥",
    ];

    return phrases[noCount % phrases.length];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.webp" />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            {/* Thanks! Ok yay */}
            Juuuj! Köszönöm! Nagyon szeretlek Életem! 
          </div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-[2rem] text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            {/* Will you be my Valentine? */}
            Leszel a valentinom Béb?
          </h1>
          <div className="text-center space-y-5">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              {/* Yes */}
              Đúng
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? 
                // "No" 
                "Nem 😥"
                : getNoButtonText()
              }
            </button>
          </div>
        </>
      )}
    </div>
  );
}
