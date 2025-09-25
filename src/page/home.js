import React from "react";
import BannerSection from "../components/BannerSection/BannerSection";
import Slider from "../components/Slider/Slider";
import Specialisation from "../components/Specialisation/Specialisation";
import MadicalSpec from "../components/MadicalSpec/MadicalSpec";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import BlogSection from "../components/BlogSection/BlogSection";
import Families from "../components/Families/Families";
import TwoColumnSection from "../components/TwoColumnSection/TwoColumnSection";
import FAQSection from "../components/FAQSection/FAQSection";
import Layout from "../components/layout/layout";

const bannerData = {
  pretitle: "Skip the travel! Find Online",
  title: "Medical Centers",
  description:
    "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.",
  bannerImage: "/hero_image.png",
  backgroundColor:
    "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
  button: {
    buttonName: "Find Centers",
    buttonLink: "/",
  },
};

const slidesData = [
  {
    image: "/slide-1.png",
  },
  {
    image: "/slide-2.png",
  },
  {
    image: "/slide-1.png",
  },
];
const madical = [
  {
    image: "./div.med-doctor-style-three.png",
    name: "Dr. Ahmad Khan",
    specialist: "Neurologist",
  },
  {
    image: "./div.med-doctor-style-three-2.png",
    name: "Dr. Lesley Hull",
    specialist: "Medicine",
  },
  {
    image: "./div.med-doctor-style-three-3.png",
    name: "Dr. Heena Sachdeva",
    specialist: "Orthopadics",
  },
];
const blogPosts = [
  {
    image: "demo4-postimg3.png",
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: "Rebecca Lee",
    autherImage: "/doctor.png",
  },
  {
    image: "demo4-postimg3.png",
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: "Rebecca Lee",
    autherImage: "/doctor.png",
  },
  {
    image: "demo4-postimg3.png",
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You're Sick",
    author: "Rebecca Lee",
    autherImage: "/doctor.png",
  },
];
const PatientCaringData = {
  consultation: {
    title: "Free Consultation",
    subtitle: "Consultation with the best",
    icon: "/phoneFrame.png",
  },
  images: [
    {
      src: "/patient-2.png",
      alt: "Patients",
      className: "imgBottom",
    },
    {
      src: "/patient-1.png",
      alt: "Doctors",
      className: "imgTop",
    },
  ],
  subtitle: "HELPING PATIENTS FROM AROUND THE GLOBE!!",
  title: {
    main: "Patient",
    highlight: "Caring",
  },
  description:
    "Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.",
  features: [
    "Stay Updated About Your Health",
    "Check Your Results Online",
    "Manage Your Appointments",
  ],
};
const familyData = {
  title: " CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.",
  description: `  We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.`,
  familyDataCard: [
    {
      id: 1,
      icon: "💙", // replace with SVG/icon
      value: "5000+",
      label: "Happy Patients",
      cardIcon: "icon-1.png",
    },
    {
      id: 2,
      icon: "🏥",
      value: "200+",
      label: "Hospitals",
      cardIcon: "icon-2.png",
    },
    {
      id: 3,
      icon: "🧪",
      value: "1000+",
      label: "Laboratories",
      cardIcon: "icon-3.png",
    },
    {
      id: 4,
      icon: "👨‍⚕️",
      value: "700+",
      label: "Expert Doctors",
      cardIcon: "icon-4.png",
    },
  ],
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
export default function Home() {
  return (
    <>
        <BannerSection data={bannerData} />
        <Slider slides={slidesData} slidetoshow={3.5} container />
        <Specialisation />
        <Slider slides={madical} class="medical" slidetoshow={5} />
        <PatientCaring data={PatientCaringData} />
        <BlogSection data={blogPosts} />
        <Families data={familyData} />
        <FAQSection data={faq} />
        <TwoColumnSection data={twoColumnData} />
    </>
  );
}
