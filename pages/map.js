import Head from "next/head";
import {NextSeo} from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Travel Map – Rishi Mohan"
        description="I've created this page to visualize all the locations I've been so far."
        openGraph={{
          site_name: "Travel Map – Rishi Mohan",
          title: "Travel Map – Rishi Mohan",
          description:
            "I've created this page to visualize all the locations I've been so far.",
        }}
        twitter={{
          handle: "@thelifeofrishi",
          site: "@thelifeofrishi",
          cardType: "summary_large_image",
        }}
      />

      <div className="flex items-start justify-center w-full mb-10 overflow-hidden max-h-[60vh] md:max-h-[50vh]">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1UEIuvvrqKIxnZBL2QBudFSieAzoDJ2s&ehbc=2E312F"
          width="100%"
          height="600"
        ></iframe>
      </div>

      <article className="w-full px-5 pb-10 overflow-y-auto max-w-[620px] mx-auto">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">Travel Bug!</h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            I didnt think I will enjoy traveling, untill I started traveling. I am fortunated to see historic places, beautiful people and amazing food. This page is a visulisation of the places I have visited.  
          </p>
          <p>
            While I travel, I share my reviews on Google Maps, which over time has accumulated me to become a Google Local Guide. You can follow me on {" "}
            <a href="https://www.google.com/maps/contrib/107656623235043482765/photos/@24.548003,-36.0479072,3z/data=!3m1!4b1!4m3!8m2!3m1!1e2" target="_blank">Google Map</a> or{" "}
            <a href="https://instagram.com/shovan" target="_blank">Instagram</a> below is a small snapshat of Google Local Guide Achivement. 
          </p>
          <p>
           <a target="_blank" href="https://www.google.com/maps/contrib/107656623235043482765/photos/@24.548003,-36.0479072,3z/data=!3m1!4b1!4m3!8m2!3m1!1e2"><img src="/images/pages/shovan-travel-card.png" title="Shovan's Travel Card" alt="Google Map Review Influencer in UK"></img></a>
          </p>
        </div>
      </article>
    </>
  );
}
