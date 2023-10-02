import Image from "next/image";
import React from "react";

function AboutContainer() {
  return (
    <div className="pt-[10vh] flex p-6 space-x-6 items-center px-20">
      <div className="flex-1">
        <h2 className="text-2xl font-bold- mb-4">Sobre Nosotros</h2>
        <p>
          Bienvenidos a nuestra web de Series. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Accusantium earum odit delectus?
          Excepturi aperiam iusto inventore odit itaque animi possimus quaerat
          error assumenda veritatis! Eligendi debitis nisi corrupti quidem
          dolore!
        </p>
        <div className=" flex justify-center gap-8 p-6">
          <button className="bg-red-200 rounded-lg px-4 py-2">Red 1</button>
          <button className="bg-blue-200 rounded-lg px-4 py-2">Red 2</button>
          <button className="bg-green-200 rounded-lg px-4 py-2">
            Contacto{" "}
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 h-[70vh] rounded-xl">
        Series Vico
      </div>
    </div>
  );
}

export default AboutContainer;
