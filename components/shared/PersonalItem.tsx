import React from 'react'
import { Col, Row } from 'antd'
import ImageProvider from '@/providers/ImageProvider'
import Styles from "@/styles/scss/common/PersonalItem.module.scss";
export default function PersonalItem({ theme }: any) {
    return <Row>
        <Col span={24}>
            <div className='flex items-center'>
                <div className={Styles.wrapperImg}>
                    <ImageProvider width={56} height={56} src='/assets/images/jpg/user.jpg' />
                </div>
                <div className='pl-4'>
                    <p className={theme ? Styles.lightText : Styles.darkText}>
                        Personal blog by <a href='https://mobile.twitter.com/dan_abramov'>Dan Abramov</a>.
                        <br />
                        I explain with words and code.
                    </p>
                </div>
            </div>
        </Col>
    </Row >
}