'use client'

import { PixelPanel, DialogueBox, PixelButton } from './retro-ui'
import Link from 'next/link'

export default function Resume() {
  return (
    <section className="relative z-10 py-24 bg-slate-950 border-t-4 border-cyan-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-pixel-wipe">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance font-mono neon-cyan">
            {'>> RESUME // CV'}
          </h2>
          <p className="text-xs text-gray-400 font-mono">
            {'[ PROFESSIONAL CREDENTIALS ]'}
          </p>
          <div className="mt-4">
            <Link href="/Sujith-IBM-664Vb.pdf" target="_blank" download>
              <PixelButton color="lime">
                {'[ DOWNLOAD PDF ]'}
              </PixelButton>
            </Link>
          </div>
        </div>

        {/* Main Resume Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Summary */}
            <PixelPanel color="cyan" title="PROFILE SUMMARY">
              <DialogueBox color="cyan">
                AI Engineer specializing in Multi-Agent Systems, Large Language Models, and Generative AI. 
                Experienced in building autonomous agents, fine-tuning models, and deploying production AI systems. 
                Passionate about creating intelligent solutions that solve real-world problems.
              </DialogueBox>
            </PixelPanel>

            {/* Experience */}
            <PixelPanel color="magenta" title="PROFESSIONAL EXPERIENCE">
              <div className="space-y-4">
                {/* IBM Experience */}
                <div className="border-l-4 border-magenta-500 pl-4">
                  <h4 className="text-sm font-bold text-magenta-400 font-mono">AI/ML ENGINEER - IBM</h4>
                  <p className="text-xs text-gray-400 font-mono mb-2">Internship Program</p>
                  <ul className="text-xs text-gray-300 font-mono space-y-1">
                    <li>{'• Developed AI-powered solutions for enterprise clients'}</li>
                    <li>{'• Implemented machine learning pipelines and model optimization'}</li>
                    <li>{'• Collaborated on production-ready AI systems'}</li>
                  </ul>
                </div>

                {/* Additional Experience */}
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-sm font-bold text-cyan-400 font-mono">VARIOUS AI/ML INTERNSHIPS (10+ ROLES)</h4>
                  <p className="text-xs text-gray-400 font-mono mb-2">Tech Companies & Research Labs</p>
                  <ul className="text-xs text-gray-300 font-mono space-y-1">
                    <li>{'• Deep learning, computer vision, NLP projects'}</li>
                    <li>{'• Multi-agent systems and autonomous agents'}</li>
                    <li>{'• Full-stack AI application development'}</li>
                  </ul>
                </div>
              </div>
            </PixelPanel>

            {/* Technical Skills */}
            <PixelPanel color="lime" title="TECHNICAL SKILLS">
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold text-lime-400 font-mono mb-1">AI/ML FRAMEWORKS</p>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'LangChain', 'Hugging Face'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-lime-900 border border-lime-500 text-xs text-lime-400 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-cyan-400 font-mono mb-1">PROGRAMMING LANGUAGES</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-cyan-900 border border-cyan-500 text-xs text-cyan-400 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-magenta-400 font-mono mb-1">CLOUD & TOOLS</p>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Git'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-magenta-900 border border-magenta-500 text-xs text-magenta-400 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </PixelPanel>

            {/* Projects */}
            <PixelPanel color="cyan" title="KEY PROJECTS (20+)">
              <div className="space-y-3">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-xs font-bold text-cyan-400 font-mono">Multi-Agent AI Systems</p>
                  <p className="text-xs text-gray-300 font-mono">Autonomous agents with tool use, planning, and reasoning</p>
                </div>
                <div className="border-l-4 border-magenta-500 pl-4">
                  <p className="text-xs font-bold text-magenta-400 font-mono">Computer Vision Applications</p>
                  <p className="text-xs text-gray-300 font-mono">Object detection, pose estimation, medical imaging</p>
                </div>
                <div className="border-l-4 border-lime-500 pl-4">
                  <p className="text-xs font-bold text-lime-400 font-mono">Generative AI Solutions</p>
                  <p className="text-xs text-gray-300 font-mono">LLM fine-tuning, RAG systems, image generation</p>
                </div>
              </div>
            </PixelPanel>
          </div>

          {/* Right Column - Stats & Achievements */}
          <div className="space-y-6">
            {/* Education */}
            <PixelPanel color="magenta" title="EDUCATION">
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold text-magenta-400 font-mono">B.TECH CSE (AI)</p>
                  <p className="text-xs text-gray-400 font-mono">KKR & KSR Institute</p>
                  <p className="text-xs text-gray-300 font-mono font-bold">CGPA: 8.97/10</p>
                </div>
              </div>
            </PixelPanel>

            {/* Achievements */}
            <PixelPanel color="lime" title="ACHIEVEMENTS">
              <ul className="space-y-2 text-xs text-gray-300 font-mono">
                <li className="flex items-start">
                  <span className="text-lime-400 mr-2">{'>'}</span>
                  <span>2 Patents Filed & Holder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-400 mr-2">{'>'}</span>
                  <span>20+ AI/ML Projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">{'>'}</span>
                  <span>10+ Internships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-magenta-400 mr-2">{'>'}</span>
                  <span>Hackathon Winner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-400 mr-2">{'>'}</span>
                  <span>Open Source Contributor</span>
                </li>
              </ul>
            </PixelPanel>

            {/* Certifications */}
            <PixelPanel color="cyan" title="CERTIFICATIONS">
              <ul className="space-y-2 text-xs text-gray-300 font-mono">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">{'✓'}</span>
                  <span>Advanced Python & ML</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">{'✓'}</span>
                  <span>Deep Learning Specialist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">{'✓'}</span>
                  <span>Cloud Computing (AWS/GCP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">{'✓'}</span>
                  <span>AI/ML Professional</span>
                </li>
              </ul>
            </PixelPanel>

            {/* Languages */}
            <PixelPanel color="magenta" title="LANGUAGES">
              <ul className="space-y-2 text-xs text-gray-300 font-mono">
                <li>{'English - Fluent'}</li>
                <li>{'Hindi - Native'}</li>
                <li>{'Telugu - Native'}</li>
              </ul>
            </PixelPanel>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center border-t-4 border-cyan-500 pt-8">
          <p className="text-xs text-gray-400 font-mono mb-4">
            {'[ NEED A FULL DOCUMENT? ]'}
          </p>
          <Link href="/Sujith-IBM-664Vb.pdf" target="_blank" download>
            <PixelButton color="cyan" className="px-8 py-3">
              {'[ DOWNLOAD RESUME PDF ]'}
            </PixelButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
