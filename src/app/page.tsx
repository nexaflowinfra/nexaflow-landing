export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 border-b border-zinc-900 bg-black/80 backdrop-blur">

  <h1 className="text-2xl font-bold">
    NexaFlow
  </h1>

  <div className="flex gap-6 text-sm text-gray-300">

<a href="#features">Features</a>
<a href="#pricing">Pricing</a>
<a href="#contact">Contact</a>

  </div>

</nav>
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          NexaFlow AI API
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Affordable AI API Infrastructure for Malaysia Businesses.
          Fast. Simple. Scalable.
        </p>

        <div className="flex gap-4">

          <a
  href="#contact"
  className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
>
  Get API Access
</a>

          <a
  href="#pricing"
  className="border border-white px-6 py-3 rounded-xl"
>
  View Pricing
</a>

        </div>

      </section>
      <section className="py-24 px-6 bg-zinc-950">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-6">
      One API. Instant AI Response.
    </h2>

    <p className="text-gray-400 text-center mb-12">
      Connect your app, chatbot, website, or automation workflow using a simple API endpoint.
    </p>

    <div className="bg-black border border-zinc-800 rounded-2xl p-6 text-left overflow-x-auto">
      <pre className="text-sm text-green-400">
{`POST https://api.nexaflowinfra.com/v1/chat?api_key=YOUR_API_KEY

{
  "message": "Write a product description for my business"
}`}
      </pre>
    </div>

  </div>

</section>
      <section id="features" className="py-24 px-6 bg-zinc-950">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-16">
      Why Businesses Choose NexaFlow
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="border border-zinc-800 p-8 rounded-2xl transition hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">
          Fast API Infrastructure
        </h3>

        <p className="text-gray-400">
          Low latency AI API infrastructure designed for modern applications and automation.
        </p>
      </div>

      <div className="border border-zinc-800 p-8 rounded-2xl transition hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">
          Affordable Pricing
        </h3>

        <p className="text-gray-400">
          Access powerful AI models without expensive enterprise pricing.
        </p>
      </div>

      <div className="border border-zinc-800 p-8 rounded-2xl transition hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">
          Malaysia-Based Support
        </h3>

        <p className="text-gray-400">
          Direct WhatsApp support for businesses and developers in Malaysia.
        </p>
      </div>

    </div>

  </div>

</section>
<section id="pricing" className="py-24 px-6 bg-black">

  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-4">
      Simple Pricing for Malaysia Businesses
    </h2>

    <p className="text-gray-400 mb-16">
      Start small, scale when your business grows.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="border border-zinc-800 p-8 rounded-2xl transition hover:scale-105">
        <h3 className="text-2xl font-bold mb-4">Starter</h3>
        <p className="text-4xl font-bold mb-6">RM29</p>
        <p className="text-gray-400 mb-6">For testing and small projects.</p>
        <ul className="text-gray-300 space-y-3 mb-8">
          <li>10,000 credits</li>
          <li>Basic AI API access</li>
          <li>Email support</li>
        </ul>
        <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
          Start Starter
        </button>
      </div>

      <div className="border border-white p-8 rounded-2xl transition hover:scale-105 bg-white text-black">
        <h3 className="text-2xl font-bold mb-4">Pro</h3>
        <p className="text-4xl font-bold mb-6">RM99</p>
        <p className="text-gray-700 mb-6">For businesses and automation.</p>
        <ul className="space-y-3 mb-8">
          <li>100,000 credits</li>
          <li>Priority API access</li>
          <li>WhatsApp support</li>
        </ul>
        <button className="w-full bg-black text-white py-3 rounded-xl font-semibold">
          Choose Pro
        </button>
      </div>

      <div className="border border-zinc-800 p-8 rounded-2xl transition hover:scale-105">
        <h3 className="text-2xl font-bold mb-4">Business</h3>
        <p className="text-4xl font-bold mb-6">RM399</p>
        <p className="text-gray-400 mb-6">For teams and higher usage.</p>
        <ul className="text-gray-300 space-y-3 mb-8">
          <li>1,000,000 credits</li>
          <li>Custom integration</li>
          <li>Priority WhatsApp support</li>
        </ul>
        <button className="w-full border border-white py-3 rounded-xl">
          Contact Sales
        </button>
      </div>

    </div>

  </div>

</section>
<section id="contact" className="py-24 px-6 bg-zinc-950 text-center">

  <h2 className="text-4xl font-bold mb-6">
    Ready to build with NexaFlow?
  </h2>

  <p className="text-gray-400 max-w-2xl mx-auto mb-10">
    Get your API key, start testing, and connect AI into your business workflows.
  </p>

  <a
    href="https://wa.me/60176731323?text=Hi%20NexaFlow%2C%20I%20want%20API%20access"
    target="_blank"
    className="inline-block bg-green-500 text-black px-8 py-4 rounded-xl font-bold"
  >
    Contact on WhatsApp
  </a>

</section>
<section className="py-32 px-6 bg-gradient-to-b from-black to-zinc-950 text-center">

  <h2 className="text-5xl font-bold mb-6">
    Start Building with AI Today
  </h2>

  <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
    NexaFlow helps Malaysia businesses integrate AI faster with affordable API infrastructure.
  </p>

  <a
    href="https://wa.me/60176731323?text=Hi%20NexaFlow%2C%20I%20want%20to%20start"
    target="_blank"
    className="inline-block bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg transition hover:scale-105"
  >
    Get Started Now
  </a>

</section>
<footer className="border-t border-zinc-900 py-8 px-6 text-center text-gray-500 text-sm">
  <p>
    © 2026 NexaFlow AI API. Built for Malaysia businesses.
  </p>

  <p className="mt-2">
    API Endpoint: api.nexaflowinfra.com
  </p>
</footer>
    </main>
  )
}