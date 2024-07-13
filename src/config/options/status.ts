import { EStatus } from "@/types/common";
import { IBaseOption } from "@/types/elements/select";
import { values } from "lodash";

export const statusRecords: Record<string, IBaseOption> = {
  [EStatus.pending]: {
    label: "Pending",
    value: EStatus.pending,
  },
  [EStatus.active]: {
    label: "Active",
    value: EStatus.active,
  },
  [EStatus.complete]: {
    label: "Complete",
    value: EStatus.complete,
  },
};

export const statusOptions: IBaseOption[] = values(statusRecords);
