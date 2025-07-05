import ApplyNow from "@/component/applynow";
import ContactUs from "@/component/contactus";
import Event from "@/component/event";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Navbar from "@/component/navbar";
import Subscribe from "@/component/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Event />
      <ApplyNow />
      <Subscribe />
      <ContactUs />
      <Footer />
    </>
  );
}
