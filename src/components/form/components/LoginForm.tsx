"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginFormSchema } from "@/components/form/components/formSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/InputField";
import "@/styles/loginForm.scss";
// 3. Define your form schema.

function LoginForm() {
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='form'>
          <InputField
            form={form.control}
            name='username'
            label='Username'
            placeholder='username'
          />

          <InputField
            form={form.control}
            name='password'
            label='Password'
            placeholder='password'
          />

          <Button className='button' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
