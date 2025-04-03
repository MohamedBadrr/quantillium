import { UseMutationOptions, useMutation } from "@tanstack/react-query";

type ApiMutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, Error, TVariables>,
  "mutationFn"
> & {
  mutationFn: (variables: TVariables) => Promise<TData>;
};

export function useApiMutation<TData = unknown, TVariables = unknown>({
  mutationFn,
  ...mutationOptions
}: ApiMutationOptions<TData, TVariables>) {
  return useMutation({
    ...mutationOptions,
    mutationFn: mutationFn,
  });
}
