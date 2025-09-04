'use client';
import { useState, useEffect } from 'react';
import { MapPin, Calendar, Award, Code, Brain, Coffee, Gamepad2, Dumbbell } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: "Children's National Hospital",
      role: "Research Intern",
      location: "Washington, DC",
      period: "August 2020 – June 2021",
      color: "from-neutral-300 to-neutral-500", 
      highlights: [
        "Analyzed 33 newborn brain scans for maternal stress effects",
        "Lead authored published research on cerebellar connectivity",
        "Hypertuned 3D U-Net for fetal fMRI segmentation"
      ],
      commentary: [
        "My first real research experience - I had no idea what I was doing but was determined to figure it out.",
        "Getting published as a high schooler felt impossible until it actually happened.",
        "This experience taught me that asking the right questions is more important than having all the answers."
      ]
    },
    {
      company: "WashU School of Medicine",
      role: "Research Intern",
      location: "St. Louis, MO",
      period: "September 2021 – December 2022", 
      color: "from-neutral-400 to-neutral-600",
      highlights: [
        "DeepLabCut + MATLAB research for dystonia diagnosis",
        "Processed 300 videos for ML training",
        "Established protocol for computer-assisted gait analysis"
      ],
      commentary: [
        "This was where I first realized the power of machine learning in healthcare - truly life-changing stuff.",
        "Manually processing 300 videos taught me patience and attention to detail like nothing else could.",
        "Working with doctors and seeing how technology could help kids with cerebral palsy was incredibly humbling."
      ]
    },
    {
      company: "Bonhome",
      role: "Full-stack SWE Intern",
      location: "St. Louis, MO", 
      period: "June 2022 – August 2022",
      color: "from-accent-rose to-secondary",
      highlights: [
        "Platform connecting 30 parents with daycare providers",
        "1-on-1 chat using GraphQL collections",
        "AWS Geo location-based provider search"
      ],
      commentary: [
        "My first real full-stack project - seeing parents actually use what I built was incredibly rewarding.",
        "GraphQL was completely new to me, but the learning curve taught me to embrace unfamiliar technologies.",
        "Working on something that helps families in my hometown made the work feel deeply meaningful."
      ]
    },
    {
      company: "Capital One",
      role: "Associate SWE → SWE Intern",
      location: "McLean, VA",
      period: "June 2023 – February 2025",
      color: "from-accent-orange to-accent-gold",
      highlights: [
        "Cloud app monitoring 100M+ customers for marketing decisions",
        "Optimization reducing audit logs by 10x, cutting costs 60%",
        "Local testing workflow increasing bandwidth by 800%",
        "Angular web app for 44M accounts, mobile-first design"
      ],
      commentary: [
        "My first taste of enterprise-scale engineering - 100 million users puts every decision in perspective.",
        "Learning that small optimizations at scale can save millions of dollars was mind-blowing.",
        "The culture of innovation at Capital One taught me to always question 'why do we do it this way?'"
      ]
    },
    {
      company: "Grand Charter",
      role: "Founding Engineer",
      location: "New York City, NY",
      period: "February 2025 – Present",
      color: "from-accent-purple to-primary",
      highlights: [
        "Built platform with 3 products, 120 SQL tables streamlining litigation",
        "Created dashboard managing 50 attorneys, 8000 leads/month, reduced SQL by 90%",
        "Pioneered financing flow: $6000 funding → projected $24,000 return",
        "Integrated with major firms, increasing revenue by $4000/month"
      ],
      commentary: [
        "Starting at a startup right after college was terrifying but exhilarating - I had to learn everything from scratch.",
        "Building systems that handle real money and legal cases taught me the importance of bulletproof architecture.",
        "Working directly with attorneys showed me how technology can genuinely transform traditional industries."
      ]
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "R", "MATLAB"],
    "Frameworks": ["NextJS", "Vue", "Angular", "React"],
    "Cloud & Tools": ["AWS", "GCP", "Git", "Docker"],
    "Specialties": ["Machine Learning", "Full-Stack Development", "Cloud Architecture"]
  };

  const interests = [
    { icon: <Brain className="w-5 h-5" />, text: "Brain teasers & Sudoku" },
    { icon: <Coffee className="w-5 h-5" />, text: "Cooking experiments" },
    { icon: <Gamepad2 className="w-5 h-5" />, text: "Video games & Movies" },
    { icon: <Dumbbell className="w-5 h-5" />, text: "Weightlifting & Lacrosse" },
    { icon: <Code className="w-5 h-5" />, text: "Mechanical keyboards" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light via-neutral-50 to-neutral-100 dark:from-background-dark dark:via-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="font-display text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent-purple to-accent-orange bg-clip-text text-transparent mb-6">
              Learning about the world by building for it.
            </h1>
            <div className="space-y-2 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-body">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                                  DC&nbsp;&nbsp;|&nbsp;&nbsp;St.Louis&nbsp;&nbsp;|&nbsp;&nbsp;Chicago&nbsp;&nbsp;|&nbsp;&nbsp;New York City
              </p>
              <p>Building the future, one line of code at a time.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Experience Timeline - Sequential Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Journey Title */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              The Journey
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-lg">
              My professional experience over the years
            </p>
          </div>
          
          {/* Journey Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color}/5 dark:${exp.color}/10 rounded-3xl`}></div>
                  
                  <div className="relative p-8">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Main resume content */}
                      <div className={`${isLeft ? '' : 'lg:col-start-2'}`}>
                        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-700/50 shadow-xl">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}>
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                {exp.company}
                              </h3>
                              <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                                {exp.role}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6 text-neutral-500 dark:text-neutral-400 mb-6">
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </p>
                            <p className="font-medium">{exp.period}</p>
                          </div>
                          
                          <ul className="space-y-3">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                                <span className="font-body leading-relaxed">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Commentary */}
                      <div className={`${isLeft ? '' : 'lg:col-start-1'}`}>
                        <div className="space-y-6">
                          {exp.commentary.map((comment, i) => (
                            <div key={i} className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-md rounded-xl p-6 border border-neutral-200/50 dark:border-neutral-700/50 shadow-md">
                              <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed font-medium italic">
                                "{comment}"
                              </p>
                              <div className={`w-8 h-1 bg-gradient-to-r ${exp.color} rounded-full mt-4`}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post-Journey Content */}
      <div>
          {/* Academic Foundation & Technical Skills - Two Column Layout */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Academic Foundation */}
                <div>
                  <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-700/50">
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-8 h-8 text-accent-gold" />
                      <h2 className="font-heading text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                        Academic Foundation
                      </h2>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                          Washington University in St. Louis
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                          Bachelor of Science in Computer Science + Mathematics
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
                          August 2021 – May 2024
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                            <span className="font-semibold">Perfect GPA: 4.0/4.0</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                            <span>Summa Cum Laude Graduate</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>AWS Solutions Architect Certified</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">Key Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                          {["Data Structures & Algorithms (TA)", "ML Theory", "Cryptography", "Linear Statistical Models", "Graph Theory"].map((course, i) => (
                            <span key={i} className="px-3 py-1 bg-gradient-to-r from-accent-purple/20 to-primary/20 rounded-full text-xs font-medium">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-700/50">
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="w-8 h-8 text-primary" />
                      <h2 className="font-heading text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                        Technical Arsenal
                      </h2>
                    </div>
                    <div className="space-y-6">
                      {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {items.map((skill, i) => (
                              <span key={i} className="px-4 py-2 bg-white/70 dark:bg-neutral-700/70 backdrop-blur-sm rounded-lg text-sm font-medium border border-neutral-200/50 dark:border-neutral-600/50 hover:scale-105 transition-transform duration-200">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Touch */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
                Beyond the Code
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                When I'm not architecting systems or debugging complex algorithms, you'll find me exploring 
                diverse passions that fuel my creativity and problem-solving approach.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {interests.map((interest, i) => (
                  <div key={i} className="bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-200/50 dark:border-neutral-700/50 hover:scale-105 transition-transform duration-200 group">
                    <div className="text-primary group-hover:text-accent-purple transition-colors duration-200 mb-2 flex justify-center">
                      {interest.icon}
                    </div>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {interest.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-r from-primary/10 via-accent-purple/10 to-accent-orange/10 rounded-2xl p-8 border border-neutral-200/50 dark:border-neutral-700/50">
                <h2 className="font-heading text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                  Let's Build Something Amazing
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Whether it's discussing the latest in ML theory, brainstorming innovative solutions, 
                  or just chatting about mechanical keyboards – I'm always up for a good conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:nsuh813@gmail.com" 
                    className="px-6 py-3 bg-gradient-to-r from-primary to-accent-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Get In Touch
                  </a>
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="px-6 py-3 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
}

