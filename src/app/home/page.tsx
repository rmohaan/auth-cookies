"use client";

import { withAuth } from "../components/withAuth";

const Home = () => {
  return <div>Welcome to the Home Page!</div>;
};

export default withAuth(Home);
