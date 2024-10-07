import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar'
import Footer from '../components/footer';

const Technologypage = () => {
  const technologies = [
    {
      title: "Quality Department Equipments",
      image: "/assets/quality-equipment.jpg",
      items: [
        "Bursting Strength Tester",
        "Digital GSM Testing Machine",
        "L&W Tensile Tester",
        "Digital Thickness Gauge",
        "Roll Resistance Tester",
        "pH Meter Digital",
        "RH and Cup Viscometer",
        "Bar Code Reader",
        "TechCheck with Graphics Scanner"
      ]
    },
    {
      title: "Cutting-Edge Machinery for Cartons",
      image: "/assets/carton-machinery.jpg",
      items: [
        "Polar Guillotine - 115",
        "Heidelberg XL 75 - 5 Color + Coater",
        "Komori GL640 - 6 Color + Coater",
        "Autoprint DION 450",
        "DGM Foil UV",
        "Techno Pasta Laminators",
        "Heidelberg Full Automatic Die Cutting",
        "Bobst Die Cutting - 76E",
        "Bobst Novacut 2.0 - 106",
        "Automat Die Cutting",
        "Steuer Folder Die Cutting",
        "Suba Stripping and Blanking"
      ]
    },
    {
      title: "Prepress Technology",
      image: "/assets/prepress-tech.jpg",
      items: [
        "ESKO Packaging Prepress Software",
        "FFEI CTP",
        "Opus & screen CTP Processor",
        "AGS Sample Maker",
        "Color Management & Quality Inspection"
      ]
    },
    {
      title: "Precision Machinery For Inserts",
      image: "/assets/precision-machinery.jpg",
      items: [
        "Heidelberg SM52 4 Color",
        "Rotatek RK250",
        "Autoprint DION 450",
        "Welbound 6 Clamp",
        "Welbound Perfect Binding"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="/assets/tech-hero.jpg"
          alt="Technology at Velpack" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-24">
          <h1 className="text-white text-5xl font-bold">OUR TECHNOLOGIES</h1>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-red-700 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl font-bold text-center mb-4">
            STATE OF THE ART MACHINERY
          </h2>
          <p className="text-white text-center mb-12">
            With state-of-the-art machinery and advanced manufacturing processes, Velpack delivers precision and quality in every product.
          </p>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex bg-white rounded-lg overflow-hidden">
                <div className="w-1/3">
                  <img 
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-red-600 text-2xl font-bold mb-4">{tech.title}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, i) => (
                      <p key={i} className="text-gray-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Technologypage;
