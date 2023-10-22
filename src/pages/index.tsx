import { ArrowLongRightIcon, CalendarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden relative bg-white ">
      <div className="gap-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 xl:grid xl:grid-cols-12">
        <div className="col-span-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Learn Cardano without limits
          </h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Build your career in Web3 and Blockchain. Learn from anywhere,
            anytime.
          </p>
          <div className="gap-16 items-center sm:flex">
            <div className="mb-8 text-gray-500 sm:mb-0">
              <h2 className="mb-3 text-xl font-semibold text-gray-900 ">
                Mesh Project Based Learning
              </h2>
              <p className="mb-4 font-light">
                Learn how to build applications on the Cardano blockchain, from
                prototpype to production. The best way to learn is by doing -
                this course will guide you to build 6 different applications and
                you will work on a final project.
              </p>
              <Link href="course/01-intro/overview-course">
                <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                  Start Now
                  <ArrowLongRightIcon className="ml-2 -mr-1 w-5 h-5" />
                </span>
              </Link>
              {/* <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Sign Up
                <ArrowLongRightIcon className="ml-2 -mr-1 w-5 h-5" />
              </a> */}
            </div>
            {/* <div className="text-gray-500 dark:text-gray-400">
              <svg
                className="mb-3 w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                25+ top notch speakers
              </h2>
              <p className="mb-4 font-light">
                Here you will find keynote speakers, who all are able to talk
                about Recruiting. Click on the individual keynote speakers and
                read more about them and their keynotes.
              </p>
              <a
                href="#"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-flex items-center"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                View list
              </a>
            </div> */}
          </div>
        </div>
        {/* <div className="hidden absolute top-0 right-0 w-1/3 h-full xl:block">
          <img
            className="object-cover w-full h-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/conference-speaker.jpg"
            alt="Conference speaker"
          />
        </div> */}
      </div>
    </section>
  );
}
