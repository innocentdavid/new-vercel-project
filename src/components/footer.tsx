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
                className="flex items-center justify-center w-8 h-8"
                href="/"
              >
                <div className="">
                  <Image
                    src="/followerstoolblack.png"
                    alt="Logo"
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    className="hidden dark:inline-block"
                  />
                  <Image
                    src="/followerstoolwhite.png"
                    alt="Logo"
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    className="dark:hidden"
                  />
                </div>
              </Link>
            </div>
            <div className="text-sm text-zinc-500">
              © FollowersTool All rights reserved.
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-12 sm:col-span-10 md:col-span-10 lg:col-span-10">
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
              <span className="mb-2 text-sm font-medium text-zinc-800 dark:text-zinc-300 ">
                Languages
              </span>
              <div className="flex flex-col flex-wrap gap-y-2 gap-x-12 mb-24 max-h-[170px]">
                <div>
                  <Link
                  hrefLang="en"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#en"
                  >
                    🇺🇸 English
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="de"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#de"
                  >
                    🇩🇪 Deutsch
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="fr"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#fr"
                  >
                    🇫🇷 Français
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="it"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#it"
                  >
                    🇮🇹 Italiano
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="es"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#es"
                  >
                    🇪🇸 Español
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="nl"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#nl"
                  >
                    🇳🇱 Nederlands
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="pt"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#pt"
                  >
                    🇵🇹 Português
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="sv"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#sv"
                  >
                    🇸🇪 Svenska
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="ja"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#ja"
                  >
                    🇯🇵 日本語
                  </Link>
                </div>
                <div>
                  <Link
                    hrefLang="ko"
                    className="hover:underline text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300"
                    href="#ko"
                  >
                    🇰🇷 한국어
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
