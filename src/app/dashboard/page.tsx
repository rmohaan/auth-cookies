"use client";

import { withAuth } from "../components/withAuth";

const Dashboard = () => {
  return <div>Welcome to the Dashboard Page!</div>;
};

export default withAuth(Dashboard);
