// app/contact/page.tsx
import PageTransition from "../../components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="space-y-4">
        <div className="space-y-2">
          <p className="text-terminal-cyan">
            <span className="text-terminal-green">tsujino@portfolio</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-blue">~</span>
            <span className="text-terminal-text">$ nano contact.sh</span>
          </p>
          <div className="pl-4 border-l-2 border-terminal-green/30 space-y-4">
            <h1 className="text-2xl font-bold text-terminal-white">Contact Me</h1>
            <p className="text-terminal-text/80">
              Feel free to contact us via the form below or by email.
            </p>
            <p className="text-terminal-yellow text-sm">
              [WARNING] Currently, the form functionality is under development.
            </p>
          </div>
        </div>

        <form className="space-y-4 mt-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-terminal-cyan text-sm flex items-center gap-2">
              <span className="text-terminal-green">$</span>
              <span>Enter your name:</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-4 py-2 text-terminal-text font-mono focus:border-terminal-green focus:outline-none focus:ring-1 focus:ring-terminal-green transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-terminal-cyan text-sm flex items-center gap-2">
              <span className="text-terminal-green">$</span>
              <span>Enter your email:</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-4 py-2 text-terminal-text font-mono focus:border-terminal-green focus:outline-none focus:ring-1 focus:ring-terminal-green transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-terminal-cyan text-sm flex items-center gap-2">
              <span className="text-terminal-green">$</span>
              <span>Enter your message:</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={6}
              className="w-full bg-terminal-bg border border-terminal-green/30 rounded px-4 py-2 text-terminal-text font-mono focus:border-terminal-green focus:outline-none focus:ring-1 focus:ring-terminal-green transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-terminal-green/20 border border-terminal-green text-terminal-green px-6 py-2 rounded hover:bg-terminal-green hover:text-terminal-bg transition-all font-semibold"
          >
            → Execute: Send Message
          </button>
        </form>

        <p className="text-terminal-green mt-4 text-sm">
          [READY] Form ready for input
        </p>
      </section>
    </PageTransition>
  );
}
