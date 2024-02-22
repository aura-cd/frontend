"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  resourceSchema
 } from "./formSchema";
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
      replicas:0,
      minCpu:0,
      maxCpu:0,
      minMemory:0,
      maxMemory:0,
      minReplicas:0,
      maxReplicas:0, 
      targetPercentage:0,
      container:0,
      state:0,
      target:0
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='form'>

          <InputField
            form={form.control}
            label='Replicas'
            name = 'replicas'
            placeholder='replicas'
          />
          <InputField
            form={form.control}
            label='MinCpu'
            name = 'minCpu'
            placeholder='minCpu'
          />
          <InputField
            form={form.control}
            label='MaxCpu'
            name = 'maxCpu' 
            placeholder='maxCpu'
        
          />
          <InputField
            form={form.control}
            label='MinMemory'
            name = 'minMemory'
            placeholder='minMemory'

          />
          <InputField
            form={form.control}
            label='MaxMemory'
            name = 'maxMemory'
            placeholder='maxMemory'
          />

          <InputField
            form={form.control}
            label='MinReplicas'
            name = 'minReplicas'
            placeholder='minReplicas'
          />
          <InputField
            form={form.control}
            label='MaxReplicas'
            name = 'maxReplicas'
            placeholder='maxReplicas'
          />
          <InputField
            form={form.control}
            label='TargetPercentage'
            name = 'targetPercentage'
            placeholder='targetPercentage'
          />
          <SelectField

            form={form.control}
            name='container'
            label='Container'
            placeholder='container'
            options={[
              { value: "1" },
              { value: "2" },
              { value: "3" },
            ]}  
          />
          <SelectField
            form={form.control}
            name='state'
            label='State'
            placeholder='state'
            options={[
              { value: "1" },
              { value: "2" },
              { value: "3" },
            ]}
          />
            
          <SelectField
            form={form.control}
            name='resource'
            label='Resource'
            placeholder='resource'
            options={[
              { value: "1" },
              { value: "2" },
              { value: "3" },
            ]}
              />

          <SelectField
            form={form.control}
            name='target'
            label='Target'
            placeholder='target'
            options={[
              { value: "1" },
              { value: "2" },
              { value: "3" },
            ]}
  
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
