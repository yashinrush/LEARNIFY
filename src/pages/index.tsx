import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "~/components/Svgs";
import React from "react";
import { LanguageHeader } from "~/components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import { LanguageCarousel } from "~/components/LanguageCarousel";
import Spline from '@splinetool/react-spline';
const bgSnow = _bgSnow as StaticImageData;
const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#2c2c2c] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <LanguageHeader />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
      <Spline
        scene="https://prod.spline.design/j5kvaTG-98c-yrzd/scene.splinecode" 
      />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
          Level Up Your Programming Skills with Fun Games!
          </p>

          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/register"
              className="w-full rounded-2xl border-b-4 border-blue-700 bg-blue-600 px-10 py-3 text-center font-bold uppercase transition hover:border-yellow-600 hover:bg-yellow-500 md:min-w-[320px]"
            >
              Get started
            </Link>
            <button
              className="w-full rounded-2xl border-2 border-b-4 border-[#042c60] bg-[#235390] px-8 py-3 font-bold uppercase transition hover:bg-[#204b82] md:min-w-[320px]"
              onClick={() => setLoginScreenState("LOGIN")}
            >
              I already have an account
            </button>
          </div>
        </div>
      </div>
      <LanguageCarousel />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
