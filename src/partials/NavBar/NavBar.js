"use client";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import BtnHamburguesa from "./components/BtnHamburguesa";
import { useLocale, useTranslations } from "next-intl";
import "./NavBar.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CButton } from "@/components/CButton/CButton";
import { scrollToContact, scrollToServices, scrollToTop } from "@/utils/scroll";

const NavBar = () => {
  const [action, setAction] = useState(false);
  const t = useTranslations("NavBar");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = (lang) => {
    router.push(`/${lang}${pathname}`, undefined, { locale: lang });
  };
  return (
    <div className="relative h-16 lg:h-24 mt-4 mx-3">
      <nav
        className={`navbar ${
          action && "menu-active"
        } p-2 rounded-lg bg-gray-50 absolute z-10 shadow-sm shadow-who2 lg:px-5 px-3 flex flex-row justify-center items-center lg:max-w-7xl`}
      >
        <Image
          width={300}
          height={300}
          src="/logo-who-01.png"
          alt="Logo"
          className="logo lg:w-12 w-8"
        />
        <ul className="menu text-gray-800 text-xl">
          <li>
            <CButton tipo="text" label={t("home")} onClick={scrollToTop} />
          </li>
          <li>
            <CButton tipo="text" label={t("about")} onClick={scrollToServices} />
          </li>
          <li>
            <CButton tipo="text" label={t("contact")} onClick={scrollToContact} />
          </li>
        </ul>
        <ul className="hidden md:flex lg:flex text-gray-800 text-xl lg:gap-2">
          <li>
            <button
              disabled={locale === "es"}
              onClick={() => toggleLanguage("es")}
              className={`${
                locale === "es"
                  ? "text-whoG cursor-default"
                  : "text-whoVV cursor-pointer"
              }`}
            >
              ES
            </button>
          </li>
          <li>
            <button
              disabled={locale === "en"}
              onClick={() => toggleLanguage("en")}
              className={`${
                locale === "en"
                  ? "text-whoG cursor-default"
                  : "text-whoVV cursor-pointer"
              }`}
            >
              EN
            </button>
          </li>
        </ul>
        <div className="hamburguesa lg:hidden md:hidden pt-3">
          <BtnHamburguesa action={action} setAction={setAction} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
