import Page from "../components/Page";
import Content from "../components/Content";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Page 
      title="Ofertas Recentes" 
      description="Veja as melhores ofertas, e compre ainda mais barato com cashback!" 
      path="/"
    >
      <Header />
      <div className="flex">
        <Content />
        <Sidebar />
      </div>
    </Page>
  );
}
