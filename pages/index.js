import clsx from "clsx";
import Link from "next/link";
import {
  MapPin,
  ArrowCircleRight,
  Camera,
  Star,
  ArrowSquareOut,
} from "phosphor-react";
import { motion } from "framer-motion";
import Image from "next/image";

const TIMELINE = [
  {
    title: "Online",
    timelinedata: [
      {
        subtitle: "Twitter",
        status: "Follow",
        link: "https://twitter.com/shovanuk",
      },
      {
        subtitle: "Instagram",
        status: "Follow",
        link: "https://www.instagram.com/shovan/",
      },
      {
        subtitle: "Gitlab",
        status: "Follow",
        link: "https://gitlab.com/shovanuk",
      },
      {
        subtitle: "LinkedIn",
        status: "Follow",
        link: "https://www.linkedin.com/in/shovanuk/",
      },
    ],
  },
  {
    title: "Profile Photo",
    timelinedata: [
      {
        image: "/images/pages/shovan-photo.jpg",
        alttext: "Profile Photo",
      },
    ],
  },
];

const ContentWrapper = ({ children, className, width }) => (
  <div
    style={{ maxWidth: `${width || "100%"}` }}
    className={clsx("w-full px-5 mx-auto relative", className)}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="pb-20 pt-20 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.2 },
        }}
      >
        <ContentWrapper
          width="520px"
          className="mx-auto relative grid grid-cols-1 gap-10 mt-10 md:mt-20"
        >
          <div className="">
            <h2 className="mb-12 text-3xl font-black md:text-4xl dark:text-white">
              <span className="text-gray-400 dark:text-gray-400">
                Hi 👋, I'm{" "}
              </span>
              Shovan Samuel !
            </h2>
            <div className="post-content">
              <p>
                A highly proficient digital strategist more than fourteen years
                of experience in executing digital platforms, digital marketing,
                social media and various digital content programs for global
                clients ranging from startups to well-established corporates.
              </p>
              <p>
                Proven track record of delivering initiatives that improve
                business performance by planning the overall business strategy
                through creative digital innovations. Confidence,
                professionalism and a strong work ethic characterise my
                approach, while my work is distinguished by a crossover of
                creativity and technical expertise.
              </p>
              <p>
                <em>Digital &amp; web experience</em>
              </p>
              <ul>
                <li>
                  CX &amp; Marketing: SEO, PPC, Social, CRO, A/B Testing,
                  Analytics. UX, User Journey etc.
                </li>
                <li>
                  Design: UI, Prototyping, Wireframing, Responsive Design,
                  Branding
                </li>
                <li>
                  Development: HTML, CSS, JS, PHP, MySQL, Python, Architecture,
                  AWS, API’s, Bug fixing etc
                </li>
                <li>
                  CMS: Sitecore, Drupa, Magento, Wordpress, Shopify, Jekyll
                  (Headless CMS), Knowledge in AEM
                </li>
                <li>
                  Product: Ownership, Technical Requirement, Roadmap, MVP,
                  Launches, Release, Code review
                </li>
                <li>
                  Systems: Jira, Confluence, Adobe CC, Woocommerce, Salesforce,
                  Pipeline deals, Zoho, Hubspot, Hotjar, Leadpages, Kissmetrics,
                  Crazy Egg, Sumo, Unbounce, Survey Monkey, Optimizely etc
                </li>
              </ul>
            </div>
          </div>
        </ContentWrapper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.3 },
        }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.4 },
        }}
      >
        <ContentWrapper width="520px" className="">
          <div className="relative ">
            {TIMELINE?.map((item, index) => (
              <div key={item.title + index} className="mb-10 relative ">
                <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12">
                  <h4 className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40">
                    {item.title}
                  </h4>
                  <div className="col-span-10">
                    <div className="flex flex-col space-y-3">
                      {item?.timelinedata?.map((items, timelinedataindex) => {
                        return (
                          <div key={timelinedataindex}>
                            {items?.subtitle && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={items?.link}
                                className="flex items-center space-x-4 group"
                              >
                                <strong className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
                                  {items?.subtitle}
                                </strong>
                                <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800"></span>
                                <span className="flex-none text-tertiary">
                                  {items.status}
                                </span>
                              </a>
                            )}
                            {items?.image && (
                              <div className="max-w-[620px] mx-auto ">
                                <Image
                                  alt={items?.alttext}
                                  src={items?.image}
                                  className="mb-4 rounded-lg"
                                  width={600}
                                  height={300}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </motion.div>
    </div>
  );
}
