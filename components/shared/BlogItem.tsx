import React from "react";
import { Col, Row } from "antd";
import Styles from "@/styles/scss/common/BlogItem.module.scss";
export default function BlogItem({ blog, theme }: any) {
  return (
    <Row>
      <Col span={24}>
        <div className={theme ? Styles.lightItem : Styles.darkItem}>
          <div>
            <h1>
              {blog?.title}
            </h1>
          </div>
          <div>
            <p className={Styles.time}>
              • ☕️☕️☕️ 14 min read
            </p>
          </div>
          <div>
            <div className={Styles.text}>
              {blog?.body}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
