import { useState } from "react";
import { apiKeys } from "@/fakedata/api-keys";
import copy from "@/assets/copy.svg";
import menu from "@/assets/menu.svg";
// import edit from "@/assets/edit.svg";
import trash from "@/assets/trash.svg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { copyText } from "@/lib/copy";
import DeleteDialog from "./DeleteDialog";
import AddEditDialog from "./AddEditDialog";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Fade from "../Effects/Fade";
import { ApiKeysRowProps } from "@/types/ApiKey";
import { useApiQuery } from "@/hooks/useAPIQuery";
import { getAPIKeys } from "@/services/apiKeys/getAPIKeys";
import { useUser } from "@/context/UserContext";

const ApiKeysTable = () => {
    const { user } = useUser();
  const { data, isLoading, isError } = useApiQuery(["apiKeys", user!.id], () =>
    getAPIKeys({ user_id: user!.id })
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log("data", data);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>API KEY NAME</TableHead>
          <TableHead>API KEY</TableHead>
          <TableHead align="center">STATUS</TableHead>
          {/* <TableHead>LAST USED</TableHead> */}
          {/* <TableHead>REQUESTS</TableHead> */}
          {/* <TableHead>AVG RESPONSE TIME</TableHead> */}
          {/* <TableHead>ERRORS</TableHead> */}
          <TableHead>ACTIVITY</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <Fade direction="down" as={TableBody} childAs={TableRow}>
        {data?.map((key, index) => (
          <ApiKeysRow key={index} keyData={key} userId={user!.id} />
        ))}
      </Fade>
    </Table>
  );
};

const ApiKeysRow = ({ keyData, userId }: ApiKeysRowProps) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <TableCell>{keyData.name}</TableCell>
      <TableCell className="text-white/60">
        <div className="flex items-center justify-start gap-x-[8px]">
          <Button
            variant="ghost"
            className="w-fit h-fit p-0 hover:bg-white/5"
            onClick={() => copyText(keyData.apiKey)}
          >
            <img src={copy} alt="Copy" />
          </Button>
          {keyData.apiKey}
        </div>
      </TableCell>
      <TableCell>
        <Badge
          variant={keyData.status === "Active" ? "success" : "destructive"}
        >
          {keyData.status}
        </Badge>
      </TableCell>
      {/* <TableCell className="text-white/60">{keyData.lastUsed}</TableCell> */}
      {/* <TableCell>{keyData.requests}</TableCell> */}
      {/* <TableCell>{keyData.avgResponse}</TableCell> */}
      {/* <TableCell>{keyData.errors}</TableCell> */}
      <TableCell>
        <Switch
          value={keyData.activity}
          checked={keyData.activity === "active" ? true : true}
        />
      </TableCell>
      <TableCell width={50} className="pe-[22px]">
        <DropdownMenu onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`${
                editOpen || deleteOpen || dropdownOpen ? "bg-white/5" : ""
              } w-[24px] h-[24px] p-0 hover:bg-white/5`}
            >
              <img src={menu} alt="Menu" className="w-[16px] h-[16px]" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {/* <DropdownMenuItem onClick={() => setEditOpen(true)}>
              <img src={edit} alt="Edit" />
              <span>Edit</span>
            </DropdownMenuItem> */}
            {apiKeys.length > 1 && (
              <DropdownMenuItem
                variant="destructive"
                onClick={() => setDeleteOpen(true)}
              >
                <img src={trash} alt="Delete" />
                <span>Delete</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <DeleteDialog
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          apiKey={keyData.apiKey}
          userId={userId || ""}
        />
        <AddEditDialog withEdit open={editOpen} onOpenChange={setEditOpen} />
      </TableCell>
    </>
  );
};

export default ApiKeysTable;
