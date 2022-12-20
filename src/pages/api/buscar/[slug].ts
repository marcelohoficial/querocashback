import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  store: {
    logo: string;
    name: string;
    slug: string;
    url: string;
  };
  freight: string;
  subcategory: {
    category: {
      name: string;
    };
  };
  form_payment: string;
  title: string;
  slug: string;
  old_price: string;
  price: string;
  image: string;
  image_social: string;
  long_url: string;
  short_url: string;
  coupon: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const page = Number(req.query.page);

  if (typeof page == "number" && page >= 1) {
    if(req.query.category) {
      var ofertas = await axios
        .get(
          `https://admin.pechinchou.com.br/api/v2/produto/listar_produtos_por_opcao/${req.query.category}/?page=${page}`
        )
        .then((res) => res.data)
        .then((res) => res.results);
    } else {
      var ofertas = await axios
        .get(
          `https://admin.pechinchou.com.br/api/v2/produto/listar_produtos_por_opcao/search/${req.query.slug}/?page=${page}`
        )
        .then((res) => res.data)
        .then((res) => res.results);
    }
  }

  // category/telefonia
  return res.status(200).json(ofertas);
}
