import { getSession, signOut, useSession } from "next-auth/react";
import { API_URL } from "@/lib/utils/constants";
import { toast } from "sonner";
import type { Session } from "next-auth";
import { useState } from "react";
import {
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profileSchema,
  type ProfileFormValues,
} from "../schema/profile-schema";

type useEditProfileReturn = {
  isEditing: boolean;
  updateSuccess: boolean;
  onSubmit: (data: ProfileFormValues) => Promise<void>;
  handleLogout: () => Promise<void>;
  register: UseFormRegister<ProfileFormValues>;
  errors: FieldErrors<ProfileFormValues>;
  isSubmitting: boolean;
  handleSubmit: UseFormHandleSubmit<ProfileFormValues>;
  reset: UseFormReset<ProfileFormValues>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useEditProfile(session: Session | null): useEditProfileReturn {
  const { update: updateSession } = useSession();
  const user = session?.user;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: user?.fullName || "",
      pseudo: user?.pseudo || "",
      email: user?.email || "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      const payload: Partial<ProfileFormValues> = {
        fullName: data.fullName,
        pseudo: data.pseudo,
        email: data.email,
      };

      if (data.newPassword) {
        payload.newPassword = data.newPassword;
        payload.oldPassword = data.oldPassword;
        payload.confirmPassword = data.confirmPassword;
      }

      const response = await fetch(`${API_URL}/api/user/editProfile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update profile");
      }

      setUpdateSuccess(true);
      toast.success("Profile updated successfully!");
      updateSession({
        user: {
          ...session?.user,
          fullName: data.fullName,
          pseudo: data.pseudo,
          email: data.email,
        },
      });

      await getSession();
      setIsEditing(false);

      reset({
        ...data,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      window.location.reload();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      console.error("failed to update profile:", errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  return {
    isEditing,
    setIsEditing,
    updateSuccess,
    onSubmit,
    handleLogout,
    register,
    errors,
    isSubmitting,
    handleSubmit,
    reset,
  };
}
