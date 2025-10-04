import { SIGN_IN_LINKS } from "../shared/constants";
import LinkCard from "../widgets/LinkCard";
import { Link } from "react-router";
import Logo from "../widgets/Logo";
import SignUpForm from "../widgets/SignUpForm";

export default function SignInPage() {
  return (
    <div className="mx-[30px]">
      <div className="flex flex-col items-center">
        <Logo size="little" />

        <h1 className="w-auto 
        text-2xl 
        font-bold 
        mb-[41px]">
          Create your account
        </h1>

        <SignUpForm />

        <p className="mb-[23px]">or sign up with</p>

        <div className="w-full sm:w-[400px] 
        flex flex-row justify-between gap-3 
        mb-[26px]">
          {SIGN_IN_LINKS.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>

        <p className="mb-[85px]">
          Dont have an account?{" "}
          <Link to="/" className="text-[#00B140] hover:underline cursor-pointer">
            SIGN IN
          </Link>
        </p>
      </div>
    </div>
  );
}
