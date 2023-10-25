"use client";
import { useState } from "react";
import Header from "./components/pages/Header";

export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Header />
      <div className="w-full flex justify-end">
        {page < 1 ? <button className="text-cyan-100 w-1/4 ">Next</button> : ""}
      </div>
    </main>
  );
}
