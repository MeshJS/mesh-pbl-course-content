import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Layout
        // todo: this is to be replaced with how to get lesson title from andamio
        markdocFrontmatter={
          pageProps.markdoc ? pageProps.markdoc.frontmatter : undefined
        }
      >
        <Component {...pageProps} />
      </Layout>
    </MeshProvider>
  );
}
