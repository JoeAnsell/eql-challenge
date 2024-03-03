import React, { useContext, useEffect } from "react";
import Router from "next/router";
import { auth } from "../config/firebase";
import nookies from "nookies";

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => {
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };

  hocComponent.getInitialProps = async (context: any) => {
    const cookies = nookies.get(context);
    const loggedIn = cookies.userLoggedIn === "true" ? true : false;
    const userAuth = loggedIn;

    // Are you an authorized user or not?
    if (!userAuth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: "/",
        });
        context.res?.end();
      } else {
        Router.replace("/");
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth, egg };
    }

    return { userAuth, egg };
  };

  return hocComponent;
};
