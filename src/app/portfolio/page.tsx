"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from 'next/image';
import Layout from "../components/layout/Layout";

export default function Skill() {
  return (
    <Layout>
    <div className="w-full max-w-full bg-yellow-100 py-6">
      <section>
        {/* Skills Section */}
        <div className="flex flex-col items-center text-center space-y-12">
          <Image
            src="/web.png"
            alt=""
            width={500}
            height={500}
            className="object-contain"
          />
          <button className="w-[300px] h-[74px] sm:w-[250px] sm:h-[70px] lg:w-[300px] lg:h-[74px] border-[6px] border-solid border-[#854D0E] font-bold text-[30px] sm:text-[25px] lg:text-[30px] leading-[138.68%] text-[#854D0E] bg-yellow-100 hover:bg-yellow-300 transition-colors duration-300">
            Skills
          </button>
          <div>
            <p className="text-[#854D0E]">
              I have a strong foundation in the following programming languages:
            </p>
            <h4 className="font-bold text-[#854D0E]">
              HTML, CSS, JavaScript, and TypeScript
            </h4>
            <p className="text-[#854D0E]">
              In addition to coding, I excel in graphic design, where I've created
              everything from:
            </p>
            <h4 className="font-bold text-[#854D0E]">
              Posters, flyers, logos, to full-fledged web design
            </h4>
          </div>
        </div>
      </section>
    </div>
    </Layout>

  );
}
