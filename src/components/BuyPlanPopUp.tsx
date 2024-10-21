"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { slackLogging } from "@/lib/helpers";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const BuyPlanPopUp = ({
  children,
  plan,
}: {
  children: ReactNode;
  plan: string;
}) => {
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setProcessing(true);
    try {
      await slackLogging(`
        FollowerTools: Submit tool\n\n
        Full Name: ${fullName}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Plan: ${plan}\n
        `);
      toast("Message sent successfully");
      setOpen(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send the message");
    }
    setProcessing(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <DialogHeader className="">
            <DialogTitle>Plan Purchase</DialogTitle>
            <DialogDescription>
              Enter your contact details and we will contact you within the next
              48 hours with the offer from FollowersTool.
            </DialogDescription>
          </DialogHeader>

          <Label htmlFor="FullName">Full Name</Label>
          <Input
            id="FullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />

          <Label htmlFor="Email">Email</Label>
          <Input
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <Label htmlFor="Phone">Phone</Label>
          <Input
            id="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter the phone"
            required
          />

          <DialogFooter>
            <DialogClose asChild disabled={processing}>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={processing}>
              {processing ? <Loader2 className="animate-spin" /> : "Send"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BuyPlanPopUp;
