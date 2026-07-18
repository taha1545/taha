"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactProps {
  heading?: string;
  subheading?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  phoneLabel?: string;
  phonePlaceholder?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  agreementText?: string;
  buttonText?: string;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 25, stiffness: 80 },
  },
};

export function Contact({
  heading = "Let's Build Something",
  subheading = "Contact",
  nameLabel = "Name",
  namePlaceholder = "Your name",
  emailLabel = "Email",
  emailPlaceholder = "you@example.com",
  phoneLabel = "Phone",
  phonePlaceholder = "+20 100 000 0000",
  messageLabel = "Message",
  messagePlaceholder = "Tell me about your project...",
  agreementText = "I agree to the privacy policy",
  buttonText = "Send Message",
}: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden py-20 sm:py-24 "
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="from-primary to-primary/60 aspect-[577/310] w-[36rem] bg-gradient-to-r opacity-40"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="from-primary to-primary/60 aspect-[577/310] w-[36rem] bg-gradient-to-r opacity-40"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl lg:max-w-3xl"
        >
          <div className="text-center">
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold uppercase tracking-widest text-primary"
            >
              {subheading}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              <span className="block">{heading}</span>
              <span
                className="block"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                Together
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 lg:mt-16 lg:p-10"
          >
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-white/70"
                  >
                    {nameLabel}
                  </Label>
                  <Input
                    id="name"
                    placeholder={namePlaceholder}
                    className="h-12 rounded-xl border-white/10 bg-white/[0.05] px-4 text-sm text-white placeholder:text-white/30 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-white/70"
                  >
                    {emailLabel}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={emailPlaceholder}
                    className="h-12 rounded-xl border-white/10 bg-white/[0.05] px-4 text-sm text-white placeholder:text-white/30 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-white/70"
                >
                  {phoneLabel}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={phonePlaceholder}
                  className="h-12 rounded-xl border-white/10 bg-white/[0.05] px-4 text-sm text-white placeholder:text-white/30 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                />
              </div>

              <div className="grid gap-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-white/70"
                >
                  {messageLabel}
                </Label>
                <Textarea
                  id="message"
                  placeholder={messagePlaceholder}
                  className="min-h-[140px] resize-none rounded-xl border-white/10 bg-white/[0.05] p-4 text-sm text-white placeholder:text-white/30 focus-visible:border-primary/50 focus-visible:ring-primary/20"
                />
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="agreement"
                  className="rounded border-white/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                />
                <Label
                  htmlFor="agreement"
                  className="text-sm text-white/50"
                >
                  {agreementText}
                </Label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={cn(
                  "group mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl",
                  "bg-primary px-8 text-sm font-semibold text-white",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_14px_rgba(234,88,12,0.25)]",
                  "transition-all duration-200 hover:bg-orange-500",
                  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_20px_rgba(234,88,12,0.35)]",
                  "active:scale-[0.96]",
                  "disabled:cursor-not-allowed disabled:opacity-70"
                )}
              >
                {isSent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    {buttonText}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;