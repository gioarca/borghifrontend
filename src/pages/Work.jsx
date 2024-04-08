import React from "react";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

function Work() {
  const [isLoading, setIsLoading] = useState(true); // nuovo stato per il caricamento

  useEffect(() => {
    setTimeout(async () => {
      // inserito il timeout di 1.5 secondi
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center text-center">
      <button
        disabled
        type="text"
        className="px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:opacity-75 hover:outline-none m-64"
      >
        Arriverà presto! Stay tuned
      </button>
    </div>
  );
}

export default Work;
