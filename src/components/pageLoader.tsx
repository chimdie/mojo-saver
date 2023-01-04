import { CSSProperties, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0 auto",
  borderColor: "blue"
};

export function PageLoader({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <HashLoader
          color="#0085FF"
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export function SuspenseFallback(): JSX.Element {
  // const [loading, setLoading] = useState(false);

  return (
    // <>
    //   {loading ? (
    <HashLoader
      color="#0085FF"
      loading={true}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    //   ) : (
    //     <>{children}</>
    //   )}
    // </>
  );
}
