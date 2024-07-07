import { useEffect } from "react";

import CustomNavbar from "@/componnts/Navbar/Navbar";

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header>
        <CustomNavbar />
      </header>

      <main>{children}</main>
    </>
  );
}
export default MainLayout;
