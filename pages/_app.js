import { ThemeProvider } from "next-themes";
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://shovan.uk` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <>      
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />

          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </Head>
        <DefaultSeo
          title="Shovan Samuel!"
          description=""
          canonical={canonicalUrl}
          openGraph={{
            site_name: "Hi, I'm Shovan Samuel!",
            title: "Hi, I'm Shovan Samuel!",
            description: "",
            images: [
              {
                url: "/touch-icons/Shovan.jpeg",
                width: 800,
                height: 600,
                alt: "Kizie for Twitter",
              },
            ],
          }}
          twitter={{
            handle: "@thelifeofshovan",
            site: "@thelifeofshovan",
            cardType: "summary_large_image",
          }}
          additionalLinkTags={[
            {
              rel: "icon",
              href: "/touch-icons/Apple-touch-icon.png",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/Apple-touch-icon.png",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/Apple-touch-icon.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/Apple-touch-icon.png",
              sizes: "144x144",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/Apple-touch-icon.png",
              sizes: "60x60",
            },
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/Apple-touch-icon.png",
              sizes: "114x114",
            },
          ]}
        />

        {/* {process.env.NODE_ENV == "production" ? (
          // Analytics Script
          <Script
            src="https://api.pirsch.io/pirsch.js"
            id="pirschjs"
            data-code={process.env.NEXT_PUBLIC_PIRSCH_KEY}
            strategy="afterInteractive"
          />
        ) : (
          ""
        )} */}

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
