import ApplyNow from "@/component/applynow";
import ContactUs from "@/component/contactus";
import Event from "@/component/event";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Navbar from "@/component/navbar";
import Subscribe from "@/component/Subscribe";
import Video from "@/component/Video";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Event />
      <Video/>
      <ApplyNow />
      <Subscribe />
      <ContactUs />
      <Footer />
    </>
  );
}
