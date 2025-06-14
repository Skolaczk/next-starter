import Link from "next/link";

import { AuthControls } from "@/components/auth-controls";
import { Icons } from "@/components/icons";
import { StripeButton } from "@/components/stripe-button";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";

const HomePage = async () => {
  const session = await auth();

  return (
    <>
      <header className="w-full border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-lg font-bold">
            next-starter
          </Link>
          <div className="flex items-center gap-2">
            <AuthControls session={session} />
          </div>
        </div>
      </header>
      <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="mb-1 font-mono text-4xl leading-tight font-extrabold tracking-tighter [word-spacing:-0.5rem] md:text-5xl">
          <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
            Next.js
          </span>{" "}
          starter template
        </h1>
        <p className="text-muted-foreground max-w-2xl md:text-lg">
          A Next.js starter template, packed with features like TypeScript,
          Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.
          Jumpstart your project with efficiency and style.
        </p>
        <div className="mt-2 flex gap-4">
          {session ? (
            <StripeButton />
          ) : (
            <Link
              href="https://github.com/Skolaczk/next-starter/blob/main/README.md#getting-started"
              target="_blank"
              className={buttonVariants({ size: "lg" })}
            >
              Get started
            </Link>
          )}
          <Link
            href="https://github.com/Skolaczk/next-starter"
            target="_blank"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <Icons.github /> Github
          </Link>
        </div>
      </section>
      <footer className="text-muted-foreground absolute bottom-3 w-full text-center text-sm">
        © {new Date().getFullYear()} By{" "}
        <Link
          href="https://michalskolak.pl"
          className={buttonVariants({ variant: "link", className: "!p-0" })}
        >
          Michał Skolak
        </Link>
      </footer>
    </>
  );
};

export default HomePage;
