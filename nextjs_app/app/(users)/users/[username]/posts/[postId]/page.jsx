'use client'

import { use } from "react";

const SingleProfilePost = (props) => {
  const user = use(props.params);
  console.log(user);

  return (
    <>
      <h1>username = {user.username} </h1>
      <h2>postId = {user.postId}</h2>
    </>
  );
};

export default SingleProfilePost;
