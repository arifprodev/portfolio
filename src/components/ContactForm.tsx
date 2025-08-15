'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "react-hot-toast";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { ContactFormData, contactFormSchema } from "@/lib/schemas";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success('Message sent successfully!', {
        icon: <FiCheckCircle className="text-green-500" />,
      });
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your name"
          />
          {errors?.name && (
            <p className="mt-1 text-sm text-red-600">{errors?.name?.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your@email.com"
          />
            <p className="mt-1 text-sm text-red-600">{errors?.email?.message}</p>
      
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Your message..."
            rows={4}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            {...register("terms")}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions
          </label>
        </div>
        {errors?.terms && (
          <p className="text-sm text-red-600">{errors?.terms?.message}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <FiSend className="mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}