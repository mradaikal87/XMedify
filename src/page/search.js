import React from "react";
import SearchContainer from "../components/SearchSection/SearchContainer";
import FAQSection from "../components/FAQSection/FAQSection";
import TwoColumnSection from "../components/TwoColumnSection/TwoColumnSection";

const searchData = {
  backgroundColor: "#2AA7FF",
  search: true,
  background:
    " linear-gradient(81deg, #EFF5FE 9.01%, rgba(241, 247, 255, 0.47) 89.11%);",
};
const faq = {
  subheading: "Get Your Answer",
  heading: "Frequently Asked Questions",
  image: "./faqImage.png",
  textAlign: "center",
  stats: {
    number: "85k",
    text: "Happy Patients",
    smily: "./smily.png",
  },
  heart: "./heart.png",
  faqData: [
    {
      question: "Why choose our medical for your family?",
      answer: "We provide trusted, affordable, and compassionate healthcare.",
    },
    {
      question: "Why we are different from others?",
      answer: "We focus on personalized care with modern facilities.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer: "Our experienced doctors treat patients like family.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer: "You can call our emergency line or book online instantly.",
    },
  ],
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

export default function Search() {
  return (
    <div>
      <SearchContainer data={searchData} state />
      <FAQSection data={faq} />
      <TwoColumnSection data={twoColumnData} />
    </div>
  );
}
