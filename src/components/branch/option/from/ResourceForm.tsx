"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { resourceSchema } from "./formSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "@/components/form/InputField";
import "@/styles/loginForm.scss";

import SelectField from "@/components/form/SelectField";

function LoginForm() {
  function onSubmit(values: z.infer<typeof resourceSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      replicas: 0,
      minCpu: 0,
      maxCpu: 0,
      minMemory: 0,
      maxMemory: 0,
      minReplicas: 0,
      maxReplicas: 0,
      targetPercentage: 0,
      container: 0,
      state: 0,
      target: 0,
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='form'>
          <div>
            <label>Replicas</label>
            <InputField
              form={form.control}
              name='replicas'
              placeholder='replicas'
            />
          </div>

          <div>
            <label>cpu</label>
            <InputField
              form={form.control}
              name='minCpu'
              placeholder='minCpu'
            />
          </div>
          <div>
            <label>cpu</label>
            <InputField
              form={form.control}
              name='maxCpu'
              placeholder='maxCpu'
            />
          </div>
          <div>
            <label>Memory</label>
            <InputField
              form={form.control}
              name='minMemory'
              placeholder='minMemory'
            />
            <InputField
              form={form.control}
              name='maxMemory'
              placeholder='maxMemory'
            />
          </div>

          <div>
            <label>Replicas</label>
            <InputField
              form={form.control}
              name='minReplicas'
              placeholder='minReplicas'
            />
            <InputField
              form={form.control}
              name='maxReplicas'
              placeholder='maxReplicas'
            />
          </div>

          <div>
            <label>targetPercentage</label>
            <InputField
              form={form.control}
              name='targetPercentage'
              placeholder='targetPercentage'
            />
          </div>

          <div>
            <label>Container</label>
            <SelectField
              form={form.control}
              name='container'
              placeholder='container'
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
            />
          </div>

          <div>
            <label>State</label>
            <SelectField
              form={form.control}
              name='state'
              placeholder='state'
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
            />
          </div>

          <div>
            <label>Resource</label>
            <SelectField
              form={form.control}
              name='resource'
              placeholder='resource'
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
            />
          </div>

          <div>
            <label>Target</label>
            <SelectField
              form={form.control}
              name='target'
              placeholder='target'
              options={[{ value: "1" }, { value: "2" }, { value: "3" }]}
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

export default LoginForm;
