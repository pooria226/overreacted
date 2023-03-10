import React from 'react'
import Link from 'next/link'
import Styles from "@/styles/scss/common/LittleLogo.module.scss";
export default function LittleLogo() {
    return <Link className={Styles.link} href={'/'}>Overreacted</Link>
}