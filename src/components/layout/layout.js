// components/layout/layout.js
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout() {
  const location = useLocation();

  const header = [
    { menu: "Find Doctors", link: "/" },
    { menu: "Hospitals", link: "/" },
    { menu: "Medicines", link: "/" },
    { menu: "Surgeries", link: "/" },
    { menu: "Software for Provider", link: "/" },
    { menu: "Facilities", link: "/" },
    { button: "My Bookings", link: "/" },
  ];

  const links = [
    [
      { label: "About Us", href: "#" },
      { label: "Our Pricing", href: "#" },
      { label: "Our Gallery", href: "#" },
      { label: "Appointment", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    [
      { label: "Orthology", href: "#" },
      { label: "Neurology", href: "#" },
      { label: "Dental Care", href: "#" },
      { label: "Opthalmology", href: "#" },
      { label: "Cardiology", href: "#" },
    ],
  ];

  const socialLinks = {
    facebook: "#",
    twitter: "#",
    youtube: "#",
    pinterest: "#",
  };

  // Example: fixed on /search, relative on others
  const isFixedHeader = location.pathname === "/";
  const isDarkTheme =
    location.pathname === "/my-bookings" || location.pathname === "/search";

  return (
    <>
      <Header
        data={header}
        theme={isDarkTheme ? "light" : "dark"}
        position={isFixedHeader ? "absolute" : "relative"}
      />
      <main>
        <Outlet />
      </main>
      <Footer
        logoText="Medify"
        links={links}
        socialLinks={socialLinks}
        copyright="©2023 Surya Nursing Home.com. All Rights Reserved"
      />
    </>
  );
}
