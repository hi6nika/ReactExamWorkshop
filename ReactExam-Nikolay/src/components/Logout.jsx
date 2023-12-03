import { useEffect } from "react";
import { logout } from "../services/userServices";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigateTo = useNavigate();
  useEffect(() => {
    if (logout()) {
      navigateTo("/");
    }
  }, []);

  return <></>;
}

export default Logout;
