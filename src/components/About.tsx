import { useState } from 'react';
import { MapPin, Mail, Phone, Download } from 'lucide-react';
import { SectionId } from '../types';
import { DEV_NAME, DEV_EMAIL, DEV_LOCATION, DEV_PHONE } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const titleRef = useScrollReveal();
  const imageRef = useScrollReveal(0.15);
  const contentRef = useScrollReveal(0.2);

  return (
    <section id={SectionId.ABOUT} className="min-h-screen flex items-center py-20 md:py-32 relative px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="text-center mb-20 scroll-reveal">
          <span className="text-orange-400 font-medium tracking-wider text-sm uppercase mb-2 block">Who am I?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative scroll-reveal-left">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="relative w-full h-full bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-3xl p-2 border border-white/10">
                {imgError ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl text-white text-6xl font-bold">IB</div>
                ) : (
                  <img
                    src="/ib.png"
                    alt={DEV_NAME}
                    className="w-full h-full object-cover rounded-2xl"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6 scroll-reveal-right">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
              Full Stack Developer & AI Integrations
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I'm a self-taught Full Stack Developer with hands-on experience building{' '}
                <span className="text-orange-400 font-semibold">complete web applications from scratch</span> — not just tutorials, but real products used by real people.
              </p>

              <p>
                My most significant project is <span className="text-rose-400 font-semibold">eTrans</span>, a complete transit management ERP I built for a logistics company: shipment tracking with 15 workflow stages, automated customs duty calculation, PDF invoice generation, JWT authentication, and{' '}
                <span className="text-purple-400 font-semibold">Google Gemini AI assistant</span> integration.
              </p>

              <p>
                I also built a <span className="text-orange-400 font-semibold">REST API for image analysis</span> (face detection, OCR, explicit content detection) using FastAPI and Docker, and a real estate management platform with role-based dashboards.
              </p>

              <p>
                What I bring to every project:{' '}
                <span className="text-white font-semibold">clean code, real architecture decisions, and a developer who actually finishes what he starts.</span>
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-slate-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <MapPin className="text-orange-400 w-5 h-5" />
                </div>
                <span>{DEV_LOCATION}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="text-orange-400 w-5 h-5" />
                </div>
                <a href={`mailto:${DEV_EMAIL}`} className="hover:text-orange-400 transition-colors">
                  {DEV_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Phone className="text-orange-400 w-5 h-5" />
                </div>
                <span>{DEV_PHONE}</span>
              </div>
            </div>

            <a
              href="/CV-Ibrahim-Barry.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 mt-6"
            >
              <Download className="w-5 h-5" />
              Download my CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
