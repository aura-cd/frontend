"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { serviceSchema } from "./formSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import "./style/form.scss";

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
          <div className='form-container'>
            <div>
              <label className='form-label'>kye</label>
              <InputField form={form.control} name='kye' placeholder='kye' />
            </div>

            <div>
              <label className='form-label'>value</label>
              <InputField
                form={form.control}
                name='value'
                placeholder='value'
              />
            </div>
            <div>
              <label className='form-label'>config</label>
              <SelectField
                form={form.control}
                name='config'
                placeholder='config'
                options={[{ value: "true" }, { value: "false" }]}
              />
            </div>
            <div className='button-area'>
              <div>
                <Button className='button' type='submit' variant={"secondary"}>
                  Cansell
                </Button>
              </div>
              <div>
                <Button className='submit-button' type='submit'>
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

export default ServiceForm;
