import type { MeResponseSuccessType } from "@task-manager/contracts";
import { api } from "../../lib/axios";

export async function me(): Promise<MeResponseSuccessType> {
	const result = await api.get("/profile/me");

	return result.data;
}
