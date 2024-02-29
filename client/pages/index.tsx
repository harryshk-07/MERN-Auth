import Image from "next/image";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    // Replace 'defaultUsername' with the desired default username
    const defaultUsername = 'username';

    // Redirect to the default username route
    router.push(`/${defaultUsername}`);
  }, []);

  return null;
  
}
