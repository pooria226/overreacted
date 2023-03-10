import React from 'react'
import { Col, Row } from 'antd'
import Link from 'next/link'
import Styles from "@/styles/scss/common/PaginationItem.module.scss";
export default function PaginationItem({ pagination, theme }: any) {
    return <Row className='pb-10 mb-5'>
        <Col md={{ span: 12 }} span={24}>
            <div>
                {pagination.next && <Link className={theme ? Styles.lightLink : Styles.darkLink} href={`/${pagination.next?.title?.split(' ')?.join('-')}`}>
                    ← {pagination.next?.title}
                </Link>}

            </div>
        </Col>
        <Col md={{ span: 12 }} span={24} className="md:text-right md:pt-0 pt-8">
            <div>
                {pagination.prev && <Link className={theme ? Styles.lightLink : Styles.darkLink} href={`/${pagination.prev?.title?.split(' ')?.join('-')}`}>
                    {pagination.prev?.title} →
                </Link>}

            </div>
        </Col>
    </Row >
}