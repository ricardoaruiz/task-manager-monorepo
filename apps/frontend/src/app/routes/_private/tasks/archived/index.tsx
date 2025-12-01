import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import z from "zod/v4";
import { TaskList } from "@/components/task-list";

function ArchiveTasksPage() {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="space-y-5 flex flex-col">
			<TaskList.Form
				formTitle="Archived Tasks"
				id="task-list-form"
				hidedFields={["status"]}
			/>
			<TaskList.Button isLoading={isLoading} form="task-list-form" />
			<TaskList.List
				isArchived
				updateIsLoading={(loading) => setIsLoading(loading)}
			/>
		</div>
	);
}

const searchSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
	completedStatus: z.string().optional(),
	pendingStatus: z.string().optional(),
});

export const Route = createFileRoute("/_private/tasks/archived/")({
	component: ArchiveTasksPage,
	validateSearch: searchSchema.parse,
});
