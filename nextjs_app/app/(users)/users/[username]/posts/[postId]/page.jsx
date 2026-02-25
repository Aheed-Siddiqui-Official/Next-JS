const SingleProfilePost = async (props) => {
  const user = await props.params;
  console.log(user);

  return (
    <>
      <h1>username = {user.username} </h1>
      <h2>postId = {user.postId}</h2>
    </>
  );
};

export default SingleProfilePost;
