"use client";
import { useState } from "react";
import Header from "./components/pages/Header";
import Disclaimer from "./components/pages/Disclaimer";
import WhatIsSQL from "./components/pages/WhatIsSQL";
import HowSqlWorks from "./components/pages/HowSqlWorks";
import SqlInjectionsExplained from "./components/pages/SqlInjectionsExplained";
import CommonAttacks from "./components/pages/CommonAttacks";
import RealExamples from "./components/pages/RealExamples";
import FixedCode from "./components/pages/FixedCode";
import FunFacts from "./components/pages/FunFacts";
import FinalPage from "./components/pages/FinalPage";

export default function Home() {
  const [page, setPage] = useState(0);

  function nextPageHandler() {
    let nxp = page;
    setPage((nxp += 1));
  }
  function previousPageHandler() {
    let nxp = page;
    setPage((nxp -= 1));
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14 ">
      {page < 1 && <Header />}
      {page === 1 && <Disclaimer />}
      {page === 2 && <WhatIsSQL />}
      {page === 3 && <HowSqlWorks />}
      {page === 4 && <SqlInjectionsExplained />}
      {page === 5 && <CommonAttacks />}
      {page === 6 && <RealExamples />}
      {page === 7 && <FixedCode />}
      {page === 8 && <FunFacts />}
      {page === 9 && <FinalPage />}

      <div className="w-full flex justify-end text-red-500 py-2">
        {page < 1 ? (
          <button className=" w-1/4 px-1" onClick={() => nextPageHandler()}>
            Next
          </button>
        ) : page > 8 ? (
          <div>
            <button className="px-1" onClick={() => previousPageHandler()}>
              Previous
            </button>
            <span className="px-1 underline underline-offset-2">
              Completed!
            </span>
          </div>
        ) : (
          <div className="">
            <button className="px-1 " onClick={() => previousPageHandler()}>
              Previous
            </button>
            <span className="px-1 underline underline-offset-2">{page}</span>
            <button className="px-1 " onClick={() => nextPageHandler()}>
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
