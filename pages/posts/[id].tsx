import React from "react";
import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import { Post as PostType } from "../../types";
import { Article } from "@components/Article";

function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Article>
      <h2>Post Title</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum possimus
        quae optio ad maxime repudiandae, voluptatem sunt voluptas voluptatibus
        voluptate aperiam sint esse voluptates voluptatum minima harum,
        delectus, placeat commodi?
      </p>
    </Article>
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
