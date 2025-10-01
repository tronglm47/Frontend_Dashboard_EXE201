import Signin from "@/components/Auth/Signin";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { main } from "@/assets/logos";
export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card max-w-6xl w-full">
        <div className="flex flex-wrap items-center">


          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="bg-gradient-to-br from-gold-100 to-gold-200 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">

              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Sign in to your account
              </p>

              <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-heading-3 leading-tight">
                Welcome Back!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6 leading-relaxed">
                Please sign in to your account by filling out the information below to access your dashboard.
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Welcome illustration"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>

            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
