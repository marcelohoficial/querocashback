import Link from "next/link";

export default function Sidebar() {
  const sidebar = [
    {
      title: "Receba Ofertas Relâmpago",
      icon: "/icons/whatsapp.svg",
      link: 'https://chat.whatsapp.com/EFOJ1Mhl4l0IdGIQXLmuKD',
      description:
        "Receba as melhores ofertas no seu Whatsapp na hora e não perca nenhuma oferta relâmpago.",
      button: "Receber Ofertas",
      button_collor: "bg-green-700 hover:bg-green-600",
    },
    {
      title: "Receba Ofertas no Telegram",
      icon: "/icons/telegram.svg",
      link: '',
      description:
        "Receba as melhores ofertas no seu Telegram na hora e não perca nenhuma oferta!",
      button: "Receber Ofertas",
      button_collor: "bg-cyan-700 hover:bg-cyan-600",
    },
  ];

  return (
    <div className="w-1/5 max-md:hidden flex flex-col">
      {sidebar.map((sidebar, index) => (
        <div
          key={index}
          className="h-max mt-4 mb-0 ml-0 mr-4 px-4 py-6 flex flex-col bg-white rounded-md"
        >
          <div className="w-full flex flex-col">
            <div id="title" className="flex items-center">
              <img
                src={sidebar.icon}
                alt={sidebar.title}
                width="18px"
                height="18px"
              />
              <p className="ml-2 text-sm font-semibold text-green-900">
                {sidebar.title}
              </p>
            </div>
            <p className="mt-2 text-sm text-stone-400 text-justify">
              {sidebar.description}
            </p>
            <Link
              className={`w-full h-10 mt-4 shadow-sm  font-bold text-white flex justify-center items-center rounded-md ${sidebar.button_collor}`}
              href={sidebar.link}
              target="_blank"
            >
              {sidebar.button}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
