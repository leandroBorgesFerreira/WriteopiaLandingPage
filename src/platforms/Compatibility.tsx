import React from "react"
import { Smartphone, Apple, Monitor , AppWindow, Mouse, Globe, Bot, Laptop} from 'lucide-react';


export default function Component() {
  const platforms = [
    { name: 'Windows', color: 'blue', description: 'Compatible with Windows 10 and 11' },
    { name: 'Linux', color: 'orange', description: 'Supports major Linux distributions' },
    { name: 'Mac', color: 'gray', description: 'Works on macOS 10.15 and later' },
    { name: 'iOS', color: 'red', description: 'Available on iOS 13 and above' },
    { name: 'Android', color: 'green', description: 'Supports Android 8.0 and newer' },
    { name: 'Web', color: 'purple', description: 'Access via any modern web browser' },
  ]

  const renderPlatformIcon = (name: string) => {
    switch (name) {
      case 'Windows':
        return <AppWindow />
      case 'Linux':
        return <Laptop />
      case 'Mac':
        return <Monitor />
      case 'iOS':
        return <Smartphone />
      case 'Android':
        return <Bot />
      case 'Web':
        return <Globe />
				
      default:
        return null
    }
  }


  const renderPlatformCard = (platform: { name: string; color: string; description: string }) => (
    <div key={platform.name} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={`currentColor`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-12 w-12 mb-4`}
      >
        {renderPlatformIcon(platform.name)}
      </svg>
      <h3 className="text-2xl font-semibold">{platform.name}</h3>
      <p className="text-sm text-gray-500 mt-2 text-center">{platform.description}</p>
    </div>
  )

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Run Anywhere, Anytime</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our app is designed to work seamlessly across all major platforms. Whether you're on desktop, mobile, or web, you'll have the same great experience.
          </p>
        </div>
        <div className="grid gap-6 mt-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map(renderPlatformCard)}
        </div>
      </div>
    </section>
  )
}