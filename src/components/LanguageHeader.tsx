import Link from "next/link";
import { LanguageDropDown } from "./LanguageDropDown";

export const LanguageHeader = () => {
  return (
    <header className="left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#2c2c2c] px-5 sm:px-10 lg:px-20 font-bold text-white">
      <Link className="text-3xl sm:text-4xl lg:text-6xl text-yellow-500" href="/">
        Learniverse
      </Link>
      {/* Language Dropdown or other components */}
      {/* <LanguageDropDown /> */}
    </header>
  );
};
