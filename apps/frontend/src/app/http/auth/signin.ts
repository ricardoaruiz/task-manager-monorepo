import type { LoginRouteBodyType } from "@task-manager/contracts";
import { api } from "../../lib/axios";

export type SigninParams = LoginRouteBodyType;

export async function signin({ email, password }: SigninParams): Promise<void> {
	await api.post(
		"/auth/login",
		{
			email,
			password,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	return;
}
