import { useQuery } from "@tanstack/react-query";
import { type ListAllTasksParams, listTasks } from "../http/tasks/list";

export const TASKS_QUERY_KEY = "tasks";

export function useListTasks({
	title,
	description,
	completedStatus,
	pendingStatus,
	isArchived,
}: ListAllTasksParams = {}) {
	const { data, isLoading, refetch } = useQuery<
		Awaited<ReturnType<typeof listTasks>>
	>({
		queryKey: [
			TASKS_QUERY_KEY,
			{ title, description, completedStatus, pendingStatus, isArchived },
		],
		queryFn: () =>
			listTasks({
				title,
				description,
				completedStatus,
				pendingStatus,
				isArchived,
			}),
	});

	return {
		tasksData: data?.tasks ?? [],
		isTasksLoading: isLoading,
		refetchTasks: refetch,
	};
}
