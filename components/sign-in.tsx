"use client";
import { Button, Input } from "@heroui/react";
import { Form } from "@heroui/react";
import { signIn } from "next-auth/react";
import React from "react";

export function SignIn() {
  const credentialsAction = async (formData: FormData) => {
    // Convertir le FormData en objet
    const credentials = Object.fromEntries(formData.entries());

    await signIn("credentials", credentials); // Passer l'objet à signIn
  };

  return (
    <Form
      action={credentialsAction}
      className="w-full max-w-xs flex flex-col gap-4"
      validationBehavior="native"
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Username"
        labelPlacement="outside"
        name="name"
        placeholder="Enter your username"
        type="text"
      />
      <Input
        isRequired
        errorMessage="Please enter a valid password"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
