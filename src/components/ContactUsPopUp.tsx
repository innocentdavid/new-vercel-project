import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { slackLogging } from "@/lib/helpers";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const ContactPopup = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async () => {
    setProcessing(true);
    try {
      await slackLogging(`
        FollowerTools: Contact\n\n
        Email: ${email}\n
        Subject: ${subject}\n
        Message: ${message}\n
        `);
      toast("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send the message");
    }
    setProcessing(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-base font-medium _text-gray-900 _hover:text-gray-700 cursor-pointer">
          Contact Us
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>

        <Label htmlFor="Email">Email</Label>
        <Input
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <Label htmlFor="Subject">Subject</Label>
        <Input
          id="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter the subject"
          required
        />

        <Label htmlFor="Message">Message</Label>
        <Textarea
          id="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
        />

        <DialogFooter>
          <DialogClose asChild disabled={processing}>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSubmit} disabled={processing}>
            {processing ? <Loader2 className="animate-spin" /> : "Send"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
