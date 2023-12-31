"use client"

import { ColumnDef } from "@tanstack/react-table"


export type BillboardCollumn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<BillboardCollumn  >[] = [
  {
    accessorKey: "label",
    header: "label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  
]
