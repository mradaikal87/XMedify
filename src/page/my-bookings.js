import React from "react";
import SearchContainer from "../components/SearchSection/SearchContainer";
import FAQSection from "../components/FAQSection/FAQSection";
import TwoColumnSection from "../components/TwoColumnSection/TwoColumnSection";
import BookingContainer from "../components/MyBookings/BookingContainer";

const searchData = {
  backgroundColor: "#2AA7FF",
  search: true,
  background:
    " linear-gradient(81deg, #EFF5FE 9.01%, rgba(241, 247, 255, 0.47) 89.11%);",
};

const twoColumnData = {
  title: "Download the",
  highlight: "Medify App",
  description: "Get the link to download the app",
  inputPlaceholder: "Enter phone number",
  buttonText: "Send SMS",
  rightImage: "./rightImage.png",
  storeButtons: [
    { img: "./google_play.png", alt: "Google Play", link: "#" },
    { img: "./apple_store.png", alt: "App Store", link: "#" },
  ],
};

export default function MyBookings() {
  return (
    <div>
      <SearchContainer data={searchData} title="My Bookings" />
      <BookingContainer />
      <TwoColumnSection data={twoColumnData} />
    </div>
  );
}
