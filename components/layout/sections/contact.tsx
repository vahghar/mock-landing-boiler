"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ConfettiExplosion from "react-confetti-explosion";

export const ContactSection = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleMailTo = () => {
    const email = "example@example.com"; // Replace with your email
    const subject = "Inquiry";
    const body = "Hello, I would like to get in touch.";
    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailToLink;
  };

  const handleClick = () => {
    setIsExploding(true);
    handleMailTo();

    // Stop the explosion effect after a short time
    setTimeout(() => setIsExploding(false), 2000);
  };

  return (
    <section id="contact" className="container py-24 sm:py-32 text-center">
      <h2 className="text-lg text-primary mb-2 tracking-wider">Contact Us</h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Get in Touch</h1>
      <div className="relative">
        {isExploding && (
          <ConfettiExplosion
            force={0.6}
            duration={2000}
            particleCount={150}
            width={500}
          />
        )}
      </div>
      <Button onClick={handleClick} className="mt-4">
        Send a Message
      </Button>
    </section>
  );
};
