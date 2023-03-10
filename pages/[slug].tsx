import React, { useEffect, useState } from 'react'
import UserLayout from '@/components/layouts/UserLayout'
import { useRouter } from 'next/router';
import BlogItem from '@/components/shared/BlogItem';
import Subscribe from '@/components/shared/Subscribe';
import { useAppDispatch, useAppSelector } from '@/hooks/hook';
export default function Post() {
    //***************************
    // define hooks
    //***************************
    const router = useRouter();
    const dispatch = useAppDispatch();
    // *********************
    // define state
    // *********************
    const slug = router.query?.slug;
    const [blog, setBlog] = useState(null);
    const [pagination, setPagination] = useState({
        prev: null,
        next: null
    })
    // *********************
    // store state
    // *********************
    const theme = useAppSelector((state: any) => state?.theme?.theme);
    const blogs = useAppSelector((state: any) => state?.blogs?.data);

    //***************************
    // define useEffect
    //*************************** 
    useEffect(() => {
        if (blogs?.length > 0) {
            blogs?.map((item: any, index: number) => {
                if (item.title == (slug as string)?.split('-').join(' ')) {
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