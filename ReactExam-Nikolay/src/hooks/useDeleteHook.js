import { useNavigate } from "react-router-dom";

export default function useDeleteHook(submitHandler, carID) {
  const navigateTo = useNavigate();

  const onDeleteHandler = () => {
    const onDelete = async () => {
 
      const result = await submitHandler(carID);
  
      return result;
    };
    onDelete().catch((e) => {
      console.log(e);
      navigateTo("/myCars");
    });
  };

  return { onDeleteHandler };
}
