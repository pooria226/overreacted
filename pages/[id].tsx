import React, { useEffect, useState } from 'react'
import UserLayout from '@/components/layouts/UserLayout'
import { useRouter } from 'next/router';
import BlogItem from '@/components/shared/BlogItem';
import Subscribe from '@/components/shared/Subscribe';
import { useSelector } from 'react-redux';
import { api, useGetBlogQuery, useGetBlogsQuery } from '@/store/apiSlice';
import { makeStore, wrapper } from '@/store/store';

export default function Post() {
    //***************************
    // define hooks
    //***************************

    const router = useRouter();

    // *********************
    // define state
    // *********************
    const id: string | string[] | undefined = router.query.id;
    const [pagination, setPagination] = useState({
        prev: null,
        next: null
    });

    // *********************
    // Store State
    // *********************
    const theme = useSelector((state: any) => state.theme);
    const { data: blogs = [] } = useGetBlogsQuery();
    const { data: blog = {}, } = useGetBlogQuery(id);

    //***************************
    // define useEffect
    //*************************** 

    useEffect(() => {
        if (blogs?.length > 0) {
            blogs?.map((item: any, index: number) => {
                if (item.id == id) {
                    setPagination({ next: blogs[index + 1] ? blogs[index + 1] : null, prev: blogs[index - 1] ? blogs[index - 1] : null })
                }
            })
        }
    }, [id, blogs]);

    return <UserLayout inPost={true} title="post">
        <BlogItem theme={theme} blog={blog} />
        <Subscribe pagination={pagination} theme={theme} />
    </UserLayout>
}



export async function getStaticPaths() {
    const store = makeStore();
    const { data } = await store.dispatch(api.endpoints.getBlogs.initiate());

    return {
        paths: data.map((item: any) => `/${item.id}`),
        fallback: true,
    };
}


export const getStaticProps = wrapper.getStaticProps(
    (store) =>
        async ({ params }) => {
            try {
                await Promise.all([store.dispatch(api.endpoints.getBlog.initiate(params?.id))])
                return {
                    props: {
                    },
                    revalidate: 30,
                };
            } catch (error) {
                return {
                    redirect: {
                        destination: "/",
                        permanent: true,
                    },
                };
            }
        }
);