import type {
	ListTaskQueryStringType,
	ListTaskRouteResponseSuccessType,
} from "@task-manager/contracts";

import { api } from "../../lib/axios";

export type ListAllTasksParams = Omit<
	ListTaskQueryStringType,
	"status" | "isArchived"
> & {
	completedStatus?: string;
	pendingStatus?: string;
	isArchived?: boolean;
};

export async function listTasks(
	params: ListAllTasksParams,
): Promise<ListTaskRouteResponseSuccessType> {
	const completed = Boolean(params.completedStatus);
	const pending = Boolean(params.pendingStatus);

	const url = new URL("/tasks", api.defaults.baseURL);
	if (params.title) {
		url.searchParams.append("title", params.title);
	}
	if (params.description) {
		url.searchParams.append("description", params.description);
	}
	if (completed && !pending) {
		url.searchParams.append("status", "completed");
	}
	if (!completed && pending) {
		url.searchParams.append("status", "pending");
	}
	if (params.isArchived) {
		url.searchParams.append("isArchived", "true");
	}

	const response = await api.get<ListTaskRouteResponseSuccessType>(
		url.toString(),
	);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return response.data;
}
