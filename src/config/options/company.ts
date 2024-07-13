import { IBaseOption } from "@/types/elements/select";
import { values } from "lodash";

export const companyRecords: Record<string, IBaseOption> = {
  companyA: {
    label: "Company A",
    value: "companyA",
  },
  companyB: {
    label: "Company B",
    value: "companyB",
  },
  companyC: {
    label: "Company C",
    value: "companyC",
  },
  companyD: {
    label: "Company D",
    value: "companyD",
  },
};

export const companyOptions: IBaseOption[] = values(companyRecords);
