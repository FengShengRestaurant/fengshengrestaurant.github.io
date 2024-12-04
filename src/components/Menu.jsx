import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Import Language Context

const Menu = () => {
  const { language } = useLanguage(); // Access the current language

  // Multilingual content
  const content = {
    en: {
      heading: 'Menu Under Preparation',
      message: 'We are currently working hard to bring you our delicious offerings. Stay tuned for our menu updates!',
      button: 'Go Back to Home',
    },
    zh: {
      heading: '菜单准备中',
      message: '我们正在努力为您带来美味的菜品。敬请期待我们的菜单更新！',
      button: '返回首页',
    },
    malay: {
      heading: 'Menu Sedang Disediakan',
      message: 'Kami sedang bekerja keras untuk membawa anda hidangan yang lazat. Nantikan kemas kini menu kami!',
      button: 'Kembali ke Halaman Utama',
    },
  };

  // Select the current language content
  const { heading, message, button } = content[language] || content.en;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-bright-yellow via-cream to-orange opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center" id="menu-content">
          <h1 className="text-4xl font-bold text-brown mb-4">{heading}</h1>
          <p className="text-lg text-gray-600">{message}</p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-block rounded-md bg-orange px-5 py-3 text-white font-semibold hover:bg-bright-yellow hover:text-brown duration-300 ease-in-out"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
