import { PasswordWarningProps } from "../types/types";

const PasswordWarning: React.FC<PasswordWarningProps> = ({
  confirmPassword,
  password,
}) => {
  return (
    <div className="my-2">
      {confirmPassword === password ? (
        <div className="text-green-500">Las contraseñas coinciden !</div>
      ) : (
        <div className="text-red-600 font-bold">
          Las contraseñas no coinciden !!!
        </div>
      )}
    </div>
  );
};

export default PasswordWarning;
