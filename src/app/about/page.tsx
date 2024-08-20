"use client";
import Link from "next/link";
import { useState } from "react";

interface DataProps {
  id: number;
  title: string;
  description: string;
}

function About() {
  const [data, setData] = useState<DataProps[]>([
    {
      id: 1,
      title: "string 1",
      description: "string 1",
    },
    {
      id: 2,
      title: "string 2",
      description: "string 2",
    },
    {
      id: 32,
      title: "string 32",
      description: "string 32",
    },
    {
      id: 4,
      title: "string 4",
      description: "string 4",
    },
  ]);

  return (
    <>
      <div className="grid grid-cols-3 p-6 gap-6">
        {data.map((item, index) => (
          <div key={index} className="border-2 border-black p-3">
            <h3>{item.id}</h3>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <Link href={"/about/" + item.id}>Details</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
