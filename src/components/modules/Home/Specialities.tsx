import { getSpecialities } from "@/services/admin/specialitiesManagement";
import SpecialtyCard from "./SpecialtyCard";

export default async function Specialities() {
  const result = await getSpecialities();
  return <SpecialtyCard specialities={result.data} />;
}
