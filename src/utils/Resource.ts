export type Resource<Result> = { read: () => Result };

type ResourceStatus = "pending" | "success" | "error";

export function createResource<Result>(
  promise: Promise<Result>
): Resource<Result> {
  let status: ResourceStatus = "pending";
  let result: Result;
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
