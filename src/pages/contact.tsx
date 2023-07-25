import Head from "next/head";

import { Header } from "@/components/contact/Header";
import { ContactForm } from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Paul Bogatyr / Contact</title>
        <meta
          name="description"
          content="Crafting Digital Dreams: Fullstack Web Wizardry"
        />
      </Head>

      <div className="justify-self-center w-96">
        <Header />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
