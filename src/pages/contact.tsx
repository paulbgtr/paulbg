import Head from "next/head";

import { Header } from "@/components/Header";
import { ContactForm } from "@/components/pageRelated/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Paul Bogatyr / Contact</title>
        <meta
          name="description"
          content="Crafting Digital Dreams: Fullstack Web Wizardry"
        />
        <link rel="icon" href="/pfp.jpeg" />
      </Head>

      <div className="w-full md:w-72 justify-self-center">
        <Header title="Contact" description="Contact me via email" />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
