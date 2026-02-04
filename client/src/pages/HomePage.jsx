import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {
  CheckCircle2,
  Calendar,
  BarChart3,
  Zap,
  Palette,
  Users,
  ArrowRight,
  Clock,
  Target,
  Trophy,
  Smartphone,
  Moon,
  Sun,
} from "lucide-react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    return localStorage.getItem("homepage-theme") || "light";
  });

  useEffect(() => {
    // Update document class and localStorage when theme changes
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("homepage-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Task Master
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8 mb-20">
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              🚀 Productivity Reimagined
            </div>
          </div>

          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Organize Your Life,{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Master Your Goals
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An all-in-one task management platform designed to boost your productivity. 
            Track, schedule, and achieve your goals with powerful tools at your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Start Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500K+</div>
              <div className="text-sm text-muted-foreground">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
          <div className="relative bg-card border border-border rounded-2xl p-8 min-h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Powerful Features</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to stay organized and productive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Cards */}
          <FeatureCard
            icon={<CheckCircle2 className="h-8 w-8" />}
            title="Smart Task Management"
            description="Create, organize, and prioritize your tasks with ease. Track progress and never miss a deadline."
          />

          <FeatureCard
            icon={<Calendar className="h-8 w-8" />}
            title="Calendar Integration"
            description="Visualize your tasks on a beautiful calendar. Plan your days and weeks at a glance."
          />

          <FeatureCard
            icon={<Clock className="h-8 w-8" />}
            title="Focus Timer"
            description="Boost productivity with built-in Pomodoro timer. Track your focus sessions and build momentum."
          />

          <FeatureCard
            icon={<BarChart3 className="h-8 w-8" />}
            title="Advanced Analytics"
            description="Gain insights into your productivity with detailed statistics and performance metrics."
          />

          <FeatureCard
            icon={<Palette className="h-8 w-8" />}
            title="Customization"
            description="Light and dark themes, customizable categories, and personalized workspace layout."
          />

          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Lightning Fast"
            description="Experience blazing fast performance with instant updates and real-time synchronization."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">How It Works</h3>
          <p className="text-muted-foreground text-lg">Simple steps to boost your productivity</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <StepCard step={1} title="Sign Up" description="Create your free account in seconds" />
          <StepCard step={2} title="Add Tasks" description="Start adding your goals and tasks" />
          <StepCard step={3} title="Track Progress" description="Monitor your achievements in real-time" />
          <StepCard step={4} title="Achieve More" description="Build habits and reach your goals" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold">Why Choose Task Master?</h3>
            <p className="text-muted-foreground text-lg">
              Join thousands of users who have transformed their productivity with Task Master.
            </p>

            <div className="space-y-4">
              <BenefitItem icon={<Target className="h-6 w-6" />} text="Goal-oriented approach to task management" />
              <BenefitItem icon={<Trophy className="h-6 w-6" />} text="Gamified achievement system to stay motivated" />
              <BenefitItem icon={<Users className="h-6 w-6" />} text="Community features and shared goals" />
              <BenefitItem icon={<Smartphone className="h-6 w-6" />} text="Responsive design - works everywhere" />
            </div>

            <Link to="/register">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-primary">TESTIMONIAL</div>
                <p className="text-lg font-medium">
                  "Task Master completely changed how I manage my daily work. The focus timer and analytics are game-changers!"
                </p>
                <div className="text-sm text-muted-foreground">- Sarah M., Productivity Enthusiast</div>
              </div>

              <div className="border-t border-border pt-6 space-y-2">
                <div className="text-sm font-semibold text-primary">QUICK STATS</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Productivity Increase</span>
                    <span className="font-semibold text-lg">+45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Goal Completion Rate</span>
                    <span className="font-semibold text-lg">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">User Satisfaction</span>
                    <span className="font-semibold text-lg">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl"></div>
          <div className="relative space-y-6">
            <h3 className="text-4xl font-bold">Ready to Master Your Tasks?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our community of productive individuals. Start your free account today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Already a Member? Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold">Task Master</h4>
              </div>
              <p className="text-sm text-muted-foreground">Your ultimate productivity companion</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Task Master. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition">Twitter</a>
              <a href="#" className="hover:text-foreground transition">GitHub</a>
              <a href="#" className="hover:text-foreground transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <Card className="border border-border/50 hover:border-primary/50 transition-colors group hover:shadow-lg">
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-4">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

// Step Card Component
const StepCard = ({ step, title, description }) => (
  <div className="relative text-center">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
      {step}
    </div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
    {step < 4 && (
      <div className="absolute -right-4 top-8 hidden lg:block text-2xl text-muted-foreground/30">
        →
      </div>
    )}
  </div>
);

// Benefit Item Component
const BenefitItem = ({ icon, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
      {icon}
    </div>
    <span className="text-lg">{text}</span>
  </div>
);

export default HomePage;
