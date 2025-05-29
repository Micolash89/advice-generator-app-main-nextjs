import React from "react";

export default function Footer() {
  return (
    <div className="w-full  text-center flex justify-center text-xs">
      Challenge by{" "}
      <Link
        name="Frontend Mentor"
        url="https://www.frontendmentor.io?ref=challenge"
      />.
      Coded by{" "}
      <Link name="Espindola Javier" url="https://github.com/Micolash89" />.
    </div>
  );
}

export function Link({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      className="hover:underline hover:text-neutral-400"
    >
      {name}
    </a>
  );
}
