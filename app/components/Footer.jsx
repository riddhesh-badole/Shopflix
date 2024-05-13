import { Facebook, Instagram, Pocket, Twitch, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center mt-8 space-x-6 ">
            <a href="#" className="text-gray-400 hover:text-primary/80">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary/80">
              <Twitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary/80">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary/80">
              <Twitch />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary/80">
              <Pocket />
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            <span className="text-primary">© </span>2021 SomeCompany, Inc. All
            rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
