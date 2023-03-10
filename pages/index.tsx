import React from 'react'
import UserLayout from '@/components/layouts/UserLayout'
import PersonalItem from '@/components/shared/PersonalItem'
import BlogItems from '@/components/shared/BlogItems'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector, } from '@/hooks/hook'
export default function Posts() {
  //***************************
  // define hooks
  //***************************
  const router = useRouter();
  const dispatch = useAppDispatch();
  // *********************
  // store state
  // *********************
  const blogs = useAppSelector((state: any) => state?.blogs?.data);
  const theme = useAppSelector((state: any) => state?.theme?.theme);

  return <UserLayout title="Posts">
    <PersonalItem theme={theme} />
    <BlogItems theme={theme} blogs={blogs} />
  </UserLayout>
}