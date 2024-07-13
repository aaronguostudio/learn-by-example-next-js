import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ContentCard() {
  return (
    <Card>
      <CardHeader>
        <div>Revenue</div>
        <CardTitle>$45,231.89</CardTitle>
        <CardDescription>20.1% from last month</CardDescription>
      </CardHeader>
    </Card>
  )
}