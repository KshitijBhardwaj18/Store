"use client"

import axios from "axios";

import { toast } from "react-hot-toast";
import { BillboardCollumn } from "./columns";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Copy, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { useRouter,useParams } from "next/navigation";
import { useState } from "react";
import { AlertModal } from "@/components/modals/alert-modals";


interface cellActionProps{
    data: BillboardCollumn;

};

export const CellAction: React.FC<cellActionProps> = ({
    data
}) => {

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const params = useParams();

    const onCopy = (id: String) => {
        navigator.clipboard.writeText(id);
        toast.success("Billboard id copied to the clipboard");
    }

    const onDelete = async () => {
        try {
          setLoading(true);
          await axios.delete(`/api/${params.storeId}/billboards/${data.id}`);
          router.refresh();
          router.push(`/${params.storeId}/billboards`);
          
          toast.success("Stores deleted");
        } catch (error) {
          toast.error("Make sure you removed all the products and categories");
        } finally {
          setLoading(false);
          setOpen(false);
        }
      };

    return(
        <>
        <AlertModal isOpen={open} onClose={() => setOpen(false)}
        onConfirm={onDelete} loading={loading} >
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => onCopy(data.id)}> 
                    <Copy className="mr-2 h-4 w-4"/>
                    Copy Id
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(`/${params.storeId}/billboards/${data.id}`)}>
                    <Edit className="mr-2 h-4 w-4"/>
                    Update
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                    <Trash className="mr-2 h-4 w-4"/>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </AlertModal>
        </>

    );
};