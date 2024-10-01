"use client";
import Layout from "../components/layout/Layout";
import React from "react";

export default function Contact() {
  return (
    <Layout>
     <section className="mb-10 mt-5">
      <div className="items-center text-center bg-yellow-100 mx-auto px-4 lg:px-8 py-8">
        <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-yellow-800 font-bold text-center mb-12 mt-12 text-yellow-900 lg:text-4xl md:text-4xl text-3xl leading-[138.68%] hover:bg-yellow-200">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-700 via-yellow-800 to-yellow-600 font-serif lg:text-5xl md:text-5xl text-4xl">
            Me
          </span>
        </button>
        <form className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent text-left rounded-lg border-2 border-yellow-800 border-r-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* For full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold text-yellow-900"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="box text-yellow-900 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-yellow-800 bg-transparent rounded w-full focus:bg-yellow-200 focus:text-yellow-900"
                />
              </div>

              {/* For email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-yellow-900"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="box text-yellow-900 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-yellow-800 bg-transparent rounded w-full focus:bg-yellow-200 focus:text-yellow-900"
                />
              </div>

              {/* For phone number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-yellow-900"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  className="box text-yellow-900 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-yellow-800 bg-transparent rounded w-full focus:bg-yellow-200 focus:text-yellow-900"
                />
              </div>

              {/* For Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-yellow-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="box text-yellow-900 mt-1 p-2 sm:p-3 rounded border-l-2 border-b-2 border-yellow-800 bg-transparent w-full focus:bg-yellow-200 focus:text-yellow-900"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-yellow-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="box text-yellow-900 mt-1 p-2 sm:p-3 h-32 sm:h-48 rounded border-l-2 border-b-2 border-yellow-800 bg-transparent w-full resize-none focus:bg-yellow-200 focus:text-yellow-900"
                />
              </div>
              <button
                type="submit"
                className="btn w-full p-2 sm:p-3 text-yellow-900 font-bold rounded border-l-4 border-r-4 border-yellow-800 bg-yellow-400 transition-colors hover:bg-yellow-800 hover:text-white"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    </Layout>
  );
}
