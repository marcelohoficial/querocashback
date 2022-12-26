import Page from "../components/Page";
import Content from "../components/Content";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { GetStaticProps } from "next";

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

// export async function getStaticPaths() {
//   const categorias = await axios
//     .get(`${process.env.API_CATEGORIAS}`)
//     .then((res) => res.data);

//   const paths = categorias.map(({ slug }: any) =>
//     slug ? { params: slug } : null
//   );
//   paths.unshift({ params: "/" });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const categorias = await axios
//     .get(`${process.env.API_CATEGORIAS}`)
//     .then((res) => res.data);

//   const menu = categorias.map(({ name, slug }: any) => ({
//     name,
//     slug,
//     icon: slug,
//   }));
//   menu.pop();

//   return {
//     props: {
//       menu,
//     },
//   };
// };
