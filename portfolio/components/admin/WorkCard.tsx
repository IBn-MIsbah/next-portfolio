/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Building2 } from "lucide-react";

export function WorkCard({ data }: { data: any }) {
  return (
    <Card className="p-4 flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
          <Building2 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold">{data.role}</h4>
          <p className="text-sm text-muted-foreground">
            {data.orgName} • {data.location}
          </p>
        </div>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
