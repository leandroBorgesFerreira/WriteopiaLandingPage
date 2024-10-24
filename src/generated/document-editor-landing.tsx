import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, FileText, Share2, Zap, Menu, X } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b fixed top-0 left-0 right-0 bg-background z-50">
      <Link className="flex items-center justify-center" href="#">
        <FileText className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold text-primary">DocuMind</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
          Testimonials
        </Link>
      </nav>
      <div className="ml-auto md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      <div className={`fixed inset-0 bg-background z-50 flex flex-col items-center justify-start pt-16 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu" className="absolute top-4 right-4">
          <X className="h-6 w-6" />
        </Button>
        <nav className="flex flex-col items-center gap-8">
          {['Features', 'Pricing', 'Testimonials'].map((item, index) => (
            <Link
              key={item}
              className={`text-2xl font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

const Hero = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 mt-16">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Your Ideas, Organized and Amplified
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            DocuMind is the all-in-one workspace for your notes, documents, and collaborative projects.
          </p>
        </div>
        <div className="space-x-4">
          <Button>Get Started for Free</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  </section>
)

const Features = () => (
  <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <FileText className="h-10 w-10 mb-4 text-primary" />, title: "Rich Text Editing", description: "Create beautiful documents with our intuitive rich text editor." },
          { icon: <Share2 className="h-10 w-10 mb-4 text-primary" />, title: "Real-time Collaboration", description: "Work together seamlessly with real-time updates and comments." },
          { icon: <Zap className="h-10 w-10 mb-4 text-primary" />, title: "Smart Organization", description: "Organize your thoughts with nested pages, tags, and powerful search." },
        ].map((feature, index) => (
          <Card key={index} className="flex flex-col items-center text-center">
            <CardHeader>{feature.icon}</CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

const Testimonials = () => (
  <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Alex Johnson", role: "Product Manager", quote: "DocuMind has revolutionized how our team collaborates on projects. It's intuitive and powerful." },
          { name: "Sarah Lee", role: "Content Creator", quote: "As a writer, I love how DocuMind helps me organize my ideas and research. It's become an essential tool in my workflow." },
          { name: "Michael Chen", role: "Startup Founder", quote: "The flexibility and features of DocuMind have made it indispensable for our growing startup. Highly recommended!" },
        ].map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <CardDescription>{testimonial.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

const Pricing = () => (
  <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Basic", price: "$0", features: ["Unlimited pages", "Rich text editing", "Mobile app access"] },
          { name: "Pro", price: "$12", features: ["Everything in Basic", "Real-time collaboration", "Version history", "Advanced permissions"] },
          { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Dedicated support", "Custom integrations", "Advanced security"] },
        ].map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 dark:text-gray-400">/month</span>}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full">{plan.price === "Custom" ? "Contact Us" : "Get Started"}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

const CTA = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Join thousands of users who are already organizing their ideas and boosting their productivity with DocuMind.
          </p>
        </div>
        <div className="space-x-4">
          <Button size="lg">Sign Up for Free</Button>
          <Button variant="outline" size="lg">Request a Demo</Button>
        </div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">DocuMind</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 DocuMind. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}