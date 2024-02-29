"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useFormik } from "formik";
import toast ,{ Toaster } from "react-hot-toast";
import { passwordValidate } from "@/helper/validate";
import useFetch from "@/hooks/fetch.hook";
import { verifyPassword } from "@/helper/helper";
import { useRouter } from "next/router";
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
import { useAuthStore } from "@/store/store";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const password = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const router = useRouter()

  const {username} = useAuthStore((state:any) => state.auth);
  const [{isLoading, apiData, serverError }]:any = useFetch(`/user/${username}`)

  const formik = useFormik({
    initialValues:{
        password:''
    },
    validate: passwordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async values => {
      let loginPromise = verifyPassword({ username, password : values.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success : <b>Login Successfully...!</b>,
        error : <b>Password Not Match!</b>
      });

      loginPromise.then((res:any) => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        router.push('/profile')
      })
    }
  })

  if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>

  return (
    <div className="container mx-auto">
        <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-100 py-8 px-16 rounded-lg shadow-xl">
          <div>
            <h1 className="font-mono font-bold text-3xl text-center uppercase">hello {apiData?.firstName || apiData?.username}</h1>
            <h3 className="text-center pt-2 pb-4">Explore by connecting with us...</h3>
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
                      <Avatar className="mx-auto w-40 h-40">
                        <AvatarImage src={apiData?.profile || "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} />
                        {/* <AvatarFallback>CN</AvatarFallback> */}
                      </Avatar>

                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter Password" {...formik.getFieldProps('password')} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="" type="submit">Sign In</Button>
                <h3 className="text-center text-base">Forgot Password? <Link href="/recovery" className="text-red-500">Recover Now</Link></h3>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default password;
