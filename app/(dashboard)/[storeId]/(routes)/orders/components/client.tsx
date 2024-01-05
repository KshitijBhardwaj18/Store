"use client";


import { OrderCollumn, columns } from "./columns";


import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";

import { Heading } from "@/components/ui/heading";



interface OrderClientProps {
  data: OrderCollumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage Orders for your store"
      />

      <Separator />

      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};
