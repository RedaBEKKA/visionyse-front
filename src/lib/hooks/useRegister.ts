import {
  registerSchema,
  type RegisterFormValues,
} from "@/lib/schema/register-schema";
import { registerUser } from "@/lib/actions/register-action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState, useTransition } from "react";
import {
  type FieldErrors,
  useForm,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type useRegisterReturn = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isPending: boolean;
  register: UseFormRegister<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>;
  onSubmit: (data: RegisterFormValues) => void;
  handleSubmit: UseFormHandleSubmit<RegisterFormValues>;
};

export function useRegister(): useRegisterReturn {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(registerUser, {
    error: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      pseudo: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Register user successfully!");
      router.push("/login");
      router.refresh();
    } else if (state.error) {
      let errorMessage: string;

      if (state.error === null) {
        errorMessage = "";
      } else if (typeof state.error === "string") {
        errorMessage = state.error;
      } else {
        try {
          errorMessage = String(state.error);
        } catch {
          errorMessage = "An unexpected error occurred";
        }
      }

      if (errorMessage) {
        toast.error(errorMessage);
      }
    }
  }, [state, router]);

  const onSubmit = (data: RegisterFormValues) => {
    const payload = {
      pseudo: data.pseudo,
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    startTransition(() => {
      formAction(payload);
    });
  };

  return {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isPending,
    register,
    errors,
    onSubmit,
    handleSubmit,
  };
}
