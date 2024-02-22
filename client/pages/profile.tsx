"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import image1 from "../public/assets/download.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useFormik } from "formik";
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster";
import convertToBase64 from "@/helper/convert";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const profile = () => {

    const [file, setFile] = useState<any>()


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const formik = useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        address:''
    },
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ''})
        console.log(values)
    }
  })

  const onUpload = async (e:any) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-100 py-4 px-16 rounded-lg shadow-xl">
          <div>
            <h1 className="font-mono font-bold text-3xl text-center">REGISTER</h1>
            <h3 className="text-center pt-2 pb-4">You can update the details.</h3>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                        <label htmlFor="profile">
                      <Avatar className="mx-auto w-16 h-16">
                        <AvatarImage src={file || "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} />
                      </Avatar>
                        </label>
                      <FormControl>
                        <Input className="hidden" onChange={onUpload} type="file" id="profile" name="profile" />
                      </FormControl>
                      <div className="name flex gap-4">

                      {/* <FormLabel>Email</FormLabel> */}
                      <FormControl>
                        <Input type="text" placeholder="Enter First Name" {...formik.getFieldProps('firstName')} />
                      </FormControl>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        <Input type="text" placeholder="Enter Last Name" {...formik.getFieldProps('lastName')} />
                      </FormControl>
                      </div>
                      <div className="name flex gap-4">

                      {/* <FormLabel>Email</FormLabel> */}
                      <FormControl>
                        <Input type="text" placeholder="Enter Mobile No." {...formik.getFieldProps('mobile')} />
                      </FormControl>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        <Input type="text" placeholder="Enter Email" {...formik.getFieldProps('email')} />
                      </FormControl>
                      </div>
                      {/* <FormLabel>Password</FormLabel> */}
                      <FormControl>
                        <Input type="text" placeholder="Enter Address" {...formik.getFieldProps('address')} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">Update</Button>
                <h3 className="text-center text-base">Come back later? <Link href="/login" className="text-red-500 font-bold">Logout</Link></h3>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
