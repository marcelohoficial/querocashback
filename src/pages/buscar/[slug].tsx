import { useRouter } from "next/router";

import Page from "../../components/Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Buscar() {
  const routes = useRouter();

  return (
    <Page 
      title={`Buscou ${routes.query.slug ? routes.query.slug : ''} `} 
      description={`Você buscou ${routes.query.slug ? routes.query.slug : ''} , veja os melhores preços agora.`} 
      path={`/buscar/${routes.query.slug ? routes.query.slug : ''} `}
    >
      <Header />
      <div className="flex">
        <Content />
        <Sidebar />
      </div>
    </Page>
  );
}

