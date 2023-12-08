import { useState } from "react";

export default function useUserHook(key, defaultValue) {
  //auth
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem(key);

    if (data) {
      const raw = JSON.parse(data);
      const output = [raw.user?._id, raw.user?.firstName];
      return output;
    }

    return defaultValue;
  });

  const [userID, setUserID] = useState(() => {
    return user[0];
  });

  return [user, userID];
}
