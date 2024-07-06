import CustomNavbar from "@/componnts/Navbar";

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  return (
    <>
      <header>
        <CustomNavbar/>
      </header>

      <main>{children}</main>
    </>
  );
}
export default MainLayout;
