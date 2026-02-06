import AuthLogsManagementHeader from "@/components/modules/Admin/AuthLogs/AuthLogsManagementHeader";
import AuthLogsTable from "@/components/modules/Admin/AuthLogs/AuthLogsTable";
import RefreshButton from "@/components/shared/RefreshButton";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getAuthLogs } from "@/services/admin/authLogs.service";
import { Suspense } from "react";

const AdminAuthLogsPage = async () => {
  const result = await getAuthLogs();
  console.log("logs", result.data);
  return (
    <div className="space-y-6">
      <AuthLogsManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <AuthLogsTable logs={result.data} />
      </Suspense>
    </div>
  );
};

export default AdminAuthLogsPage;
