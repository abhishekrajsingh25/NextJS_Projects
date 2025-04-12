import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}>
          <Button className="bg-black text-white cursor-pointer">New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-4"
        >
          <h2 className="">{snippet.title}</h2>
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant={"link"} className="cursor-pointer">
              View
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
