import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-4"
        >
          <p className="text-accent font-medium mb-2">Thank you for subscribing!</p>
          <p className="text-sm text-muted-foreground">
            We'll keep you updated on screenings and releases.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-card border border-border rounded-sm text-sm 
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                       focus:ring-accent focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-accent-foreground text-sm font-medium 
                       tracking-wide uppercase rounded-sm hover:bg-sunset 
                       transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
