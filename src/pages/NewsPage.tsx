import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, Tag, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredArticle = {
  title: "Major Ransomware Attack Targets Bangladeshi Financial Institutions",
  excerpt: "Recent cyber attacks highlight the urgent need for skilled cybersecurity professionals in Bangladesh. Learn how organizations can protect themselves and why cybersecurity education is more important than ever.",
  date: "December 18, 2024",
  readTime: "8 min read",
  category: "News",
  image: "🔒",
};

const articles = [
  {
    title: "OWASP Top 10 2024: What's New and What Changed",
    excerpt: "The latest OWASP Top 10 brings significant updates to web application security priorities.",
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Security",
  },
  {
    title: "Getting Started with Bug Bounty Hunting in Bangladesh",
    excerpt: "A complete guide for Bangladeshi students looking to earn while learning through bug bounty programs.",
    date: "December 12, 2024",
    readTime: "10 min read",
    category: "Career",
  },
  {
    title: "Introduction to Kali Linux 2024.4",
    excerpt: "Explore the new features and tools in the latest Kali Linux release for penetration testing.",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Tools",
  },
  {
    title: "How AI is Changing Cybersecurity Defense",
    excerpt: "Machine learning and AI are revolutionizing how we detect and respond to cyber threats.",
    date: "December 8, 2024",
    readTime: "7 min read",
    category: "AI",
  },
  {
    title: "CEH vs OSCP: Which Certification Should You Choose?",
    excerpt: "Compare the two most popular ethical hacking certifications and find the right path for you.",
    date: "December 5, 2024",
    readTime: "8 min read",
    category: "Certification",
  },
  {
    title: "Protecting Against Phishing: Bangladesh Edition",
    excerpt: "Common phishing tactics targeting Bangladeshi users through bKash, Nagad, and social media.",
    date: "December 3, 2024",
    readTime: "6 min read",
    category: "Awareness",
  },
];

const categories = ["All", "News", "Security", "Career", "Tools", "Certification", "Awareness", "AI"];

const trending = [
  "SQL Injection Prevention",
  "OSCP Study Tips",
  "Bug Bounty Platforms",
  "Kali Linux Commands",
  "XSS Attacks",
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                📰 News & Blog
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Cybersecurity <span className="gradient-text">News & Insights</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest cybersecurity news, tutorials, and career insights tailored for Bangladeshi students.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      index === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Featured Article */}
              <div className="bg-card border border-border rounded-2xl p-6 mb-8 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground mb-4">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="font-semibold mb-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <div className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Trending Topics</h3>
                </div>
                <div className="space-y-2">
                  {trending.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary cursor-pointer transition-all"
                    >
                      <span className="text-lg font-bold text-muted-foreground/50">
                        #{index + 1}
                      </span>
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-2">Subscribe to Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get weekly cybersecurity tips and news delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-sm"
                  />
                  <Button variant="hero" className="w-full">Subscribe</Button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Ethical Hacking", "OWASP", "CTF", "Linux", "Python", "Networking", "Malware", "Forensics"].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full hover:text-primary cursor-pointer transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
