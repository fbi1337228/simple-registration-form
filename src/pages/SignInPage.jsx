import { SIGN_IN_LINKS } from "../shared/constants";
import LinkCard from "../widgets/LinkCard";
import { Link } from "react-router";
import Logo from "../widgets/Logo";
import SignInForm from "../widgets/SignInForm";

export default function SignInPage() {
  return (
    <div className="mx-[30px]">
      <div className="flex flex-col items-center">
        <Logo />

        <h1 className="w-auto text-2xl font-bold mb-14">
          Sign in your account
        </h1>

        <SignInForm />

        <p className="mb-[30px]">or sign in with</p>
        <div className="w-full sm:w-[400px] flex flex-row justify-between gap-3 mb-[43px]">
          {SIGN_IN_LINKS.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>
        <p>
          Dont have an account?{" "}
          <Link to="/sign-up" className="text-[#00B140] hover:underline">
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
  );
}
