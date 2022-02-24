import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostForm from '../components/PostForm/PostForm'
import Layout from '../components/Layout/Layout'
import PostList from '../components/PostList/PostList'

interface IState {
  jobPost: {
    _id: string,
    coverImage: string,
    companyLogo: string,
    companyName: string,
    title: string,
    content: string,
    contractType: string,
    localization: string,
    publishedAt: string
  }[]
};

export default function Home() {
  const [postList, setPostList] = useState<IState['jobPost']>();

  useEffect(() => {
    axios.get('http://localhost:5000/jobPost')
      .then(response => setPostList(response.data))
  }, [])

  return (
    <div className="Home">
      <h1>Last Jobs uploaded on our site:</h1>
      <div className="postListBox">
        <PostList posts={postList} />
      </div>
    </div>
    
  )
}
