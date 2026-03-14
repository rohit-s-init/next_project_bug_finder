'use client'

import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { createIssueSchema } from '@/app/createIssueSchema';
// 2. Import the editor dynamically and turn off SSR
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false
});

interface IssueForm {
  title: string;
  description: string;
}


function NewIssuePage() {

  const { register, control, handleSubmit } = useForm<IssueForm>();
  // console.log(register('title'));
  const router = useRouter();
  const [error, updateError] = useState<string>();

  return (
    <div className='max-w-xl'>

      <form onSubmit={handleSubmit(async (data) => {


        const validation = createIssueSchema.safeParse(data);

        if (!validation.success) {
          // This maps through all errors and returns an array of strings
          const messages = validation.error.format();

          console.log(messages);
          updateError((messages['title']?._errors[0]) || (messages['description']?._errors[0]));
          // Output: ["title is required", "description is required"]
          return;
        }


        try {
          await axios.post("/api/issues", data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          router.push("/issues");
        } catch (error) {
          updateError("unexped error occured.");
        }
      })} className='space-y-3'>
        <TextField.Root placeholder='Title' {...register('title')}>
        </TextField.Root>
        <Controller
          name='description'
          control={control}
          render={({ field }) => {
            console.log("fields are");
            console.log(field);
            return <SimpleMDE placeholder='Description' {...field}></SimpleMDE>
          }}
        >
        </Controller>
        <div className='mb-5'>
          {error && <>
            <Callout.Root>
              <Callout.Icon>

              </Callout.Icon>
              <Callout.Text className='text-red-600'>
                {error}
              </Callout.Text>
            </Callout.Root>
          </>}
        </div>
        <Button>Submit New Isue</Button>
      </form>


    </div>
  )
}

export default NewIssuePage
