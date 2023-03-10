import React, { useEffect } from 'react'
import UserLayout from '@/components/layouts/UserLayout'
import PersonalItem from '@/components/shared/PersonalItem'
import BlogItems from '@/components/shared/BlogItems'
import MarginTop from '@/components/shared/MarginTop'
import { http } from '../utils/http'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { handleBlogs } from "@/store/actions/blogs";
export default function Posts() {
  //***************************
  // define hooks
  //***************************
  const router = useRouter();
  const dispatch = useDispatch();
  // *********************
  // store state
  // *********************
  const blogs = useSelector((state) => state?.blogs?.data);
  const theme = useSelector((state) => state?.theme?.theme);

  return <UserLayout title="Posts">
    <PersonalItem theme={theme} />
    <BlogItems theme={theme} blogs={blogs} />
  </UserLayout>
}