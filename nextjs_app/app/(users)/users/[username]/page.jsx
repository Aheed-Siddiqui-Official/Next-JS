const SingleProfile = async (props) => {
  const user = await props.params;
  console.log(user);

  return <h1>username = {user.username}</h1>;
};

export default SingleProfile;
