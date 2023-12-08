import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

import AuthContext from "../contexts/authContext";

function Logout() {
  const { logoutEventHandler } = useContext(AuthContext);

  const { token } = useParams();

  useEffect(() => {
    const delSession = async () => {
      await logoutEventHandler(token);
    };

    delSession().catch((e) => {
      console.log(e);
    });
  }, []);

  return;
}

export default Logout;
