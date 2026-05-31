import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">

      <img
        src="https://ik.imagekit.io/b6iqka2sz/LIFECHANGE.png?updatedAt=1778487247929"
        alt="Logo"
        className="w-50 h-28"
        style={{
          animation: "zoomInOut 1.5s infinite",
        }}
      />

      <style>
        {`
          @keyframes zoomInOut {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }

            50% {
              transform: scale(1.2);
              opacity: 1;
            }

            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}
      </style>

    </div>
  );
}

function PageLoader() {

  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <AppRoutes />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PageLoader />
    </BrowserRouter>
  );
}

export default App;