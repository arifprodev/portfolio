'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FiSend, FiCheckCircle, FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { z } from "zod";
import { useState } from "react";

// Define Zod schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  terms: z.boolean().refine(val => val === true, { message: "You must agree to the terms" })
});

// Infer TypeScript type from Zod schema
type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Using Axios for the API call
      await axios.post('/api/contact', data);
      
      toast.success('Message sent successfully!', {
        icon: <FiCheckCircle className="text-green-500" />,
      });
      reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out using the form or contact details below.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                    <FiUser className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Name</h3>
                    <p className="text-slate-400">Arif Hossen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-slate-400">contact@arifhossen.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-slate-400">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-slate-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="text-white font-medium mb-4">Follow me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiGithub />, label: 'GitHub' },
                    { icon: <FiLinkedin />, label: 'LinkedIn' },
                    { icon: <FiTwitter />, label: 'Twitter' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors"
                      href="#"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="bg-slate-800/50 p-8 rounded-2xl shadow-xl border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-slate-500" />
                    </div>
                    <input
                      id="name"
                      {...register("name")}
                      className="bg-slate-800 border border-slate-700 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-slate-500" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="bg-slate-800 border border-slate-700 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                      <FiMessageSquare className="text-slate-500" />
                    </div>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className="bg-slate-800 border border-slate-700 text-white rounded-lg block w-full pl-10 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Your message..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    {...register("terms")}
                    className="w-4 h-4 text-indigo-600 bg-slate-800 border-slate-700 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-slate-300">
                    I agree to the terms and conditions
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500">{errors.terms.message}</p>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-opacity disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}