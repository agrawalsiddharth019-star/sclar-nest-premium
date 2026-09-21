import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Send } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { hostelConfig } from "@/config/hostel";

import { GlassCard, Reveal, SectionHeading, SectionShell } from "./primitives";

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  mobile: z.string().trim().regex(/^[0-9+\-\s()]{8,18}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email address"),
  role: z.enum(["Student", "Parent"], { required_error: "Select student or parent" }),
  institution: z.string().trim().min(2, "Enter college or institution"),
  course: z.string().trim().min(2, "Enter course details"),
  roomType: z.string().trim().min(2, "Select preferred room type"),
  moveInDate: z.string().trim().min(1, "Select expected move-in date"),
  message: z.string().trim().max(500, "Keep the message under 500 characters").optional(),
  website: z.string().max(0).optional(),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      institution: "",
      course: "",
      roomType: "",
      moveInDate: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    const parsed = enquirySchema.parse(values);
    if (parsed.website) return;
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setSubmitted(true);
    reset();
  };

  return (
    <SectionShell id="enquiry" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Admission Enquiry"
            title="Find Your Place at Sclar Nest."
            description="Share your details and the hostel team can follow up once the enquiry backend is connected."
          />
          <Reveal className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft">
            <CalendarDays className="mb-5 size-8 text-primary" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold text-foreground">Backend-ready enquiry flow</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The form validates inputs now and is structured for reCAPTCHA, rate limiting and secure enquiry storage later.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <GlassCard className="p-5 md:p-8">
            {submitted ? (
              <div className="rounded-3xl bg-accent/12 p-8 text-center">
                <h3 className="font-display text-3xl font-semibold text-foreground">
                  Thank you for your enquiry. Our team will get back to you shortly.
                </h3>
                <Button className="mt-7" variant="premium" onClick={() => setSubmitted(false)}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" data-recaptcha-ready="true" noValidate>
                <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("website")} />
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full Name" error={errors.fullName?.message}>
                    <Input placeholder="Enter full name" autoComplete="name" {...register("fullName")} />
                  </Field>
                  <Field label="Mobile Number" error={errors.mobile?.message}>
                    <Input placeholder="Enter mobile number" autoComplete="tel" {...register("mobile")} />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <Input type="email" placeholder="Enter email address" autoComplete="email" {...register("email")} />
                  </Field>
                  <Field label="Student / Parent" error={errors.role?.message}>
                    <Controller
                      name="role"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger aria-label="Student or parent">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Student">Student</SelectItem>
                            <SelectItem value="Parent">Parent</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                  <Field label="College / Institution" error={errors.institution?.message}>
                    <Input placeholder="Enter institution" {...register("institution")} />
                  </Field>
                  <Field label="Course" error={errors.course?.message}>
                    <Input placeholder="Enter course" {...register("course")} />
                  </Field>
                  <Field label="Preferred Room Type" error={errors.roomType?.message}>
                    <Controller
                      name="roomType"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger aria-label="Preferred room type">
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                          <SelectContent>
                            {hostelConfig.roomTypes.map((room) => (
                              <SelectItem value={room.name} key={room.name}>
                                {room.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                  <Field label="Expected Move-in Date" error={errors.moveInDate?.message}>
                    <Input type="date" {...register("moveInDate")} />
                  </Field>
                </div>
                <Field label="Message" error={errors.message?.message}>
                  <Textarea placeholder="Tell us what you would like to know" rows={5} {...register("message")} />
                </Field>
                <Button type="submit" variant="premium" size="xl" className="w-full md:w-auto" disabled={isSubmitting}>
                  <Send aria-hidden="true" />
                  Submit Enquiry
                </Button>
              </form>
            )}
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-semibold text-foreground">{label}</Label>
      {children}
      {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}
    </div>
  );
}
