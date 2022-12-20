import Link from "next/link";

export default function NavTop() {
  const menu = [
    { name: "Todas as Catégorias", icon: "menu", url: '/' },
    { name: "Informática", icon: "notebook", url: '/categorias/informatica' },
    { name: "Telefonia", icon: "smartphone", url: '/categorias/telefonia' },
    { name: "Eletrônicos", icon: "tv", url: '/categorias/eletronicos' },
    { name: "Eletrodomésticos", icon: "eletrodomesticos", url: '/categorias/eletrodomesticos' },
    { name: "Moda e Beleza", icon: "perfume", url: '/categorias/modaebeleza' },
  ];
  const subMenu = [
    { name: "-celulares e smartphones", star: false, cat: "all" },
    { name: "tv e vídeo", star: false, cat: "all" },
    { name: "consoles e games", star: false, cat: "all" },
    { name: "áudio", star: false, cat: "all" },
    { name: "câmeras e drones", star: false, cat: "all" },
    { name: "telefonia fixa", star: false, cat: "all" },
    { name: "-informática e acessórios", star: true, cat: "all" },
    { name: "informática", star: false, cat: "all" },
    { name: "acessórios e periféricos", star: false, cat: "all" },
    { name: "pc gamer", star: false, cat: "all" },
    { name: "-comércio e segurança", star: true, cat: "all" },
    { name: "agro, indústria e comércio", star: false, cat: "all" },
    { name: "sinalização e segurança", star: false, cat: "all" },
  ];

  return (
    <div className="bg-white h-[34px] w-full mb-1 flex items-center justify-between px-2 shadow-md">
      <ul className="list-none w-full px-8 flex justify-between text-sm float-left">
        {menu.map((item, index) => (
          <Link 
            href={item.url}
            key={index}
          >
          <li
            className={`flex items-center text-sm text-zinc-400 hover:text-zinc-600 cursor-pointer ${
              index === 0 ? "font-semibold" : ""
            }`}
          >
              <img
                src={"/icons/" + item.icon + ".png"}
                alt={item.name}
                width="16px"
                className={!item.icon ? "hidden" : ""}
                />
              <p className="ml-1">{item.name}</p>
          </li>
            </Link>
        ))}
      </ul>
    </div>
  );
}
