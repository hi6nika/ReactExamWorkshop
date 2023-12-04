import { useState } from "react";

export default function useBuyHook(submitHandler, carID, buyerDetails) {
  const [details, setDetails] = useState(buyerDetails);

  const onBuyHandler = async () => {
    const result = await submitHandler(carID, details);

    return result;
  };

  return { onBuyHandler };
}
