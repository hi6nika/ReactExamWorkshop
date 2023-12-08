import { useState } from "react";

export default function useBuyHook(submitHandler, carID, buyerDetails) {
  const [details, setDetails] = useState(buyerDetails);

  const onBuyHandler = async () => {
    try {
      const result = await submitHandler(carID, details);

      return result;
    } catch (error) {
      console.log({ error });
    }
  };

  return { onBuyHandler };
}
