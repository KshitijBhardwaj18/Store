"use client";

import { Plus } from "lucide-react";
import { BillboardCollumn, columns } from "./columns";


import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";

import { Heading } from "@/components/ui/heading";

import { ApiList } from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardCollumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between ">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage Billboards for your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />

      <DataTable columns={columns} data={data} searchKey="label" />
      <Heading
        title="API"
        description="API calls for Billboards
        "
      />
      <Separator/>
      <ApiList entityName="billboards" entityIdName="billboarId"/>
    </>
  );
};
