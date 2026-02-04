"use client";

import Copy from "@/components/Copy";
import ReactLenis from "lenis/react";
import { useState } from "react";
import { sendEmail } from "../actions";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    const result = await sendEmail(formData);
    setIsSubmitting(false);

    if (result?.success) {
      setIsSuccess(true);
    } else {
      alert(result?.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <ReactLenis root />
      <style dangerouslySetInnerHTML={{__html: `
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
          -webkit-text-fill-color: #e3e4d8 !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        select option {
          background-color: #0a0a0a;
          color: #e3e4d8;
        }
      `}} />

      <div className="flex h-svh w-full flex-col items-center justify-center gap-8 p-16">
        <Copy delay={0.5}>
          <h1 className="text-6xl md:text-8xl font-anton uppercase text-[#e3e4d8]">
            Contact
          </h1>
        </Copy>
        <Copy delay={0.8}>
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center gap-4 text-[#e3e4d8]">
              <h2 className="text-4xl font-anton uppercase">Message Sent!</h2>
              <p className="text-xl font-sans">I'll get back to you soon.</p>
            </div>
          ) : (
            <form 
              action={handleSubmit}
              className="flex flex-col gap-6 w-full md:w-[30vw] min-w-75"
            >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-anton text-[#e3e4d8] text-xl uppercase">Your mail</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                required
                className="bg-transparent border-b border-[#e3e4d8] text-[#e3e4d8] focus:outline-none focus:border-[#a1a1aa] transition-colors py-2 font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-anton text-[#e3e4d8] text-xl uppercase">Subject</label>
              <div className="relative">
                <select 
                  name="subject" 
                  id="subject"
                  className="w-full bg-transparent border-b border-[#e3e4d8] text-[#e3e4d8] focus:outline-none focus:border-[#a1a1aa] transition-colors py-2 font-sans cursor-pointer rounded-none"
                  defaultValue=""
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" disabled className="text-gray-500">Select a subject</option>
                  <option value="Pro">Pro</option>
                  <option value="Booking">Booking</option>
                  <option value="Promo">Promo</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-anton text-[#e3e4d8] text-xl uppercase">Your message</label>
              <textarea 
                name="message" 
                id="message"
                rows={4}
                required
                className="bg-transparent border-b border-[#e3e4d8] text-[#e3e4d8] focus:outline-none focus:border-[#a1a1aa] transition-colors py-2 font-sans resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-4 border border-[#e3e4d8] text-[#e3e4d8] font-anton uppercase text-xl py-3 px-8 hover:bg-[#e3e4d8] hover:text-[#1d1d1d] transition-colors duration-300 self-end rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
          )}
        </Copy>
      </div>
    </>
  );
}