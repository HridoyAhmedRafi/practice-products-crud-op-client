"use client";

import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

// type Product = {
//   name: string;
//   email: string;
// };

// type AddUserResponse = Product & {
//   id: number | string;
// };

const ADD_USER_ENDPOINT = "http://localhost:5000/products";

const AddUser = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const product = Object.fromEntries(formData.entries());

    const res = await fetch(ADD_USER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),
    });
    const data = await res.json();
    console.log("Response from server ", data);
    if (data.acknowledged === true) {
      redirect("/");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <FieldGroup className="border px-4 py-4 rounded-2xl">
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input
              id="fieldgroup-name"
              name="name"
              placeholder="Jordan Lee"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              name="email"
              type="email"
              placeholder="name@example.com"
              required
            />
            <FieldDescription>
              We&apos;ll send updates to this address.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" variant="outline">
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default AddUser;
