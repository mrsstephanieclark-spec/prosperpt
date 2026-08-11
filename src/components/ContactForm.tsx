"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Read Formspree ID from env or use placeholder.
    // Replace '[Formspree-ID — TBD]' with your Formspree ID (e.g. 'mqkrgqdq')
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "[Formspree-ID — TBD]";

    if (formspreeId === "[Formspree-ID — TBD]") {
      console.warn("Formspree ID is not configured. Redirecting to /thank-you in development.");
      setTimeout(() => {
        router.push("/thank-you");
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form. Please try again.");
      }

      router.push("/thank-you");
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto">
      {submitError && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
          {submitError}
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="First and last name"
          {...register("name", { required: "Name is required" })}
          className={`w-full px-4 py-3 rounded-xl bg-white border ${
            errors.name ? "border-red-400 focus:ring-red-200" : "border-secondary/35 focus:ring-secondary/20"
          } text-primary focus:outline-none focus:ring-4 transition-all`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="(502) 555-0199"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
              message: "Invalid phone number format",
            },
          })}
          className={`w-full px-4 py-3 rounded-xl bg-white border ${
            errors.phone ? "border-red-400 focus:ring-red-200" : "border-secondary/35 focus:ring-secondary/20"
          } text-primary focus:outline-none focus:ring-4 transition-all`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          {...register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full px-4 py-3 rounded-xl bg-white border ${
            errors.email ? "border-red-400 focus:ring-red-200" : "border-secondary/35 focus:ring-secondary/20"
          } text-primary focus:outline-none focus:ring-4 transition-all`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-xl bg-accent text-white text-sm font-semibold tracking-wide shadow-sm hover:bg-accent/90 disabled:bg-accent/50 focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : "Get Started"}
      </motion.button>
    </form>
  );
}
