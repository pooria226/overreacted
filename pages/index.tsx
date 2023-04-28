import React from "react";
import UserLayout from "@/components/layouts/UserLayout";
import PersonalItem from "@/components/shared/PersonalItem";
import BlogItems from "@/components/shared/BlogItems";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { api, useGetBlogsQuery, } from "@/store/apiSlice";
import { wrapper } from "@/store/store";
export default function Posts({ }) {
  //***************************
  // Import hooks
  //***************************

  const router = useRouter();


  //***************************
  // Store State
  //***************************
  const { data: blogs = [] } = useGetBlogsQuery();
  const theme = useSelector((state: any) => state.theme);
  console.log('blogs', blogs);


  return (
    <UserLayout title="Posts">
      <PersonalItem theme={theme} />
      <BlogItems theme={theme} blogs={blogs} />
    </UserLayout>
  );
}


export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ }) => {
      try {
        await Promise.all([store.dispatch(api.endpoints.getBlogs.initiate())])
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