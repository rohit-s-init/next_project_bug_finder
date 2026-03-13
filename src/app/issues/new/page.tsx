'use client'

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import {useForm,Controller} from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation';
// 2. Import the editor dynamically and turn off SSR
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { 
  ssr: false 
});

interface IssueForm {
  title: string;
  description: string;
}


function NewIssuePage() {

  const {register,control,handleSubmit} = useForm<IssueForm>();
  // console.log(register('title'));
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit(async (data)=>{
      await axios.post("/api/issues",data,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      router.push("/issues");
    })} className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Title' {...register('title')}>
      </TextField.Root>
      <Controller
        name='description'
        control={control}
        render={({field})=>{
          console.log("fields are");
          console.log(field);
          return <SimpleMDE placeholder='Description' {...field}></SimpleMDE>
        }}
      >
      </Controller>
      <Button>Submit New Isue</Button>
    </form>
  )
}

export default NewIssuePage
