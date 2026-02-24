import React from "react";
import Image from "next/image";
import MainPhoto from "@/shared/assets/main/Main.png";
import ButtonElement from "@/shared/button/Button";
const MainScrean = () => {
  return (
    <div className="flex flex-1 justify-between gap-6">
      <Image
        src={MainPhoto}
        alt="Dzerks"
        width={750}
        height={950}
        className="rounded-r-2xl"
      />

      <section className="w-full max-w-3xl flex justify-center flex-col flex-1/2">
        <h1 className="text-7xl text-gray-600 !text-7xl">
          <span className="text-red-600 text-7xl">M</span>EAT-HIT
        </h1>
        <span className="text-2xl font-light text-gray-500 mb-5">
          Справжні м'ясні снеки без компромісів{" "}
        </span>
        <p className="max-w-96 mb-5">
          Ми робимо дійсно м'ясні снеки, без зайвих інгредієнтів. Готуємо лише
          добірне м'ясо, щоб забезпечити неперевершений смак.
        </p>
        <ButtonElement
          title="Купити"
          style={{ background: "red.500", color: "white", marginTop: "20px" }}
          _hover={{ background: "red.400", color: "white" }}
        />
      </section>
    </div>
  );
};

export default MainScrean;
