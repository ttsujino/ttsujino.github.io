// app/contact/page.tsx
import PageTransition from "../../components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="space-y-8">
        <h1 className="text-2xl font-bold text-terminal-white">Contact</h1>

        <div className="space-y-6">
          <p className="text-terminal-text/60 text-sm">
            お問い合わせは以下のフォームよりお願いします。
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-terminal-text/70 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full bg-terminal-bg border border-terminal-text/20 px-3 py-2 text-terminal-text font-mono text-sm focus:border-terminal-green focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-terminal-text/70 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full bg-terminal-bg border border-terminal-text/20 px-3 py-2 text-terminal-text font-mono text-sm focus:border-terminal-green focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-terminal-text/70 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                className="w-full bg-terminal-bg border border-terminal-text/20 px-3 py-2 text-terminal-text font-mono text-sm focus:border-terminal-green focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="border border-terminal-text/40 text-terminal-text px-4 py-2 text-sm hover:border-terminal-green hover:text-terminal-green transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}
