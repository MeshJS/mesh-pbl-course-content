import {
  ChevronDownIcon,
  Cog8ToothIcon,
  ChevronUpIcon,
  SunIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MeshLogo from "./MeshLogo";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Sidebar() {
  // SSR
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  // dark mode
  const [darkMode, setDarkMode] = useLocalStorage("darkmode", false);

  const router = useRouter();

  const isCourse = router.asPath.startsWith("/course");
  let currentTopicFolder = "";
  if (isCourse) {
    currentTopicFolder = router.asPath.split("/")[3];
  }

  return (
    <aside className="flex h-screen z-20 flex-col flex-shrink-0 w-64 lg:flex bg-gray-50 dark:bg-zinc-800">
      <div className="flex relative flex-col flex-1 pt-0 min-h-0 border-r border-gray-200 dark:border-gray-700">
        <div className="flex overflow-y-auto flex-col flex-1 mb-20">
          <div className="flex-1 px-3 space-y-1 divide-y divide-gray-200 dark:divide-gray-700">
            <Link href="/" className="flex py-2">
              {!isSSR && (
                <>
                  <MeshLogo
                    className="mr-3 h-8"
                    fill={darkMode ? "#ffffff" : "#000000"}
                  />
                </>
              )}
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Mesh PBL
              </span>
            </Link>
            {/* {courseInfo && (
              <ul className="py-2">
                <CourseItems
                  coursePaths={courseInfo.paths}
                  currentTopicFolder={currentTopicFolder}
                />
              </ul>
            )} */}
            {/* <div className="py-2">
              <Link
                href="/"
                rel="noreferrer"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <QuestionMarkCircleIcon className="flex-shrink-0 w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Help</span>
              </Link>
            </div> */}
          </div>
        </div>
        <BottomIcons
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isSSR={isSSR}
        />
      </div>
    </aside>
  );
}

function CourseItems({ coursePaths, currentTopicFolder }) {
  return (
    <>
      {coursePaths.paths.map((module, i) => {
        return (
          <ModuleItems
            module={module}
            coursePaths={coursePaths}
            currentTopicFolder={currentTopicFolder}
            key={i}
          />
        );
      })}
    </>
  );
}

function ModuleItems({ module, coursePaths, currentTopicFolder }) {
  const [toggleShow, setToggleShow] = useState<boolean>(
    module.path == currentTopicFolder
  );

  return (
    <li>
      <button
        type="button"
        className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        onClick={() => setToggleShow(!toggleShow)}
      >
        <span className="flex-1 text-left whitespace-nowrap font-bold">
          {module.title}
        </span>
        {toggleShow ? (
          <ChevronUpIcon className="flex-shrink-0 w-6 h-6 text-gray-500" />
        ) : (
          <ChevronDownIcon className="flex-shrink-0 w-6 h-6 text-gray-500" />
        )}
      </button>
      <ul className={`py-2 space-y-2 ${!toggleShow && "hidden"}`}>
        {module.lessons.map((lesson, i) => {
          return (
            <li key={i}>
              <Link
                href={`/course/${coursePaths.root}/${module.path}/${lesson.path}`}
              >
                <div className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center group dark:text-gray-200 dark:hover:bg-gray-700">
                  <span className="flex-1 ml-4 whitespace-nowrap">
                    {lesson.title}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

function BottomIcons({ darkMode, setDarkMode, isSSR }) {
  function setDarkTheme(bool) {
    if (bool) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(bool);
  }

  function toggle() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    setDarkTheme(darkMode);
  }, [darkMode]);

  return (
    <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex">
      {!isSSR && (
        <button
          type="button"
          className="inline-flex p-2 text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white"
          onClick={() => {
            toggle();
          }}
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
      )}

      {/* <Link href="/account">
        <div className="inline-flex p-2 text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white">
          <Cog8ToothIcon className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/account">
        <div className="inline-flex p-2 text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white">
          <img
            className="w-8 h-8 rounded-full"
            src="/images/samples/neil-sims.png"
            alt="user photo"
          />
        </div>
      </Link> */}
    </div>
  );
}
