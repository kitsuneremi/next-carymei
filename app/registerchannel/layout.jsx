"use client";
import { useContext, useEffect } from "react";
import style from "@/styles/layout/defaultLayout.module.scss";
import classNames from "classnames/bind";
import Sidebar from "@/components/layout/Sidebar";
import Context from "@/GlobalVariableProvider/Context";
import clsx from "clsx";
import MainLayout from "@/layout/mainLayout";
export default function ChannelLayout({ children }) {
  const cx = classNames.bind(style);
  const context = useContext(Context);

  useEffect(() => {
    context.setCollapseSidebar(false);
  }, []);

  return (
    <>
      <MainLayout>
        <div className={cx("box")}>
          <aside
            className={clsx(
              { [cx("sidebar-collapse")]: context.collapseSidebar },
              { [cx("sidebar-expand")]: !context.collapseSidebar }
            )}
          >
            <Sidebar />
          </aside>
          <aside
            className={clsx(
              { [cx("main-content-expand")]: context.collapseSidebar },
              { [cx("main-content-collapse")]: !context.collapseSidebar }
            )}
          >
            {children}
          </aside>
        </div>
      </MainLayout>
    </>
  );
}
