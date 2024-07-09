import { UI } from "@/config/ui"

export default function SidebarLayout({
  children,
  sidebar
}: Readonly<{
  children: React.ReactNode,
  sidebar: React.ReactNode
}>) {
  return (
    <div className="flex h-full">
      <div className="bg-gray-50 border-r" style={{
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