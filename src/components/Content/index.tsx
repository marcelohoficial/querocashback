import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import InfiniteScroll from "../InfiniteScroll";
import Loading from "../Loading";
import ProductBox from "../ProductBox";

export default function Content() {
  const routes = useRouter();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ofertas, setOfertas] = useState([]);
  const [timeLoad, setTimeLoad] = useState(false);

  useEffect(() => {
    getOffers();
  }, [page]);

  useEffect(() => {
    if (loading) {
      setTimeLoad(true);
      setTimeout(() => {
        setTimeLoad(false);
      }, 5000);
    }
  }, [loading]);

  async function getOffers() {
    setLoading(true);
    let newOfertas = []

    if(page === 1) setOfertas([])

    if(routes.query.slug) {      
      if(routes.asPath.includes('buscar')) {
        newOfertas = await getApiOffers(`/api/buscar/${routes.query.slug}/?page=${page}`)
      } else {
        newOfertas = await getApiOffers(`/api/buscar/category/?category=${routes.query.slug}&page=${page}`)
      }
    } else {
      newOfertas = await getApiOffers(`/api/ofertas/?page=${page}`)
    }
  
    setOfertas(ofertas.concat(newOfertas));

    setLoading(false);
  }

  async function getApiOffers(url: any) {
    let apiOffers = await axios
        .get(`${url}`)
        .then((res) => res.data)
        .then((res) => res);

    return apiOffers;
  }

  async function nextPage(newPage: any) {
    setLoading(true);
    setPage(newPage);
  }

  return (
    <div className="w-4/5 max-md:w-full px-4 pr-5 py-4 flex flex-col">
      <div className="w-full p-2 mb-2 bg-white rounded-md hidden">Menu</div>
      <ProductBox offers={ofertas} />
      {loading ? <Loading /> : ""}
      {ofertas.length && !loading && !timeLoad ? (
        <InfiniteScroll handle={nextPage} currentPage={page} />
      ) : (
        ""
      )}
    </div>
  );
}
