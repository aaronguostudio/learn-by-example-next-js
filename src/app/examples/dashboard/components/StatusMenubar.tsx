import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function StatusMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Pending</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Active</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Complete</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}