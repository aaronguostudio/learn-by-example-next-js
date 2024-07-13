'use client'

import { examplesPageMenus } from '@/config/ui/menus'
import MenuItem from '@/components/base/menuItem'
import SidebarLayout from '@/components/layout/sidebar_layout'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const sidebar = examplesPageMenus.map((item) => {
    return (
      <div key={item.name} className="px-2 py-[2px]">
        <MenuItem data={item} classes="rounded-md text-sm" activeClass="bg-gray-900 text-white" />
      </div>
    )
  })

  return (
    <SidebarLayout sidebar={sidebar} sidebarClasses="py-1">
      {children}
    </SidebarLayout>
  )
}