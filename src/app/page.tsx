// import { Button } from "@/components/ui/button";
import Label from '@/components/base/label'
import { ESize } from '@/types/common';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-16">
        <div className="space-y-4">
          <div className="text-4xl font-bold">Learning Next.js</div>
          <div>
            <div>I build this website while learning the Next.js framework</div>
            <div>I started with Shadcn/ui and tailwind.</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-4 w-screen max-w-[1000px]">
          <div className="space-y-8">
            <Label size={ ESize.xl }>Learning Log</Label>
            <div className="space-y-2">
              <Label size={ ESize.lg }>Day 1 - Next.js Documentation</Label>
              <div>Understanding how Next.js works in general, setup the basic project structure.</div>
            </div>
            <div className="space-y-2">
              <Label size={ ESize.lg }>Day 2 - Next.js Documentation</Label>
              <div>While learning the basic Next.js documentation, building the styles, contents are not that easy. Learning things without a target and reference can be hard. My approach is learning by applying the real knowledge, copying code examples. This is a more efficient way for learning things.</div>
            </div>
          </div>
        {/* <Button variant={"outline"}>
          Click Me
        </Button> */}
        </div>
      </div>
    </div>
  );
}
