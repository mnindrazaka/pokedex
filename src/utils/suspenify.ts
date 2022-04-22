type SuspenifyReturnType<T> = { read: () => T };
type PromiseStatus = "pending" | "success" | "error";

export default function suspenify<T>(
  promise: Promise<T>
): SuspenifyReturnType<T> {
  let status: PromiseStatus = "pending";
  let result: T;
  let error: Error;

  const suspender = promise
    .then((res) => {
      status = "success";
      result = res;
    })
    .catch((e) => {
      status = "error";
      error = e;
    });

  return {
    read: () => {
      if (status === "pending") throw suspender;
      if (status === "error") throw error;
      return result;
    },
  };
}
