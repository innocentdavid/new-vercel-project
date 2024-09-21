import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="grid gap-8 py-8 border-t sm:grid-cols-12 md:py-12 border-zinc-200 dark:border-zinc-900">
          <div className="flex flex-col sm:col-span-6 md:col-span-2 lg:col-span-2 max-sm:order-1">
            <div className="mb-4">
              <Link
                className="flex items-center justify-center w-8 h-8 bg-white rounded shadow-sm shadow-zinc-950/20"
                href="#"
              >
                <Image
                  alt="Logo"
                  loading="lazy"
                  width={24}
                  height={24}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src="https://cdn.funfun.tools/_next/image?url=%2Flogo.png&w=48&q=75"
                />
              </Link>
            </div>
            <div className="text-sm text-zinc-500">
              © funfun.tools All rights reserved.
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-12 sm:col-span-10 md:col-span-10 lg:col-span-10">
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
              <span className="mb-2 text-sm font-medium text-zinc-800 dark:text-zinc-300 ">
                Products
              </span>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="transition text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    href="/en/category"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    className="transition text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    href="/en/ai-news"
                  >
                    AI News
                  </a>
                </li>
                <li>
                  <a
                    className="transition text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    href="/en/submit-tool"
                  >
                    Submit Tool
                  </a>
                </li>
                <li>
                  <a
                    className="transition text-zinc-500 hover:text-zinc-900"
                    target="_blank"
                    href="https://www.chaindesk.ai/"
                  >
                    AI Support
                  </a>
                </li>
                <li>
                  <a
                    className="transition text-zinc-500 hover:text-zinc-900"
                    target="_blank"
                    href="https://www.funfun.ai/"
                  >
                    AI Girlfriend
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
              <span className="mb-2 text-sm font-medium text-zinc-800 dark:text-zinc-300">
                Contact
              </span>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="transition text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    href="mailto:business@funfun.tools"
                    target="_blank"
                  >
                    business@funfun.tools
                  </a>
                </li>
                <li>
                  <a
                    className="transition text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    href="/legal/privacy"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mb-24">
          <div>
            <a
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/en"
            >
              🇺🇸 English
            </a>
          </div>
          <div>
            <a
              hrefLang="de"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/de"
            >
              🇩🇪 Deutsch
            </a>
          </div>
          <div>
            <a
              hrefLang="fr"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/fr"
            >
              🇫🇷 Français
            </a>
          </div>
          <div>
            <a
              hrefLang="it"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/it"
            >
              🇮🇹 Italiano
            </a>
          </div>
          <div>
            <a
              hrefLang="es"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/es"
            >
              🇪🇸 Español
            </a>
          </div>
          <div>
            <a
              hrefLang="nl"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/nl"
            >
              🇳🇱 Nederlands
            </a>
          </div>
          <div>
            <a
              hrefLang="pt"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/pt"
            >
              🇵🇹 Português
            </a>
          </div>
          <div>
            <a
              hrefLang="sv"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/sv"
            >
              🇸🇪 Svenska
            </a>
          </div>
          <div>
            <a
              hrefLang="ru"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/ru"
            >
              🇷🇺 Русский
            </a>
          </div>
          <div>
            <a
              hrefLang="zh-cn"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/zh-cn"
            >
              🇨🇳 简体中文
            </a>
          </div>
          <div>
            <a
              hrefLang="zh-tw"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/zh-tw"
            >
              🇹🇼 繁體中文
            </a>
          </div>
          <div>
            <a
              hrefLang="ja"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/ja"
            >
              🇯🇵 日本語
            </a>
          </div>
          <div>
            <a
              hrefLang="ko"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/ko"
            >
              🇰🇷 한국어
            </a>
          </div>
          <div>
            <a
              hrefLang="vi"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/vi"
            >
              🇻🇳 Tiếng Việt
            </a>
          </div>
          <div>
            <a
              hrefLang="he"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/he"
            >
              🇮🇱 עברית
            </a>
          </div>
          <div>
            <a
              hrefLang="ar"
              className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
              href="/ar"
            >
              🇸🇦 العربية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
  // return (
  //   <footer className="bg-white border-t">
  //     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
  //       <div className="xl:grid xl:grid-cols-3 xl:gap-8">
  //         <div className="space-y-8 xl:col-span-1">
  //           <Image
  //             src="/placeholder.svg"
  //             alt="Company logo"
  //             width={40}
  //             height={40}
  //             className="h-10"
  //           />
  //           <p className="text-gray-500 text-base">
  //             © funfun.tools All rights reserved.
  //           </p>
  //         </div>
  //         <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
  //           <div className="md:grid md:grid-cols-2 md:gap-8">
  //             <div>
  //               <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
  //                 Products
  //               </h3>
  //               <ul role="list" className="mt-4 space-y-4">
  //                 {products.map((item) => (
  //                   <li key={item.name}>
  //                     <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
  //                       {item.name}
  //                     </Link>
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </div>
  //           <div className="md:grid md:grid-cols-2 md:gap-8">
  //             <div>
  //               <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
  //                 Contact
  //               </h3>
  //               <ul role="list" className="mt-4 space-y-4">
  //                 <li>
  //                   <a href="mailto:business@funfun.tools" className="text-base text-gray-500 hover:text-gray-900">
  //                     business@funfun.tools
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
  //                     Privacy Policy
  //                   </Link>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="mt-8 border-t border-gray-200 pt-8">
  //         <div className="flex flex-wrap justify-center space-x-2 space-y-1">
  //           {languages.map((lang) => (
  //             <span key={lang} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
  //               {lang}
  //             </span>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // )
}
