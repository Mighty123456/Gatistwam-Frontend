import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PageHeader from '../components/layout/PageHeader';
import AnimatedElement from '../components/ui/AnimatedElement';
import { 
  Rocket, 
  Brain, 
  Globe, 
  Code, 
  Palette, 
  Users, 
  GraduationCap, 
  Heart,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = 'About Us - Gatistwam';
  }, []);

  const verticals = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Gatistwam Digital',
      description: 'Digital Marketing, Branding, Online Ads, SEO',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Gatistwam Tech',
      description: 'Web Dev, UI/UX, E-commerce, ERP/CRM, Cloud, APIs, MVPs, Custom Software, Mobile Apps',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Gatistwam Graphics',
      description: 'Printing, Packaging, Branding, Stationery, Merchandise, Displays, Signage, Gifting, Events',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Gatistwam HR',
      description: 'Recruitment, HR Outsourcing, Payroll, Talent Consulting',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Gatistwam Academy',
      description: 'Online & Offline Courses, Corporate Training',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Gatistwam Foundation',
      description: 'Ecommerce Support, Social Campaigns, Innovation & Upliftment',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <>
      <PageHeader 
        title="About Gatistwam"
        subtitle="Our Journey from Advert Marketing to a Multi-Service Powerhouse"
        bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Hero Section with Background Pattern */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container-custom relative">
          {/* Brand Evolution */}
          <AnimatedElement>
            <div className="text-center py-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <Sparkles className={`w-12 h-12 ${theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}`} />
              </motion.div>
              <h2 className="text-5xl font-bold mb-8">
                <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Our </span>
                <span className={theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}>Evolution</span>
              </h2>
              <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Our journey began as Advert Marketing, providing digital marketing support to business owners. 
                Today, we're evolving into a more powerful and expansive identity — Gatistwam — an umbrella 
                organization uniting multiple verticals under one brand.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container-custom">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-8">
                <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Watch Our </span>
                <span className={theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}>Story</span>
              </h2>
              <p className={`text-xl max-w-4xl mx-auto ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Discover how we're transforming businesses through innovation and technology
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                {/* Decorative border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 animate-gradient-x" />
                
                {/* Video container with glass effect */}
                <div className="relative bg-white/10 backdrop-blur-sm p-1 rounded-3xl">
                  <div className="aspect-w-16 aspect-h-9">
                    <video
                      className="w-full h-full object-cover rounded-2xl"
                      controls
                      preload="metadata"
                      playsInline
                      controlsList="nodownload"
                      onError={(e) => {
                        console.error('Video error:', e);
                        const videoElement = e.target as HTMLVideoElement;
                        videoElement.style.display = 'none';
                        const container = videoElement.parentElement;
                        if (container) {
                          container.innerHTML = `
                            <div class="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800 rounded-2xl">
                              <p class="text-red-500">Failed to load video. Please try refreshing the page.</p>
                            </div>
                          `;
                        }
                      }}
                    >
                      <source src="/videos/my-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-pulse" />
              </div>

              {/* Video controls styling */}
              <style>{`
                video::-webkit-media-controls {
                  background-color: rgba(0, 0, 0, 0.5);
                  border-radius: 0 0 1rem 1rem;
                }
                video::-webkit-media-controls-panel {
                  padding: 0 1rem;
                }
                video::-webkit-media-controls-fullscreen-button {
                  background-color: transparent;
                  border: none;
                  cursor: pointer;
                  padding: 0.5rem;
                  margin: 0 0.5rem;
                  border-radius: 0.25rem;
                  transition: background-color 0.2s;
                }
                video::-webkit-media-controls-fullscreen-button:hover {
                  background-color: rgba(255, 255, 255, 0.1);
                }
                video::-webkit-media-controls-fullscreen-button:active {
                  background-color: rgba(255, 255, 255, 0.2);
                }
                video:fullscreen {
                  background-color: black;
                  width: 100vw;
                  height: 100vh;
                  object-fit: contain;
                }
                video:fullscreen::-webkit-media-controls {
                  background-color: rgba(0, 0, 0, 0.7);
                  border-radius: 0;
                }
                @keyframes gradient-x {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient-x {
                  animation: gradient-x 15s ease infinite;
                  background-size: 200% 200%;
                }
              `}</style>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Our Mission</h2>
            <ul className={`space-y-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
              <li>- To offer tailored tech and branding solutions</li>
              <li>- To foster human capital through expert HR services</li>
              <li>- To enable startups with end-to-end management support</li>
              <li>- To give back through impactful CSR initiatives.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Psychology Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedElement delay={100}>
            <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-20 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                    <Brain className={`w-12 h-12 ${theme === 'light' ? 'text-primary-500' : 'text-secondary-500'}`} />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-center mb-12">
                  <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>The </span>
                  <span className={theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}>Essence of Gatistwam</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  <div className="space-y-6">
                    <h3 className={`text-2xl font-semibold ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      Sanskrit Roots
                    </h3>
                    <p className={`text-lg ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      The name Gatistwam is derived from Sanskrit, inspired by the sacred verses of Bhavani Ashtakam.
                    </p>
                    <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                          <span className={`text-2xl ${theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}`}>ग</span>
                        </div>
                        <div>
                          <p className={`text-xl font-semibold ${
                            theme === 'light' ? 'text-gray-900' : 'text-white'
                          }`}>
                            Gati (गति)
                          </p>
                          <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                            Movement, Progress, Momentum
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center">
                          <span className={`text-2xl ${theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}`}>स्व</span>
                        </div>
                        <div>
                          <p className={`text-xl font-semibold ${
                            theme === 'light' ? 'text-gray-900' : 'text-white'
                          }`}>
                            Swam (स्वम्)
                          </p>
                          <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                            Self, Ownership, Innate Power
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className={`text-2xl font-semibold ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      Our Philosophy
                    </h3>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <p className={`text-lg leading-relaxed ${
                        theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                      }`}>
                        Together, these elements embody "Momentum towards growth and transformation" — 
                        reflecting dynamic energy, self-empowerment, and forward movement, grounded in 
                        Indian ethos with a modern twist.
                      </p>
                      <div className="mt-6 flex items-center text-primary-500 dark:text-[#8BD7BB]">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Driving Innovation with Tradition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Our Verticals */}
          <AnimatedElement delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-8">
                <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Our </span>
                <span className={theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}>Verticals</span>
              </h2>
              <p className={`text-xl max-w-4xl mx-auto ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                We are building a brand that houses multiple specialized verticals, each dedicated to 
                excellence in its domain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {verticals.map((vertical, index) => (
                <motion.div
                  key={vertical.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                    style={{ backgroundImage: `linear-gradient(to bottom right, ${vertical.color})` }}
                  />
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${vertical.color} mb-6`}>
                      <div className="text-white">
                        {vertical.icon}
                      </div>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {vertical.title}
                    </h3>
                    <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                      {vertical.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedElement>

          {/* Vision Statement */}
          <AnimatedElement delay={300}>
            <div className="mt-24 text-center">
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${theme === 'light' ? 'from-primary-500 to-secondary-500' : 'from-secondary-500 to-primary-500'} mb-8`}>
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">
                <span className={theme === 'light' ? 'text-gray-900' : 'text-white'}>Our </span>
                <span className={theme === 'light' ? 'text-primary-500' : 'text-[#8BD7BB]'}>Vision</span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                To be the driving force behind transformative growth, empowering businesses and 
                individuals through innovative solutions and unwavering commitment to excellence.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default AboutPage;