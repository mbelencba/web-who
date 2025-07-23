import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { faChartLine, faRobot } from "@fortawesome/free-solid-svg-icons";

const QuieneSomos = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:mx-auto lg:w-full p-4 bg-[#b700ff0a] rounded-lg">
      <h3 className="text-title font-semibold">
        {t("tituloSecundario")}
        <span className="text-whoVV">{t("tituloSecundario2")}</span>
      </h3>
      <p className="text-subtitle text-whoG">{t("textoSecundario")}</p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 w-full">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full bg-white p-4 rounded-lg shadow-md lg:max-w-lg">
          <FontAwesomeIcon className="w-10 text-who1" icon={faRobot} />
          <p>{t("textoSecundario2")}</p>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full bg-white p-4 rounded-lg shadow-md lg:max-w-lg">
          <FontAwesomeIcon className="w-8 text-who1" icon={faChartLine} />
          <p>{t("textoSecundario2")}</p>
        </div>
      </div>
    </div>
  );
};

export default QuieneSomos;
