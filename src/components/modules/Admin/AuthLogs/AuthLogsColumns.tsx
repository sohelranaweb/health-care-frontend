import { Column } from "@/components/shared/ManagementTable";
import { IActivity } from "@/types/activity.interface";

export const AuthLogsColumns: Column<IActivity>[] = [
  {
    header: "Action",
    accessor: (log) => log.action,
  },
  {
    header: "Email",
    accessor: (log) => log.user.email,
  },
  {
    header: "Role",
    accessor: (log) => log.user.role,
  },
  {
    header: "Date",
    accessor: (log) => {
      const date = new Date(log.createdAt);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    },
  },
];
