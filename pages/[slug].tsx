import React, { useEffect, useState } from 'react'
import UserLayout from '@/components/layouts/UserLayout'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import BlogItem from '@/components/shared/BlogItem';
import Subscribe from '@/components/shared/Subscribe';
export default function post() {
    //***************************
    // define hooks
    //***************************
    const router = useRouter();
    const dispatch = useDispatch();
    // *********************
    // define state
    // *********************
    const { slug } = router.query || "";
    const [blog, setBlog] = useState(null);
    const [pagination, setPagination] = useState({
        prev: null,
        next: null
    })
    // *********************
    // store state
    // *********************
    const theme = useSelector((state) => state?.theme?.theme);
    const blogs = useSelector((state) => state?.blogs?.data);

    //***************************
    // define useEffect
    //*************************** 
    useEffect(() => {
        if (blogs?.length > 0) {
            blogs?.map((item: any, index: number) => {
                if (item.title == slug?.split('-').join(' ')) {
                    setBlog(item);
                    console.log('next blogs[index + 1]', blogs[index + 1]);
                    console.log('prev blogs[index - 1] ', blogs[index - 1]);

                    setPagination({ next: blogs[index + 1] ? blogs[index + 1] : null, prev: blogs[index - 1] ? blogs[index - 1] : null })
                }
            })
        }
    }, [slug, blogs]);
    return <UserLayout inPost={true} title="post">
        <BlogItem theme={theme} blog={blog} />
        <Subscribe pagination={pagination} theme={theme} />
    </UserLayout>
}