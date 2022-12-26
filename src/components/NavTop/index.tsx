import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export type NavTopMenuProps = {
  name: string;
  icon: string;
  slug: string;
};

export default function NavTop() {
  const [menu, setMenu] = useState([]);
  const [destaques, setDestaques] = useState([
    {
      name: "Eletrodomésticos",
      slug: "eletrodomesticos",
      icon: "eletrodomesticos",
    },
    {
      name: "Eletrônicos",
      slug: "eletronicos",
      icon: "eletronicos",
    },
    {
      name: "Informática",
      slug: "informatica",
      icon: "informatica",
    },
    {
      name: "Moda e Beleza",
      slug: "moda-beleza-e-perfumaria",
      icon: "moda-beleza-e-perfumaria",
    },
    {
      name: "Telefonia",
      slug: "telefonia",
      icon: "telefonia",
    },
  ]);

  // useEffect(() => {
  //   !menu.length ? getMenu() : "";
  // });

  async function getMenu() {
    const categorias = await axios
      .get(
        `https://admin.pechinchou.com.br/api/v2/gerenciamento/listar_categorias_sem_paginacao_name/`
      )
      .then((res) => res.data);

    const menuAll = categorias.map(({ name, slug }: any) => ({
      name,
      slug,
      icon: slug,
    }));
    menuAll.pop();
    setMenu(menuAll);

    // const destaquesRef = [
    //   "Informática",
    //   "Telefonia",
    //   "Eletrônicos",
    //   "Eletrodomésticos",
    //   "Moda, Beleza e Perfumaria",
    // ];
    // let destaquesAll = [];
    // menu.map((item: any) => {
    //   let ref = destaquesRef.filter((i) => i === item.name);
    //   if (ref.length) {
    //     destaquesAll.push(item);
    //   }
    // });
    // destaquesAll[3]?.name === "Moda, Beleza e Perfumaria"
    //   ? (destaquesAll[3].name = "Moda e Beleza")
    //   : "";
    // setDestaques(destaquesAll);
    // console.log(destaquesAll);
  }

  return (
    <div className="bg-white h-[34px] w-full mb-1 flex items-center justify-between px-2 shadow-md">
      <ul
        className={`list-none w-full px-8 flex justify-between text-sm float-left ${
          !destaques ? "hidden" : ""
        }`}
      >
        <li
          className={`flex items-center text-sm text-zinc-400 hover:text-zinc-600 cursor-pointer font-semibold`}
        >
          <img src={`/icons/menu.png`} alt="Todas as Categorias" width="16px" />
          <p className="ml-1">Todas as Categorias</p>
        </li>
        {destaques
          ? destaques.map((item: NavTopMenuProps, index: number) => (
              <Link href={`/categorias/${item.slug}`} key={index}>
                <li
                  className={`flex items-center text-sm text-zinc-400 hover:text-zinc-600 cursor-pointer}`}
                >
                  <img
                    src={`/icons/${item.icon}.png`}
                    alt={item.name}
                    width="16px"
                    className={!item.icon ? "hidden" : ""}
                  />
                  <p className="ml-1">{item.name}</p>
                </li>
              </Link>
            ))
          : ""}
      </ul>
    </div>
  );
}
