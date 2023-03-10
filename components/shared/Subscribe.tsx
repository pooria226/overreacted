import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import Styles from "@/styles/scss/common/Subscribe.module.scss";
import EmailIcon from '@/public/assets/images/svg/email.svg'
import InputItem from './InputItem';
import PersonalItem from './PersonalItem';
import LittleLogo from './LittleLogo';
import PaginationItem from './PaginationItem';
export default function Subscribe({ theme, pagination }: any) {
    return <Row style={{ marginTop: 90 }}>
        <Col span={24}>
            <Row className={theme ? Styles.lightWrapper : Styles.darkWrapper}>
                <Col className={theme ? Styles.lightLeftWrapper : Styles.darkLeftWrapper} md={{ span: 12 }} span={24}>
                    <div>
                        <div>
                            <h1>
                                Subscribe to the <br /> Newsletter
                            </h1>
                        </div>
                        <div>
                            <p>
                                Subscribe to get my latest <br /> content by email.
                            </p>
                        </div>
                        <div>
                            <EmailIcon />
                        </div>
                    </div>
                </Col>
                <Col className={theme ? Styles.lightRightWrapper : Styles.darkRightWrapper} md={{ span: 12 }} span={24}>
                    <div>
                        <Form onFinish={() => { }}>
                            <InputItem type="text" placeholder='Your first name' theme={theme} />
                            <InputItem type='email' placeholder='Your email address' theme={theme} />
                            <Button htmlType='submit'>
                                Subscribe
                            </Button>
                            <div className='pt-4'>
                                <p>
                                    I won’t send you spam.
                                </p>
                                <p>
                                    Unsubscribe at any time.
                                </p>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col span={24}>
            <div className='pt-6'>
                <LittleLogo />
            </div>
            <div style={{ marginBottom: "3.8rem" }} className='pt-6'>
                <PersonalItem theme={theme} />
            </div>
        </Col>
        <Col span={24}>
            <PaginationItem theme={theme} pagination={pagination} />
        </Col>
    </Row>
}