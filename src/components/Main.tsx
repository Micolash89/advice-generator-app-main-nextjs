"use client";

import Image from "next/image";
import { manrope } from "@/lib/font";
import { useEffect, useState } from "react";
import { SlipObject } from "@/lib/definitions";
import Loader from "./Loader";

export default function Main() {
  const [advices, setAdvices] = useState({ id: 0, advice: "" } as SlipObject);
  const [loading, setLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setDisplayedText(""); // Resetear el texto mostrado
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvices(data.slip);
    setLoading(false);
  };

  // Efecto para la animación de escritura
  useEffect(() => {
    if (!loading && advices.advice && advices.advice !== displayedText) {
      setIsTyping(true);
      setDisplayedText(""); // Resetear antes de empezar a escribir
      
      let currentIndex = 0;
      const fullText = advices.advice;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 65); // Velocidad de escritura (50ms entre cada letra)

      return () => clearInterval(typeInterval);
    }
  }, [advices.advice, loading]);

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <main
      className={`${manrope.className} relative flex flex-col items-center justify-center px-2 py-10 bg-backgroundBlue-600 gap-6 w-fit rounded-lg text-2xl max-w-xl transition-all duration-500`}
    >
      <h1 className="text-primaryButton-green tracking-widest uppercase text-lg font-bold min-w-[105px]">
        Advice #<span className="advice-id">{advices.id}</span>
      </h1>

      {!loading && (
        <p className="text-center text-balance min-h-[3rem] flex items-center">
          <span className="font-bold text-primaryButton-blue">
            {`"${displayedText}"`}
            {isTyping && (
              <span className="inline-block w-1 h-6 bg-primaryButton-blue ml-1 animate-pulse">
                |
              </span>
            )}
          </span>
        </p>
      )}

      {loading && <Loader />}

      <Image
        src="/images/pattern-divider-desktop.svg"
        alt="divider"
        className="mb-5 sm:hidden"
        width={444}
        height={16}
      />
      <Image
        src="/images/pattern-divider-mobile.svg"
        alt="divider"
        className="hidden sm:block mb-5"
        width={444}
        height={16}
      />

      <button
        className="absolute translate-y-[calc(100%+5rem)] sm:translate-y-[calc(100%+4.4rem)] bg-primaryButton-green rounded-full w-15 h-15 flex items-center justify-center hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={loading || isTyping} // Deshabilitar mientras carga o escribe
      >
        <Image src="/images/icon-dice.svg" alt="dice" width={24} height={24} />
      </button>
    </main>
  );
}