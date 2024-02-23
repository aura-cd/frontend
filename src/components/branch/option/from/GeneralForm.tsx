"use client";
import "./style/form.scss";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { generalSchema } from "@/components/branch/option/from/formSchema";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// 3. Define your form schema.

function LoginForm() {
  function onSubmit(values: z.infer<typeof generalSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof generalSchema>>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      pod_name: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={() => form.handleSubmit(onSubmit)} className="form">
        <InputField
          form={form.control}
          name="pod_name"
          placeholder="pod_name"
        />

        <Button className="button" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
