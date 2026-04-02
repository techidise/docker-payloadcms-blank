'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Camera, TextAlignJustify } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigation = [
  { name: 'Product', href: '#', id: 1 },
  { name: 'Features', href: '#', id: 2 },
  { name: 'Marketplace', href: '#', id: 3 },
  { name: 'Company', href: '#', id: 4 },
]

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-0.5 p-1.5">
            <span className="sr-only">LIVE THICK</span>
            {/* <img src="#" alt="Icon" className="h-8 w-auto" /> */}
            <Camera size={48} strokeWidth="3" className="text-red-300" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <TextAlignJustify
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-hidden="true"
                className="inline-flex size-6 hover:cursor-pointer"
              ></TextAlignJustify>
            </SheetTrigger>
            <SheetContent className="px-3">
              <SheetHeader>
                <SheetTitle className="sr-only">Onen Main Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Make changes to your profile here. Click save when you&apos;re done.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.id} href={item.href} className="text-sm/6 font-semibold text-white">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href={'#'} className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
