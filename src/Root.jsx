import { Suspense, lazy, useEffect, useState } from "react";
import App from "./App";

const Admin = lazy(() => import("./pages/Admin"));

function getRoute() {
  return window.location.hash.replace(/^#/, "") || "/";
}

export default function Root() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route.startsWith("/admin")) {
    return (
      <Suspense fallback={<div className="min-h-screen" />}>
        <Admin />
      </Suspense>
    );
  }

  return <App />;
}
