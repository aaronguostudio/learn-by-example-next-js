'use client'

import SelectBase from '@/components/elements/select/SelectBase'
import { companyOptions } from '@/config/options/company'

export default function CompanySelector({
  data,
  onValueChange
}: Readonly<{
  data?: string
  onValueChange?: (value: string) => void
}>) {

  const handleOnValueChange = (event: string) => {
    onValueChange && onValueChange(event)
  }

  return (
    <SelectBase options={companyOptions} value={data} onValueChange={handleOnValueChange} />
  )
}