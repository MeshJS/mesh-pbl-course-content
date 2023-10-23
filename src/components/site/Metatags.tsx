import Head from "next/head";

const Metatags = ({ title, keywords, description, image }) => {
  if (title) title = title + " - Mesh Project Based Learning";
  else title = "Mesh Project Based Learning";

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <title>{title}</title>

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meshsdk" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@meshsdk" />
      {image && (
        <meta name="twitter:image" content={`https://meshjs.dev${image}`} />
      )}
      {image && <meta name="twitter:image:alt" content={title} />}

      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Mesh Project Based Learning" />
      <meta property="og:description" content={description} />
      {image && (
        <meta property="og:image" content={`https://meshjs.dev${image}`} />
      )}

      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#333333"
      />
      <meta name="msapplication-TileColor" content="#555555" />
      <meta name="theme-color" content="#eeeeee" />
    </Head>
  );
};

Metatags.defaultProps = {
  title: undefined,
  keywords: "web3, developer, tools, cardano, blockchain, sdk",
  description: "Learn to build amazing applications on Cardano.",
  image: "/logo-mesh/mesh.png",
};

export default Metatags;
