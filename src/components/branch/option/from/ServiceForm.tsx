"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { serviceSchema } from "./formSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/form/InputField";
import "@/styles/loginForm.scss";
import SelectField from "@/components/form/SelectField";
// 3. Define your form schema.

function ServiceForm() {
  function onSubmit(values: z.infer<typeof serviceSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
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
          <div>
            <label>kye</label>
            <InputField form={form.control} name='kye' placeholder='kye' />
          </div>

          <div>
            <label>value</label>
            <InputField form={form.control} name='value' placeholder='value' />
          </div>
          <div>
            <label>config</label>
            <SelectField
              form={form.control}
              name='config'
              placeholder='config'
              options={[{ value: "true" }, { value: "false" }]}
            />
          </div>

          <Button className='button' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default ServiceForm;
