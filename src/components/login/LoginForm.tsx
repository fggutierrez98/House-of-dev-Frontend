import HouseSVG from "../../assets/svg/House";
import OfDevSVG from "../../assets/svg/OfDev";
import VectorSVG from "../../assets/svg/VectorSVG";
import PadlockIcon from "../../assets/svg/icons/PadlockIcon";
import EmailIcon from "../../assets/svg/icons/emailIcon";
import ForgotPasswordLink from "./ForgotPasswordLink";

function LoginForm() {
  const handleLogin = () => {};
  return (
    <div className="w-[397px] shadow-lg bg-white">
      <div className="flex flex-col justify-center items-center w-[397px] h-[302px] bg-secondary space-y-4">
        <div className="flex justify-end w-[229.793px] h-[50.944px] fill-current text-f7f3EE">
          <HouseSVG />
        </div>

        <div className="w-[258.213px] h-[54.111px]">
          <OfDevSVG />
        </div>
        <div className="relative w-[258.213px] h-[54.111px]">
          <div className="absolute top-1 left-1 flex items-center justify-center text-white w-full h-full">
            Tu nueva vivienda está aquí
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <VectorSVG />
          </div>
        </div>
      </div>
      <div className="w-[397px] h-[308px] flex items-center justify-center">
        <form className="space-y-4">
          <div className="flex items-center w-[337px] h-[49px] rounded-full border border-blue-500 p-4">
            <div className="w-[29px] h-[29px] rounded-full flex items-center justify-center mr-4 border border-red-500">
              <EmailIcon />
            </div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="w-[250px] h-[17px] placeholder-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center w-[337px] h-[49px] rounded-full border border-blue-500 p-4">
            <div className="w-[29px] h-[29px] rounded-full flex items-center justify-center mr-4 border border-red-500">
              <PadlockIcon />
            </div>

            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              className="w-[250px] h-[17px] placeholder-blue-500 focus:outline-none"
            ></input>
          </div>
          <div className="">
            <ForgotPasswordLink />
          </div>
          <div className="w-[111px] h-[47px] flex justify-center items-center rounded-full border-2 border-blue-500 p-4 ml-auto shadow-lg">
            <button
              className="text-blue-500"
              type="button"
              onClick={handleLogin}
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
