import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfiniteJobRoles = (search) => {
  return useInfiniteQuery({
    queryKey: ["infinite-job-roles", search],

    // queryFn: ({ pageParam = 1 }) =>
    //   jobRolesServices.getInfinite({
    //     page: pageParam,
    //     search: search,
    //   }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnWindowFocus: false,
  });
};
