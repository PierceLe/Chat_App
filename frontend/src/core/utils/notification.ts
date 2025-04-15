import { notification } from "antd";

//type NotificationType = "success" | "info" | "warning" | "error";

export const notify = {
  success: (message: string, description?: string) =>
    notification.success({
      message,
      description,
    }),

  error: (message: string, description?: string) =>
    notification.error({
      message,
      description,
    }),

  info: (message: string, description?: string) =>
    notification.info({
      message,
      description,
    }),

  warning: (message: string, description?: string) =>
    notification.warning({
      message,
      description,
    }),
};
