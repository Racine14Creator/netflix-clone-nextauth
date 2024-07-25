import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../public/google.svg";

import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <>
      <form action=''>
        <h1 className='text-3xl font-semibold text-white'>Sign In</h1>
        <div className='space-y-4 mt-5'>
          <Input
            type='email'
            name='email'
            placeholder='Email@example.com'
            className='bg-[#333] placeholder:text-gray-400 w-full inline-block'
          />
          <Button variant={"destructive"} className='w-full bg-[#e50914]'>
            Sign Up
          </Button>
        </div>
      </form>

      <div className=''>
        <p className='text-gray-500 text-sm mt-2'>
          Already have an account?{" "}
          <Link className='text-white/80 hover:underline' href={"/login"}>
            Log In Now!
          </Link>
        </p>
      </div>

      <div className='flex w-full justify-center mt-6 items-center gap-x-3'>
        <Button variant={"outline"} size={"icon"}>
          <GithubIcon className='w-5 h-5' />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Image src={GoogleIcon} alt='GoogleIcon' className='w-7 h-7' />
        </Button>
      </div>
    </>
  );
}
