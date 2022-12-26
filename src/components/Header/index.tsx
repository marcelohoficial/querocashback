import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavTop from "../NavTop";

export default function Header() {
  const router = useRouter();
  const [busca, setBusca] = useState("");

  function handleSearch(word: any) {
    let encode = encodeURIComponent(word);

    router.push(`/buscar/${encode}`);
  }

  return (
    <>
      <div className="bg-white h-[64px] w-full flex items-center justify-between px-2 shadow-md border-b-2 border-zinc-200">
        <div className="w-[154px] h-4/5 flex justify-center items-center">
          <Link href="/">
            <img src="/logoQuero2.png" alt="Picture" width={150} height={60} />
          </Link>
        </div>
        <div className="min-w-[154px] w-80 h-4/5 flex justify-center items-center">
          <input
            id="search"
            type="text"
            onChange={(e) => {
              setBusca(e.target.value);
            }}
            onKeyDown={(e) => (e.keyCode === 13 ? handleSearch(busca) : null)}
            className="block w-full pr-8 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm font-bold text-zinc-900
              shadow-sm placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
        </div>
        <div className="min-w-[154px] h-4/5 flex justify-center items-center">
          <button
            type="button"
            className="block w-full h-9 px-4 bg-orange-600 rounded-md text-sm font-bold text-white
              shadow-md placeholder-slate-400 hover:bg-orange-500 focus:none active:none
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          >
            Entrar ou Cadastrar-se
          </button>
        </div>
      </div>
      <NavTop />
    </>
  );
}
