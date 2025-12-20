import { Link } from "react-router-dom";
import { Shield, Mail, Github, Linkedin, Youtube, Facebook, Instagram, Twitter, MessageCircle, Users } from "lucide-react";

const footerLinks = {
  Platform: [
    { name: "Pricing", href: "/pricing" },
    { name: "Labs", href: "/labs" },
    { name: "Practice", href: "/practice" },
    { name: "Community", href: "/community" },
    { name: "AI Assistant", href: "/ai-assistant" },
    { name: "News", href: "/news" },
  ],
  Resources: [
    { name: "Documentation", href: "/resources" },
    { name: "Blog", href: "/news" },
    { name: "Tutorials", href: "/resources" },
    { name: "FAQ", href: "/resources" },
    { name: "Glossary", href: "/resources" },
    { name: "Study Guides", href: "/resources" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Press & Media", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/cyberlearnai" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/cyberlearnai" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@cyberlearnai" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/cyberlearnai" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/cyberlearnai" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/cyberlearnai" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.gg/cyberlearnai" },
  { name: "Reddit", icon: Users, href: "https://reddit.com/r/cyberlearnai" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Shield className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              <span className="text-xl font-bold gradient-text">Cyber Learn AI</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Bangladesh's first AI-powered cybersecurity learning platform. From beginner to job-ready ethical hacker.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@cyberlearnai.com</span>
              </div>
              <p className="text-xs text-muted-foreground">Based in Dhaka, Bangladesh 🇧🇩</p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cyber Learn AI. All rights reserved. Made with ❤️ in Bangladesh.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Empowering the next generation of ethical hackers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
