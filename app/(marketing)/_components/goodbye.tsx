import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function GoodByeFeedback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sorry to see you go.</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="option1" />
            <Label htmlFor="option1">Olly is too annoying because of popup.</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option2" />
            <Label htmlFor="option2">Because it was paid.</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option3" />
            <Label htmlFor="option3">Did not work.</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="option4" />
            <Label htmlFor="option4">Do not need it anymore.</Label>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="other">Anything else</Label>
            <Textarea id="other" placeholder="Let us know your feedback" />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="submit">Submit Feedback</Button>
        </CardFooter>
      </Card>
    </div>
  )
}