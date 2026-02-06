import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Link as LinkIcon, Send, Github, Loader2, Terminal } from "lucide-react";

const RecruitmentSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Capture the form element immediately so we don't lose it during the 'await'
    const form = e.currentTarget; 
    
    setLoading(true);

    // ... Your API call or Timer goes here ...
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    alert("Application initialized.");

    // 2. Clear all inputs
    form.reset(); 
  };

  return (
    <section id="join" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Header - Matches Projects Section */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-3">
            <span className="text-primary text-glow-cyan">Join Protocol</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            /root/recruitment/apply --force
          </p>
        </div>

        {/* The Card - Uses your 'gradient-border' class */}
        <div className="gradient-border p-1 bg-card rounded-xl">
          <div className="bg-background/95 backdrop-blur-sm p-8 rounded-[10px] h-full">
            
            <div className="flex items-center gap-2 mb-8 text-primary/80">
              <Terminal size={18} />
              <span className="font-mono text-xs tracking-wider uppercase">Initialize Application Sequence</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Agent Name
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Tony Stark" 
                    required 
                    className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/60 font-mono"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Comms Channel
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="mail@example.com" 
                    required 
                    className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/60 font-mono"
                  />
                </div>
              </div>

              {/* Resume Input */}
              <div className="space-y-2">
                <label htmlFor="resume" className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Source Code / Resume
                </label>
                <div className="relative group">
                  <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="resume" 
                    name="resume" 
                    type="url" 
                    placeholder="https://github.com/..." 
                    required 
                    className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/60 font-mono"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full font-mono text-lg h-12 mt-4 relative overflow-hidden group"
                disabled={loading}
              >
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      COMPILING...
                    </>
                  ) : (
                    <>
                      EXECUTE <Send size={16} />
                    </>
                  )}
                </span>
              </Button>

            </form>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px bg-border flex-1" />
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Or authenticate via</span>
              <div className="h-px bg-border flex-1" />
            </div>

            <Button variant="outline" className="w-full mt-6 border-primary/20 hover:bg-primary/10 hover:text-primary font-mono group">
              <Github className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              GitHub Auth
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;