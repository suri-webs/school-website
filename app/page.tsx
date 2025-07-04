import ContactUs from "@/component/contactus";
import Counter from "@/component/counter";
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
      {/* <Counter /> */}
      <SignUp />
      <ContactUs />
    </>
  );
}
