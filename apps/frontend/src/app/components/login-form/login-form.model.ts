import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSignIn } from "@/hooks/useSignIn";
import { FORM_SCHEMA } from "./login-form.schema";
import type { LoginFormData, LoginFormModelProps } from "./login-form.types";

/**
 * Hook that manages the login form model.
 * It handles form state, validation, and submission.
 * @param onSuccess - Callback function to be called on successful sign-in.
 * @returns An object containing the form instance, submission handler, and signing-in state.
 */
export function useLoginFormModel({ onSuccess }: LoginFormModelProps) {
	const { signin, isSigningIn } = useSignIn({
		onSuccess,
		onError: (error) => {
			toast.error(error.message, {
				position: "top-center",
			});
		},
	});

	const form = useForm<LoginFormData>({
		resolver: zodResolver(FORM_SCHEMA),
		defaultValues: {
			email: "rick@email.com",
			password: "123456",
		},
	});

	const onSubmit = (data: LoginFormData) => {
		signin(data);
	};

	return { form, onSubmit, isSigningIn };
}




