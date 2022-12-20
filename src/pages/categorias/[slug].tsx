import { useRouter } from "next/router";

import Page from "../../components/Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Categorias() {
  const routes = useRouter();

  return (
    <Page 
      title={`Catégorias - ${routes.query.slug ? routes.query.slug : ''}`} 
      description={`Veja as melhores ofertas para ${routes.query.slug ? routes.query.slug : ''}, e compre ainda mais barato com cashback!`} 
      path={`/categorias/${routes.query.slug ? routes.query.slug : ''}`}
    >
      <Header />
      <div className="flex">
        <Content />
        <Sidebar />
      </div>
    </Page>
  );
}

