import ContactUs from "@/component/contactus";
import Event from "@/component/event";
import Header from "@/component/header";
import Navbar from "@/component/navbar";
import SignUp from "@/component/sign-up";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Event />
      <SignUp />
      <ContactUs />
    </>
  );
}
