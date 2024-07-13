import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CompanySelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Company A" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="companyA">Company A</SelectItem>
        <SelectItem value="companyB">Company B</SelectItem>
        <SelectItem value="companyC">Company C</SelectItem>
      </SelectContent>
    </Select>
  )
}