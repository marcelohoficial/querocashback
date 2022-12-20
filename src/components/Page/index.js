import { NextSeo } from "next-seo";

export default function Page({title, description, path, children}) {
  const url = `https://querocashback.com.br${path}`;

  return (
    <>
      <NextSeo 
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  )
}