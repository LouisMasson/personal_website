
'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function GuestBook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    try {
      const response = await fetch('/api/guestbook');
      const data = await response.json();
      setEntries(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching entries:', error);
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for signing the guest book!",
        });
        setName('');
        setMessage('');
        fetchEntries();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Guest Book</h1>
      
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Leave a message..."
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit">Sign Guest Book</Button>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Messages</h2>
        {loading ? (
          <p>Loading messages...</p>
        ) : entries && Array.isArray(entries) ? (
          entries.map((entry: any) => (
            <Card key={entry.id} className="p-4">
              <p className="font-medium">{entry.properties.Name.title[0]?.text.content}</p>
              <p className="text-muted-foreground mt-1">
                {entry.properties.Message.rich_text[0]?.text.content}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {new Date(entry.properties.Date.date.start).toLocaleDateString()}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
