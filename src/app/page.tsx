"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>
        Hello world! <Link href={"/about"}>About</Link>
        <Link href={"/Blog"}>Blog</Link>
      </h1>
    </>
  );
}
