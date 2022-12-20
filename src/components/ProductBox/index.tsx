import utilsFunc from "../../utils/functions";

export default function ProductBox(offers: any) {
  const { offers: products } = offers;

  return (
    <div className="bg-white rounded-md">
      <div className="mx-auto max-w-2xl py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight hidden">
          Produtos Americanas
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: any, index: any) => (
            <div
              key={product.id + index + index * 3}
              className="flex flex-col max-h-98 group relative border shadow-lg p-4 rounded-md cursor-pointer"
            >
              <a href={product.long_url} target="_blank" rel="noreferrer">
                <div
                  className="flex justify-center items-center h-60 max-h-5/6 min-w-full 
                  overflow-hidden rounded-md group-hover:opacity-75 "
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-center"
                  />
                </div>
                <div className="mt-4 p-2 flex justify-between flex-col">
                  <div>
                    <div className="flex hidden">
                      <span className="text-green-700 flex justify-center items-center">
                        <img
                          src="/ligthning.svg"
                          alt="ligthning"
                          width="18px"
                          height="18px"
                        />
                      </span>
                      <span className="text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                          <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                          <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                        </svg>
                      </span>
                      <span className="text-orange-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-sm h-20 text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {utilsFunc.translateTitle(product.title)}
                      </a>
                    </h3>
                    <p
                      className={`mt-2 text-sm text-gray-500 line-through ${
                        product.old_price ? "" : "mb-7"
                      }`}
                    >
                      {product.old_price ? "De: R$ " + product.old_price : ""}
                    </p>
                  </div>
                  <p className="bg-orange-100 flex px-2 rounded-lg text-xl w-fit font-bold text-orange-500">
                    R$ {utilsFunc.translatePrice(product.price)}
                    <span className="pl-2 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 30 30"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
