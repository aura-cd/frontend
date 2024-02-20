"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { environmentSchema } from "./formSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/form/InputField";
import "@/styles/loginForm.scss";
import SelectField from "@/components/form/selectField";
// 3. Define your form schema.

function EnviromentsForm() {
  function onSubmit(values: z.infer<typeof environmentSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof environmentSchema>>({
    resolver: zodResolver(environmentSchema),
    defaultValues: {
      kye: "",
      value: "",
      config: false,
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='form'>
          <InputField
            form={form.control}
            name='kye'
            label='kye'
            placeholder='kye'
          />
          <InputField
            form={form.control}
            name='value'
            label='value'
            placeholder='value'
          />
          <SelectField
            form={form.control}
            name='config'
            label='config'
            option={["true", "false"]}
            placeholder={""}
          />

          <Button className='button' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default EnviromentsForm;
