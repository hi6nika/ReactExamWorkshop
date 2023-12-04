 

export default function useDeleteHook(submitHandler, carID) {
  const onDeleteHandler = async () => {
    const result = await submitHandler(carID);

    return result;
  };

  return { onDeleteHandler };
}
