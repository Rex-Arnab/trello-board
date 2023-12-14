import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
}
