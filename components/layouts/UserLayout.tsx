import React, { useEffect, useState } from "react";
import Head from "next/head";
import UserHeader from "@/components/includes/UserHeader";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/themeSlice";


const UserLayout = ({ children, title, inPost = false }: any) => {

  //***************************
  // Import Hooks
  //***************************

  const dispath = useDispatch()

  //***************************
  // Store State
  //***************************

  const theme = useSelector((state: any) => state.theme);

  //***************************
  // define state
  //***************************

  const AppName = process.env.NEXT_PUBLIC_APPNAME;

  //***************************
  // define function
  //***************************

  const handleChangeTheme = () => {
    if (theme) {
      dispath(setTheme(false))
    } else {
      dispath(setTheme(true))
    }
  };

  const handleGetBlog = () => {

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
