import { useRouter } from "next/router";

import Page from "../../components/Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { GetStaticProps } from "next";

type infoPageProps = {
  name: string;
  description: string;
  slug: string;
};

export default function Categorias({ info }: any) {
  const routes = useRouter();

  return (
    <Page
      title={`Catégorias - ${!info?.name ? routes.query.slug : info.name}`}
      description={`${
        !info?.description
          ? `Veja as melhores ofertas para ${
              routes.query.slug ? routes.query.slug : ""
            }, e compre ainda mais barato com cashback!`
          : info.description
      }`}
      path={`/categorias/${routes.query.slug ? routes.query.slug : ""}`}
    >
      <Header />
      <div className="flex">
        <Content />
        <Sidebar />
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  const categorias = await axios
    .get(`${process.env.API_CATEGORIAS}`)
    .then((res) => res.data);

  const paths = categorias.map(({ slug }: any) =>
    slug ? { params: { slug: slug } } : null
  );
  paths.pop();

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const categorias = await axios
    .get(`${process.env.API_CATEGORIAS}`)
    .then((res) => res.data);
  categorias.pop();

  let info = categorias.filter((cat: any) => params.slug === cat.slug);
  info = info[0];

  return {
    props: { info },
  };
};
