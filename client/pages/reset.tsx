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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const reset = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    },
  });

  const formik = useFormik({
    initialValues:{
        password:'',
        confirm_pwd:''
    },
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async values => {
        console.log(values)
    }
  })

  return (

    
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-100 py-8 px-16 rounded-lg shadow-xl">
          <div>
            <h1 className="font-mono font-bold text-3xl text-center">RESET</h1>
            <h3 className="text-center pt-2 pb-4">Enter new password.</h3>
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

                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="New Password" {...formik.getFieldProps('password')} />
                      </FormControl>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                      <Input type="password" placeholder="Confirm Password" {...formik.getFieldProps('confirm_pwd')} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="" type="submit">Reset</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reset;
