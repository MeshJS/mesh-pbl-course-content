import Metatags from "../site/Metatags";
import Sidebar from "../site/Sidebar";
import Login from "../ui/Login";
import { useWallet } from "@meshsdk/react";
import { useRouter } from "next/router";
import LayoutCourseMd from "./courseMd";

export default function Layout({
  children,
  markdocFrontmatter,
}: {
  children: React.ReactNode;
  markdocFrontmatter: undefined | { title: string; description: string };
}) {
  const router = useRouter();

  // const [courseInfo, setCourseInfo] = useState<undefined | CourseMetadata>(
  //   undefined
  // );

  const isCourse = router.asPath.startsWith("/course");

  // if (isCourse) {
  //   const courseFolder = router.asPath.split("/")[2];

  //   let courseData = require(`../../pages/course/${courseFolder}/_metadata.json`);
  //   if (
  //     courseData &&
  //     (courseInfo === undefined || courseInfo.title !== courseData.title)
  //   ) {
  //     setCourseInfo(courseData);
  //   }
  // }

  // wallet

  const { connected } = useWallet();

  return (
    <>
      {markdocFrontmatter ? (
        <Metatags
          title={markdocFrontmatter.title}
          description={markdocFrontmatter.description}
        />
      ) : (
        <Metatags />
      )}

      {isCourse && (
        <div className="bg-white dark:bg-zinc-900">
          {!connected ? (
            <Login />
          ) : (
            <div className="flex">
              <Sidebar />
              {isCourse ? (
                <div className="p-4 h-screen w-full overflow-y-auto">
                  <LayoutCourseMd>{children}</LayoutCourseMd>
                </div>
              ) : (
                <>{children}</>
              )}
            </div>
          )}
        </div>
      )}

      {!isCourse && <>{children}</>}
    </>
  );
}
