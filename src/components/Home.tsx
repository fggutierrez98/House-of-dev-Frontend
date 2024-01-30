import LoginForm from "./login/LoginForm";
const image = require("../assets/image/image.png");
export default function Home() {
  return (
    <div className="relative bg-[#FE4236] w-full h-full  flex justify-end">
      <img
        src={image}
        alt="hola"
        className="h-[1040px] w-[1387px] flex justify-end"
      ></img>
      <div className="absolute top-[320px] left-[230px]">
        <LoginForm />
      </div>
    </div>
  );
}
