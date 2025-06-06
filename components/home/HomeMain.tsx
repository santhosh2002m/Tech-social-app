// components/home/HomeMain.tsx
"use client";

import { usePathname } from "next/navigation";
import MakePost from "../common/MakePost";
import NewsFeeds from "../common/NewsFeeds";
import HomeLeft from "../menu/HomeLeft";
import RightSide from "./RightSide";

const HomeMain = () => {
  const pathname = usePathname();

  return (
    <>
      <main className="main-content">
        <div className="container sidebar-toggler">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
              <HomeLeft clss="d-lg-none" />
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
              <MakePost />
              <NewsFeeds clss="p-3 p-sm-5" reaction={pathname} />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0">
              <RightSide />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeMain;
