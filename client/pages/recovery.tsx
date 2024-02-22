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

const recovery = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const formik = useFormik({
    initialValues:{
        password:''
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
            <h1 className="text-center font-mono font-bold text-3xl">RECOVERY</h1>
            <h3 className="text-center pt-2 pb-4">Enter OTP to recover password.</h3>
          </div>
          <div>
            <Form {...form}>
              <form
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter OTP" />
                      </FormControl>
                      <FormDescription>
                Enter 6 digit OTP sent to your email address.
              </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="" type="submit">Recover</Button>
                <h3 className="text-center text-base">Can't get OTP? <button className="text-red-500">Resend</button></h3>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default recovery;
