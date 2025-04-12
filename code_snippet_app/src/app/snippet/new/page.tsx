"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";
import * as actions from "@/actions";

const CreateSnippetPage = () => {
  const [formStateData, create] = useActionState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={create}>
      <div>
        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          className="my-4 border-gray-400"
        />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea name="code" id="code" className="my-4 border-gray-400" />
      </div>
      {formStateData.message && (
        <div className="p-2 bg-red-300 border-2 border-red-600">
          {formStateData.message}
        </div>
      )}
      <Button type="submit" className="bg-black text-white my-4 cursor-pointer">
        New
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
