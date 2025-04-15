import { useActionState, useEffect, useState, useTransition } from "react";
import {
  useForm,
  type FieldErrors,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../schema/login-schema";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginUser } from "../actions/login-action";
import { toast } from "sonner";

type useLoginReturn = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isPending: boolean;
  register: UseFormRegister<LoginFormValues>;
  handleSubmit: UseFormHandleSubmit<LoginFormValues>;
  errors: FieldErrors<LoginFormValues>;
  onSubmit: (data: FormData) => void;
};

type FormData = {
  email: string;
  password: string;
};

export function useLogin(): useLoginReturn {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(loginUser, {
    error: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    async function updateAfterLogin() {
      if (state.success) {
        toast.success("Logged in successfully!");
        await getSession();
        router.push("/recordings");
        router.refresh();
      } else if (state.error) {
        toast.error(state.error);
      }
    }

    updateAfterLogin();
  }, [state, router]);

  const onSubmit = (data: FormData) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    startTransition(() => {
      formAction(payload);
    });
  };

  return {
    showPassword,
    setShowPassword,
    isPending,
    register,
    errors,
    onSubmit,
    handleSubmit,
  };
}
