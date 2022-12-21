import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo-config';
import type { AppProps } from 'next/app'
import Analytics from '../components/Analytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
