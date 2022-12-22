import React from "react";

const Analytics = () => (
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
            page_path: '${window.location.pathname}',
          });
        `
      }}
    />
  </>
)
// gtag('config', 'G-N8S1RF1C18');
export default Analytics;