import React from "react";
import { useRouter } from "next/router";

export default function Analytics () {
  const routes = useRouter();

  return (
    <>
      <script 
        async 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
              page_path: '${routes.asPath}',
            });
          `
        }}
      />
    </>
  )
}
// gtag('config', 'G-N8S1RF1C18');