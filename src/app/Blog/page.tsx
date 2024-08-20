import Link from "next/link";
import React from "react";

interface DataProps {
  userId: number;
  completed: boolean;
  id: number;
  title: string;
}

async function fetchTodos(): Promise<DataProps[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Blog() {
  const data = await fetchTodos();

  return (
    <>
      <h1>Blogs</h1>
      <div className="flex gap-5 max-w-[1400px]">
        {data.slice(0, 10).map(({ id, title }: DataProps, index: number) => (
          <div key={index}>
            <h1>{title}</h1>
            <h1>{id}</h1>
            <Link href={`/Blog/${id}`} className="bg-blue-600 text-white">
              Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
