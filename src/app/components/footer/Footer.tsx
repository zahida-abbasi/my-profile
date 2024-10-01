"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-yellow-100 via-yellow-700 to-yellow py-8 px-4 text-center">
      <div className="mx-auto flex flex-col items-center justify-center">

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-6">
          <a
            href="https://github.com/zahida-abbasi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-yellow-400 text-yellow-200 p-3 rounded-full bg-gradient-to-r from-yellow-900 via-yellow-700 to-black"
            style={{ fontSize: "2rem" }}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:zaheda.abbasi@gmail.com"
            className="transition-transform transform hover:scale-110 hover:text-yellow-400 text-yellow-200 p-3 rounded-full bg-gradient-to-r from-yellow-900 via-yellow-700 to-black"
            style={{ fontSize: "2rem" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://web.facebook.com/zahida.abbasi.1481"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-yellow-600 text-yellow-200 p-3 rounded-full bg-gradient-to-r from-yellow-900 via-yellow-700 to-black"
            style={{ fontSize: "2rem" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com/in/zahida-abbasi-2849012b0"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-yellow-500 text-yellow-200 p-3 rounded-full bg-gradient-to-r from-yellow-900 via-yellow-700 to-black"
            style={{ fontSize: "2rem" }}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Rights Reserved */}
        <p className="text-sm text-black mt-6">
          &copy; {new Date().getFullYear()} zahida abbasi | All Rights Reserved
        </p>
      </div>
    </footer>

  );
}
