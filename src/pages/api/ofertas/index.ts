import type { NextApiRequest, NextApiResponse } from "next";
import { offersRef } from "./offers-ref";

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

  if (typeof page == "number" && page >= 1) var ofertas = offersRef;

  if (page > 1) offersRef.map((p: any) => ofertas.push(p));

  return res.status(200).json(ofertas);
}
