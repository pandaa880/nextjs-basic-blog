import React from "react";
import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Head from "next/head";
import Link from "next/link";

import { Post as PostType } from "../../types";
import { Article, BlogPostImage } from "@components/Article";

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Post {post.id}</title>
        <meta property="og:title" content={post.title} />
      </Head>
      <Article>
        <h2>{post.title}</h2>
        <BlogPostImage src="/blog-image.jpeg" alt="Blog" />
        <p>{post.body}</p>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </Article>
    </>
  );
}

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: PostType[] = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  const emptyPost: PostType = {
    title: "Post not found",
    body: "",
    id: 0,
    userId: 0,
  };

  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  const post: PostType = await res.json();

  return {
    props: {
      post,
    },
  };
};
