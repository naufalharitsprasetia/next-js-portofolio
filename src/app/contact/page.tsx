"use client";

import ClickSpark from "../../components/reactbits/ClickSpark";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Send, ExternalLink } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/naufalharitsprasetia",
    icon: <FaGithub className="mr-2" size={20} />,
    hover: "hover:bg-gray-800 dark:hover:bg-gray-700",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/naufal-harits-prasetia-35b443283/",
    icon: <FaLinkedin className="mr-2" size={20} />,
    hover: "hover:bg-blue-600 dark:hover:bg-blue-700",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/naufalharisprasetia",
    icon: <FaInstagram className="mr-2" size={20} />,
    hover: "hover:bg-pink-500 dark:hover:bg-pink-600",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@naufalharitsprasetia7208",
    icon: <FaYoutube className="mr-2" size={20} />,
    hover: "hover:bg-red-500 dark:hover:bg-red-600",
  },
  {
    name: "Gmail",
    href: "mailto:naufalharisprasetia@gmail.com",
    icon: <IoIosMail className="mr-2" size={20} />,
    hover: "hover:bg-blue-500 dark:hover:bg-blue-600",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/6281220594202",
    icon: <FaWhatsapp className="mr-2" size={20} />,
    hover: "hover:bg-green-500 dark:hover:bg-green-600",
  },
  {
    name: "Pinterest",
    href: "https://id.pinterest.com/naufalharisprasetia/",
    icon: <FaPinterest className="mr-2" size={20} />,
    hover: "hover:bg-red-500 dark:hover:bg-red-600",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = form;
    const phoneNumber = "6281220594202"; // Ganti ke format internasional
    const text = `Halo, saya ${name}.\n\n*Email:* ${email}\n*Subjek:* ${subject}\n*Pesan:* ${message}`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url, "_blank"); // buka di tab baru
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ClickSpark
        sparkColor="#2b7fff"
        sparkSize={12}
        sparkRadius={16}
        sparkCount={8}
        duration={400}
      >
        <div className="main-container">
          <div className="container-contact max-w-7xl mx-auto px-6 lg:px-20 pb-12 pt-20">
            {/*  */}
            <div className="container mx-auto my-12 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Contact Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                  Interested in working together? Fill out the form below and
                  I`ll get back to you as soon as possible.
                </p>
              </div>

              <div className="bg-card text-card-foreground w-full border border-gray-200 dark:border-gray-800 shadow-lg rounded-md overflow-hidden">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <div className="tracking-tight text-xl font-semibold">
                    Send Message
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Fill out the form below to get in touch with me directly.
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <form className="space-y-1" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none ml-2"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="flex h-9 w-full mt-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-1 text-base md:text-sm shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <div className="h-5" />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          type="email"
                          placeholder="Your email address"
                          className="flex h-9 w-full mt-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-1 text-base md:text-sm shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <div className="h-5" />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none ml-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message"
                        className="flex mt-2 h-9 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-1 text-base md:text-sm shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="h-5" />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none ml-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={5}
                        className="flex mt-2 min-h-[60px] w-full resize-none rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-base md:text-sm shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="h-5" />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex justify-end rounded-md">
                      <button
                        type="submit"
                        className="cursor-pointer inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-md bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-3 font-medium text-base shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Send size={20} className="mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="lets-connect text-center my-12">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Let`s Connect !
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 px-4">
                  Feel free to contact me for collaboration or project
                  discussion
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 sm:px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-gray-800 dark:text-white rounded-lg sm:rounded-md shadow-lg border border-gray-200/50 dark:border-slate-700/50 ${link.hover} hover:text-white transition-all duration-300 group text-sm sm:text-base`}
                  >
                    {link.icon}
                    <span className="hidden xs:inline">{link.name}</span>
                    <ExternalLink
                      className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity"
                      size={14}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </>
  );
}
