import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <div className="flex justify-center">
    <section className="bg-muted py-8 px-8 rounded-xl container mx-auto max-w-6xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Form</h2>
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="w-3/4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Subject</Label>
                  <Input id="subject" type="text" placeholder="Enter the subject" />
                </div>
                
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message" rows={4} />
              </div>
              <Button type="submit" className="justify-center">
                Send
              </Button>
            </form>
          </div>
        </section>
      </div>
  );
}   