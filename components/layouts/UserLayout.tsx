import React, { useEffect, useState } from "react";
import Head from "next/head";
import UserHeader from "@/components/includes/UserHeader";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { handleDarkTheme, handleLightTheme } from "@/store/actions/theme";
import { Col, Row } from "antd";
import { http } from "@/utils/http";
import { handleBlogs } from "@/store/actions/blogs";

const UserLayout = ({ children, title, inPost = false }: any) => {
  //***************************
  // define hooks
  //***************************
  const router = useRouter();
  const dispatch = useDispatch();
  // *********************
  // store state
  // *********************
  const sidebar = useSelector((state) => state?.sidebar?.sidebar);
  const theme = useSelector((state) => state?.theme?.theme);
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
    http().posts((data) => {
      dispatch(handleBlogs(data.data))
    }, (err) => { console.log(err) }
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
      document.querySelector("body").classList.add("light-body");
      document.querySelector("body").classList.remove("dark-body");
    } else {
      document.querySelector("body").classList.add("dark-body");
      document.querySelector("body").classList.remove("light-body");
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
