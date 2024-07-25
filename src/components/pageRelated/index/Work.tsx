import { Heading } from "@/components/Heading";

export const Work = () => {
  return (
    <section className="space-y-4 bg-base-100">
      <Heading text="My Journey in Tech" />
      <p>
        I am a passionate full-stack developer with a love for building dynamic
        and responsive web applications. My expertise includes:
      </p>
      <ul className="mb-4 space-y-2 list-disc list-inside">
        <li>⚛️ React & Next.js</li>
        <li>🐘 PostgreSQL</li>
        <li>🐬 MySQL</li>
        <li>🟢 Node.js & Express</li>
      </ul>
      <p>
        I also have experience with <span className="font-semibold">Rust</span>,{" "}
        <span className="font-semibold">Python</span>,{" "}
        <span className="font-semibold">Svelte</span>,{" "}
        <span className="font-semibold">C++</span>, and{" "}
        <span className="font-semibold">Java</span>.
      </p>
      <p>
        By the way, I don&apos;t believe that the stack is a big deal. It&apos;s
        all about solving problems and delivering value. Whether it&apos;s React
        or Rust, PostgreSQL or MongoDB, the magic happens when code meets
        creativity and collaboration.
      </p>
    </section>
  );
};
