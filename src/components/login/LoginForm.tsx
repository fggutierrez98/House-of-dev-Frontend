import HouseSVG from "../../assets/svg/House";
import OfDevSVG from "../../assets/svg/OfDev";
import VectorSVG from "../../assets/svg/VectorSVG";
import PadlockIcon from "../../assets/svg/icons/PadlockIcon";
import EmailIcon from "../../assets/svg/icons/emailIcon";
import ForgotPasswordLink from "./ForgotPasswordLink";

function LoginForm() {
  const handleLogin = () => {};
  return (
    <div className="w-[397px]">
      <div className="flex flex-col justify-center items-center w-[397px] h-[302px] bg-secondary">
        <div className="w-[229.793px] h-[50.944px] fill-current text-f7f3EE border border-f7f3EE">
          <HouseSVG />
        </div>
        <div className="w-[258.213px] h-[54.111px] border border-f7f3EE">
          <OfDevSVG />
        </div>

        <div className="w-[241px] h-[25px]">Tu nueva vivienda está aquí</div>
        <VectorSVG />
      </div>
      <div className="w-[397px] h-[308px] border border-blue-500">
        <form>
          <div className="w-[337px] h-[49px] rounded-full border border-blue-500 p-4">
            <div className="w-[29px] h-[29px] border border-red-500 rounded-full flex items-center justify-center">
              <EmailIcon />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="placeholder-blue-500"
              ></input>
            </div>
          </div>
          <div className="w-[337px] h-[49px] rounded-full border border-blue-500 p-4">
            <div className="w-[29px] h-[29px] border border-red-500 rounded-full flex items-center justify-center">
              <PadlockIcon />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="placeholder-blue-500 text-blue-300"
              ></input>
            </div>
          </div>

          <div>
            <ForgotPasswordLink />
          </div>

          <div className="w-[337px] h-[49px] rounded-full border border-blue-500 p-4">
            <div>
              <button type="button" onClick={handleLogin}>
                LOG IN
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
