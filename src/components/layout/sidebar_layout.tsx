import { UI } from "@/config/ui"
import clsx from "clsx"

export default function SidebarLayout({
  classes = '',
  sidebarClasses = '',
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode,
  sidebar: React.ReactNode
  classes?: string
  sidebarClasses?: string
}>) {
  return (
    <div className={clsx([
      classes,
      "flex h-full"
    ])}>
      <div className={
        clsx([
          sidebarClasses,
          "bg-gray-50 border-r border-gray-200",
        ])
      } style={{
        width: `${UI.drawer.width}px`
      }}>
        { sidebar }
      </div>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}