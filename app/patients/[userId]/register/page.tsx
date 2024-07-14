import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const RegisterPage = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex min-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="text-dark-600 justify-items-end xl:text-left">
              &copy; 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={"/assets/images/register-img.png"}
        height={560}
        width={1000}
        alt="patient"
        className=" md:max-w-[350px] h-screen lg:max-w-[550px]"
      />
    </div>
  );
};

export default RegisterPage;
