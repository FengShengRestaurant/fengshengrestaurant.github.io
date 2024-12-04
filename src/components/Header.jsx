// src/components/Header.jsx
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext'; // Import the hook
import { navigation as navItems } from '../data/navigation'; // Import navigation data

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage(); // Access current language

  // Select navigation items based on current language
  const navigation = navItems[language] || navItems.en;

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Company Logo"
              src="./logo512.png"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-xl font-semibold text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageSelector />
        </div>
      </nav>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        static
      >
        {mobileMenuOpen && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
          />
        )}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                src="./logo512.png"
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
}