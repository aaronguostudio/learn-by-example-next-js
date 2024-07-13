'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IBaseOption } from '@/types/elements/select'

export interface ISelectBaseProps {
  value?: string
  onValueChange?: (value: string) => void
  options: IBaseOption[]
}

export default function SelectBase({
  value,
  options,
  onValueChange,
}: Readonly<ISelectBaseProps> = {
  options: []
  }) {

  const handleOnValueChange = (event: string) => {
    onValueChange && onValueChange(event)
  }

  return (
    <Select value={value} onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Select Company" />
      </SelectTrigger>
      <SelectContent>
        {
          options.map(option => {
            return <SelectItem value={option.value} key={option.value}>{option.label}</SelectItem>
          })
        }
      </SelectContent>
    </Select>
  )
}