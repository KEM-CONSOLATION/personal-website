"use client";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { fadeInAnimation } from "@/utils/framerAnimations";
import { Breadcrumbs } from "@/components";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />
      <AnimatePresence mode="wait">
        <motion.main
          className="container mx-auto flex min-h-screen items-center justify-center text-neutral-900 dark:text-white"
          {...fadeInAnimation}
        >
          <motion.div className="page-content" {...fadeInAnimation}>
            <div className="z-10 mx-auto flex max-w-2xl flex-col items-center justify-center gap-16 px-2 pt-36 pb-16 text-center sm:px-8 lg:py-20">
              <article className="z-10 grid gap-10">
                <div className="space-y-5">
                  <h1 className="text-3xl font-black tracking-widest uppercase">
                    Contact
                  </h1>
                  <p className="mx-auto max-w-lg text-sm leading-loose tracking-wider text-neutral-600 dark:text-gray-400">
                    Reach me directly via email or WhatsApp. I&apos;ll get back
                    to you as soon as possible.
                  </p>
                </div>

                <div className="grid gap-10 text-sm">
                  <div className="grid gap-2">
                    <h2 className="text-lg font-bold tracking-widest">Email</h2>
                    <p className="leading-loose tracking-wider text-neutral-600 dark:text-gray-400">
                      <a
                        href="mailto:consolationlotachi@gmail.com"
                        className="underline-offset-2 hover:underline"
                      >
                        consolationlotachi@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <h2 className="text-lg font-bold tracking-widest">
                      WhatsApp
                    </h2>
                    <p className="leading-loose tracking-wider text-neutral-600 dark:text-gray-400">
                      <a
                        href="https://wa.me/2347031896845"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        +234 703 189 6845
                      </a>
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <h2 className="text-lg font-bold tracking-widest">
                      Time Zone
                    </h2>
                    <p className="leading-loose tracking-wider text-neutral-600 dark:text-gray-400">
                      GMT+1
                    </p>
                  </div>
                </div>
              </article>

              <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:consolationlotachi@gmail.com"
                  className="inline-flex w-full max-w-xs cursor-pointer items-center justify-center gap-3 rounded-xl bg-neutral-200 px-8 py-4 text-sm tracking-wider uppercase shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 dark:bg-zinc-800"
                >
                  <BiLogoGmail className="text-xl" />
                  <span>Email Me</span>
                </a>

                <a
                  href="https://wa.me/2347031896845?text=Hello!%20I'd%20like%20to%20get%20in%20touch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-xs cursor-pointer items-center justify-center gap-3 rounded-xl bg-neutral-200 px-8 py-4 text-sm tracking-wider uppercase shadow-2xl transition-all hover:-translate-y-1 active:translate-y-1 dark:bg-zinc-800"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
