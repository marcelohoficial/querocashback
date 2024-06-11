import Content from "../components/Content";
import Header from "../components/Header";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";

export default function Home(props: any) {
  return (
    <Page
      title="Ofertas Recentes"
      description="Veja as melhores ofertas, e compre ainda mais barato com cashback!"
      path="/"
    >
      <Header {...props} />
      <div className="flex">
        <Content />
        <Sidebar />
      </div>
    </Page>
  );
}
