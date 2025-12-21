import { CheckCircle2, Circle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const roadmapPhases = [
  {
    phase: 1,
    title: "Foundation",
    duration: "1-2 Months",
    completed: true,
    skills: [
      { name: "Computer Networking Basics", done: true },
      { name: "Linux Command Line", done: true },
      { name: "Basic Programming (Python)", done: true },
      { name: "Security Fundamentals", done: false },
    ],
  },
  {
    phase: 2,
    title: "Core Security",
    duration: "2-3 Months",
    completed: false,
    skills: [
      { name: "Network Security", done: false },
      { name: "Cryptography Basics", done: false },
      { name: "Web Application Security", done: false },
      { name: "Malware Analysis Intro", done: false },
    ],
  },
  {
    phase: 3,
    title: "Specialization",
    duration: "3-4 Months",
    completed: false,
    skills: [
      { name: "Penetration Testing", done: false },
      { name: "Vulnerability Assessment", done: false },
      { name: "Incident Response", done: false },
      { name: "Security Automation", done: false },
    ],
  },
  {
    phase: 4,
    title: "Professional",
    duration: "Ongoing",
    completed: false,
    skills: [
      { name: "Advanced Exploitation", done: false },
      { name: "Cloud Security", done: false },
      { name: "Bug Bounty Hunting", done: false },
      { name: "Security Research", done: false },
    ],
  },
];

export function SkillRoadmapSection() {
  return (
    <section id="skill-roadmap" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-mono mb-4">
            SKILL ROADMAP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Your <span className="text-purple-400">Learning Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured roadmap to guide your cybersecurity learning from beginner to professional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-primary to-muted hidden md:block" />
            
            <div className="space-y-8">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="md:ml-20">
                    <div className={`p-6 rounded-xl border transition-all ${
                      phase.completed 
                        ? "bg-purple-500/10 border-purple-500/50" 
                        : "bg-background border-border hover:border-purple-500/30"
                    }`}>
                      {/* Phase indicator */}
                      <div className="absolute left-0 top-6 hidden md:flex items-center justify-center w-16">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          phase.completed 
                            ? "bg-purple-500 text-white" 
                            : "bg-secondary border-2 border-purple-500/30"
                        }`}>
                          <span className="font-mono font-bold">{phase.phase}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="md:hidden w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-400 font-mono text-sm">
                          {phase.phase}
                        </span>
                        <h3 className="text-lg font-semibold">{phase.title}</h3>
                        <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                          {phase.duration}
                        </span>
                        {phase.completed && (
                          <span className="text-xs font-mono px-2 py-1 rounded bg-purple-500/20 text-purple-400">
                            In Progress
                          </span>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {phase.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2">
                            {skill.done ? (
                              <CheckCircle2 className="h-4 w-4 text-purple-400" />
                            ) : (
                              <Circle className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className={`text-sm ${skill.done ? "text-foreground" : "text-muted-foreground"}`}>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {index < roadmapPhases.length - 1 && (
                    <div className="flex justify-center py-2 md:hidden">
                      <ArrowDown className="h-5 w-5 text-purple-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/learn">
              <Button variant="hero" className="gap-2">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
