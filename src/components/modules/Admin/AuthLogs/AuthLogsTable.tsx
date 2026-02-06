"use client";
import ManagementTable from "@/components/shared/ManagementTable";
import { IActivity } from "@/types/activity.interface";
import { AuthLogsColumns } from "./AuthLogsColumns";
interface ActivityTableProps {
  logs: IActivity[];
}
const AuthLogsTable = ({ logs }: ActivityTableProps) => {
  const handleDelete = () => {
    console.log("deleted");
  };
  return (
    <div>
      <ManagementTable
        data={logs}
        columns={AuthLogsColumns}
        onDelete={handleDelete}
        getRowKey={(log) => log.id}
        emptyMessage="No specialities found"
      />
    </div>
  );
};

export default AuthLogsTable;
