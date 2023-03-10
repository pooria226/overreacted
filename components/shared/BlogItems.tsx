import React from 'react'
import { Col, Row } from 'antd';
import Styles from "@/styles/scss/common/BlogItems.module.scss";
import Link from 'next/link';
export default function BlogItems({ blogs = [], theme }: any) {

    return <Row>
        {blogs?.length > 0 && blogs?.map((item: any, index: number) => {
            return <Col key={index} span={24}>
                <div className={theme ? Styles.lightItem : Styles.darkItem}>
                    <div>
                        <Link href={`/${item?.title.split(' ').join('-')}`}>
                            {item?.title}
                        </Link>
                    </div>
                    <div>
                        <p className={Styles.time}>
                            • ☕️ 2 min read
                        </p>
                    </div>
                    <div>
                        <p className={Styles.text}>
                            Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)
                        </p>
                    </div>
                </div>
            </Col>
        })}
    </Row>;
}