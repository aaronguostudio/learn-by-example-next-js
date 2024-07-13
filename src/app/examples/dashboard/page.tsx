'use client'

import CompanySelector from './components/CompanySelector'
import SearchInput from './components/SearchInput'
import UserAvatar from './components/UserAvatar'
import StatusMenubar from './components/StatusMenubar'
import DateRangePicker from './components/DateRangePicker'
import ContentCard from './components/ContentCard'
import OrderTable from './components/OrderTable'
import { companyRecords } from '@/config/options/company'
import { useState } from 'react'

export default function Page() {

  const [selectedCompany, setSelectedCompany] = useState<string>(companyRecords.companyA.value)

  const handleCompanyUpdate = (event: string) => {
    setSelectedCompany(event)
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <CompanySelector data={selectedCompany} onValueChange={handleCompanyUpdate} />
          <StatusMenubar />
        </div>
        <div className="flex items-center space-x-4">
          <DateRangePicker />
          <SearchInput />
          <UserAvatar />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
      <div>
        <OrderTable />
      </div>
    </div>
  )
}