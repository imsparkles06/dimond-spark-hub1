import { Github, Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    avatar: "AC",
    quote: "Code is poetry, and hackathons are our slam events.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Maya Patel",
    role: "UI/UX Wizard",
    avatar: "MP",
    quote: "Every pixel tells a story. I make sure ours wins awards.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Jordan Kim",
    role: "Backend Architect",
    avatar: "JK",
    quote: "If the frontend is the face, I'm the brain behind the operation.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 prism-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Origin Story */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-primary text-glow-cyan">The Founders</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">
              <span className="text-primary font-mono">// Origin Story</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in a dorm room at 3 AM during a debug session that turned into a breakthrough. 
              Three strangers bonded over cold pizza and a shared dream: to build things that matter. 
              What started as a spontaneous team-up at HackMIT 2022 became{" "}
              <span className="text-primary font-semibold">Team Dimond</span> — 
              named after the unbreakable bonds we formed under pressure.
            </p>
          </div>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="gradient-border rounded-xl p-6 card-hover bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 diamond-shape bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-mono font-bold text-primary-foreground glow-cyan">
                  {founder.avatar}
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-mono font-bold mb-1">{founder.name}</h3>
                <p className="text-primary text-sm font-mono mb-4">{founder.role}</p>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground italic mb-6 text-sm">
                  "{founder.quote}"
                </blockquote>

                {/* Socials */}
                <div className="flex justify-center gap-4">
                  <a
                    href={founder.socials.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={founder.socials.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={founder.socials.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
