"use client";

import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { setAuthToken } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";
import { getCookie } from "cookies-next";

// interface WithAuthProps {
//   children: ReactNode;
// }

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOC = (props: P) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
      const authToken = getCookie("authToken");
      console.log("authToken", authToken);
      if (authToken) {
        dispatch(setAuthToken(authToken as string));
      } else {
        if (pathname !== "/login") {
          router.push("/login");
        }
      }
    }, [dispatch, router, pathname]);

    if (!token) {
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>;
    }
    return <WrappedComponent {...props} />;
  };

  return HOC;
};
