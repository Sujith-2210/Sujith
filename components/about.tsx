"use client"

import Image from "next/image"
import { DialogueBox, StatCard, PixelPanel } from "./retro-ui"

export default function About() {
  return (
    <section className="relative z-10 py-24 bg-background dark:bg-slate-950 border-t-4 border-primary dark:border-cyan-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-16 animate-pixel-wipe">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance font-mono text-primary dark:text-cyan-400 neon-cyan">
            {'>> ABOUT SUJITH'}
          </h2>
          <p className="text-xs text-muted-foreground dark:text-gray-400 font-mono">
            {'[ LOADING PROFILE DATA... ]'}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Bio and Stats */}
          <div className="space-y-6">
            {/* Bio Dialogue Box */}
            <DialogueBox color="cyan">
              I'm a passionate AI Engineer specializing in Multi-Agent Systems, Large Language Models, and Generative AI. 
              My journey started with a curiosity about how machines can understand and interact with the world autonomously.
            </DialogueBox>

            {/* Experience Dialogue */}
            <DialogueBox color="magenta">
              With expertise in deep learning, computer vision, and agentic AI, I've built systems ranging from medical diagnosis 
              to autonomous agents. Currently pursuing B.Tech in Computer Science with AI Specialization at KKR&KSR Institute.
            </DialogueBox>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard 
                title="CGPA" 
                value="8.97" 
                max={10}
                color="cyan"
              />
              <StatCard 
                title="Patents" 
                value="2" 
                color="magenta"
              />
            </div>

            {/* More Stats */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard 
                title="Projects" 
                value="20+" 
                color="lime"
              />
              <StatCard 
                title="Internships" 
                value="10+" 
                color="cyan"
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="border-4 border-cyan-500 overflow-hidden" 
              style={{
                boxShadow: '0 0 16px rgba(0, 255, 255, 0.4), inset 0 0 16px rgba(0, 255, 255, 0.1)',
              }}
            >
              <Image
                src="/images/6d5e378b-a5a8-429d-8f59-2644c45ea050.jpeg"
                alt="Tenali Sujith Kumar at hackathon event"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-magenta-500 bg-slate-900"
              style={{
                boxShadow: '0 0 12px rgba(255, 0, 255, 0.3)',
              }}
            >
              <div className="p-2 text-center text-xs text-magenta-400 font-mono font-bold flex items-center justify-center h-full">
                {'AI'}
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-cyan-400 font-mono neon-cyan">
            {'[ SPECIALIZATIONS ]'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* AI & Multi-Agent */}
            <PixelPanel color="cyan" title="MULTI-AGENT SYSTEMS">
              <p className="text-xs text-gray-300 font-mono leading-relaxed mb-3">
                Building autonomous agents that collaborate, reason, and solve complex problems through multi-step planning and tool integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-900 border border-cyan-500 text-xs text-cyan-400 font-mono">
                  Agents
                </span>
                <span className="px-2 py-1 bg-cyan-900 border border-cyan-500 text-xs text-cyan-400 font-mono">
                  LLMs
                </span>
                <span className="px-2 py-1 bg-cyan-900 border border-cyan-500 text-xs text-cyan-400 font-mono">
                  RAG
                </span>
              </div>
            </PixelPanel>

            {/* Deep Learning */}
            <PixelPanel color="magenta" title="DEEP LEARNING">
              <p className="text-xs text-gray-300 font-mono leading-relaxed mb-3">
                Building neural networks for computer vision, NLP, and time-series prediction with state-of-the-art performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-magenta-900 border border-magenta-500 text-xs text-magenta-400 font-mono">
                  CNN
                </span>
                <span className="px-2 py-1 bg-magenta-900 border border-magenta-500 text-xs text-magenta-400 font-mono">
                  Vision
                </span>
                <span className="px-2 py-1 bg-magenta-900 border border-magenta-500 text-xs text-magenta-400 font-mono">
                  NLP
                </span>
              </div>
            </PixelPanel>

            {/* Generative AI */}
            <PixelPanel color="lime" title="GENERATIVE AI">
              <p className="text-xs text-gray-300 font-mono leading-relaxed mb-3">
                Leveraging diffusion models, LLMs, and GANs to create innovative applications that push AI boundaries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-lime-900 border border-lime-500 text-xs text-lime-400 font-mono">
                  GenAI
                </span>
                <span className="px-2 py-1 bg-lime-900 border border-lime-500 text-xs text-lime-400 font-mono">
                  LLM Fine-tune
                </span>
                <span className="px-2 py-1 bg-lime-900 border border-lime-500 text-xs text-lime-400 font-mono">
                  Prompting
                </span>
              </div>
            </PixelPanel>
          </div>
        </div>
      </div>
    </section>
  )
}
