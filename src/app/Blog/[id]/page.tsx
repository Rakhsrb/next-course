import Link from "next/link";
import React from "react";

interface DataProps {
  userId: number;
  completed: boolean;
  id: number;
  title: string;
}

async function fetchTodos(id: string): Promise<DataProps> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + id
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Blog({ params }: { params: { id: string } }) {
  const data = await fetchTodos(params.id);

  return (
    <>
      <h1>Blog Detail</h1>
      <div className="flex gap-5 max-w-[1400px]">
        <div>
          <h1>{data.title}</h1>
          <h1>{data.id}</h1>
        </div>
      </div>
    </>
  );
}
