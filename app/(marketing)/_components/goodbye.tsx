'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function GoodByeFeedback() {
  const searchParams = useSearchParams();
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReasonChange = (selectedReason: string) => {
    setReason(selectedReason);
  };

  const handleOtherReasonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherReason(event.target.value);
  };

  const handleSubmit = () => {
    const userId = searchParams.get('u');

    if (userId) {
      fetch('/api/uninstall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, reason, otherReason }),
      })
        .then(() => {
          setSubmitted(true);
        })
        .catch((error) => {
          console.error('Error notifying:', error);
        });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Thank You!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Thank you for your feedback. We appreciate your time and input.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sorry to see you go.</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="option1"
              checked={reason === 'annoying'}
              onCheckedChange={() => handleReasonChange('annoying')}
            />
            <Label htmlFor="option1">Olly is too annoying because of popup.</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="option2"
              checked={reason === 'paid'}
              onCheckedChange={() => handleReasonChange('paid')}
            />
            <Label htmlFor="option2">Because it was paid.</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="option3"
              checked={reason === 'not_working'}
              onCheckedChange={() => handleReasonChange('not_working')}
            />
            <Label htmlFor="option3">Did not work.</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="option4"
              checked={reason === 'not_needed'}
              onCheckedChange={() => handleReasonChange('not_needed')}
            />
            <Label htmlFor="option4">Do not need it anymore.</Label>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="other">Anything else</Label>
            <Textarea
              id="other"
              value={otherReason}
              onChange={handleOtherReasonChange}
              placeholder="Let us know your feedback"
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button onClick={handleSubmit}>Submit Feedback</Button>
        </CardFooter>
      </Card>
    </div>
  );
}