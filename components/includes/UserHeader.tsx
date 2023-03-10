import React from "react";
import { Row, Col } from "antd";
import ThemeButton from "@/components/shared/ThemeButton";
import Styles from "@/styles/scss/common/UserHeader.module.scss";
import Link from "next/link";
import LittleLogo from "../shared/LittleLogo";

export default function UserHeader({ theme, handleChangeTheme, inPost }: any) {
  return (
    <Row >
      <Col className="flex justify-between items-center  py-10 mx-auto" span={24}>
        <div>
          {inPost ? <LittleLogo /> :
            <Link className={theme ? Styles.lightLink : Styles.darkLink} href={'/'}>
              Overreacted
            </Link>}

        </div>
        <div>
          <ThemeButton theme={theme} handleChangeTheme={handleChangeTheme} />
        </div>
      </Col>
    </Row>
  );
}
