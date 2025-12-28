/* eslint-disable react/prop-types */
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      {<Navbar />}
      <app>{children}</app>
      {<Footer />}
    </>
  );
};
