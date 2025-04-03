import AddEditDialog from "@/components/ApiKeys/AddEditDialog";
import ApiKeysTable from "@/components/ApiKeys/KeysTable";
import { BlurIn } from "@/components/Effects/Blur";
import Fade from "@/components/Effects/Fade";
import Header from "@/components/Common/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const APiKeys = () => {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <Fade direction="down" className="flex flex-col w-full mx-auto">
      <BlurIn>
        {/* Header */}
        <Header title="API Keys" subtitle="Updated: Today, 01:48 AM">
          <div className="flex items-center justify-end gap-[8px] max-md:flex-wrap-reverse max-md:w-full">
            <Button
              className="text-[16px] h-[52px] px-[24px] py-[15.5px] font-medium max-md:w-full border"
              variant="ghost"
              onClick={() => setAddOpen(true)}
            >
              New API Key
            </Button>
          </div>
        </Header>

        {/* Table */}
        <div className="flex items-start mt-[32px] flex-grow">
          <ApiKeysTable />
        </div>

        <AddEditDialog open={addOpen} onOpenChange={setAddOpen} />
      </BlurIn>
    </Fade>
  );
};

export default APiKeys;
