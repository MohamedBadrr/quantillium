import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export function useApiQuery<T>(
  queryKey: string[],
  queryFn: () => Promise<T>,
  queryOptions?: Omit<UseQueryOptions<T, Error>, "queryKey" | "queryFn">
) {
  return useQuery<T, Error>({
    queryKey,
    queryFn,
    ...queryOptions,
  });
}
