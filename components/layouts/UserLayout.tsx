import React, { useEffect, useState } from "react";
import Head from "next/head";
import UserHeader from "@/components/includes/UserHeader";
import { handleDarkTheme, handleLightTheme } from "@/store/actions/theme";
import { Col, Row } from "antd";
import { http } from "@/utils/http";
import { handleBlogs } from "@/store/actions/blogs";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";

const UserLayout = ({ children, title, inPost = false }: any) => {
  //***************************
  // define hooks
  //***************************
  const router = useAppDispatch();
  const dispatch = useAppDispatch();
  // *********************
  // store state
  // *********************
  const theme = useAppSelector((state: any) => state?.theme?.theme);
  //***************************
  // define state
  //***************************
  const AppName = process.env.NEXT_PUBLIC_APPNAME;
  const [inMobile, setInMobile] = useState(false);
  //***************************
  // define function
  //***************************

  const handleChangeTheme = () => {
    if (theme) {
      dispatch(handleDarkTheme());
    } else {
      dispatch(handleLightTheme());
    }
  };

  const handleGetBlog = () => {
    http().posts((data: any) => {
      dispatch(handleBlogs(data.data))
    },
    )
  }
  // ***************************
  // define useEffect
  // ***************************
  useEffect(() => {
    (async () => await Promise.all([handleGetBlog()]))();
  }, []);
  useEffect(() => {
    if (theme) {
      document.querySelector("body")!.classList.add("light-body");
      document.querySelector("body")!.classList.remove("dark-body");
    } else {
      document.querySelector("body")!.classList.add("dark-body");
      document.querySelector("body")!.classList.remove("light-body");
    }
  }, [theme]);
  return (
    <div>
      <Head>
        <title>
          {AppName} | {title}
        </title>
      </Head>
      <div>
        <Row className="md:px-8 px-2">
          <Col md={{ span: 12 }} span={24} className='mx-auto md:px-10 px-4'>
            <UserHeader
              inPost={inPost}
              handleChangeTheme={handleChangeTheme}
              theme={theme}
            />
            {children}
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default UserLayout;
