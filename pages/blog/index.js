import {BlogList} from 'components'
import {getAllPosts} from "pages/api/blog"
import {NextSeo} from "next-seo";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Blog - Shovan Samuel"
        description=""
        openGraph={{
          site_name: "Blog - Shovan Samuel",
          title: "Blog - Shovan Samuel",
          description:
            "",
        }}
        twitter={{
          handle: "@thelifeofshovan",
          site: "@thelifeofshovan",
          cardType: "summary_large_image",
        }}
      />

      <BlogList data={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external"
  ]);

  return {
    props: { allPosts },
  };
}
