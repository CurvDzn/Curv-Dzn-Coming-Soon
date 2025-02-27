import React, { useState, useEffect } from "react";
import {
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Zap,
  Star,
} from "lucide-react";
import logo from "../../logo.png";
function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const backgroundVideos = [
    "https://assets.mixkit.co/videos/preview/mixkit-abstract-liquid-art-background-with-purple-and-blue-paint-9760-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-107-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-orange-and-black-liquid-abstract-background-48305-large.mp4",
  ];

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotate background videos
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === backgroundVideos.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // Change video every 15 seconds

    return () => clearInterval(videoInterval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your backend or a service like Mailchimp
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background with Crossfade */}
      <div className="absolute inset-0 z-0">
        {backgroundVideos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentVideoIndex === index ? "opacity-30" : "opacity-0"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute min-w-full min-h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-orange-500/20 animate-float`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Background curved shapes with animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-orange-600/10 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-orange-400/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[30%] left-[60%] w-[40%] h-[40%] rounded-full bg-orange-500/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating 3D Objects with better images */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="3D Object"
          className="absolute w-32 h-32 object-contain opacity-20 animate-float"
          style={{ top: "15%", left: "10%", animationDelay: "0s" }}
        />
        <img
          src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="3D Object"
          className="absolute w-40 h-40 object-contain opacity-15 animate-float"
          style={{ top: "60%", right: "15%", animationDelay: "2s" }}
        />
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="3D Object"
          className="absolute w-24 h-24 object-contain opacity-15 animate-float"
          style={{ bottom: "20%", left: "20%", animationDelay: "4s" }}
        />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              border: "2px solid rgba(255, 255, 255, 0.2)",
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `spin ${Math.random() * 20 + 20}s linear infinite`,
            }}
          >
            <div
              className="w-full h-full border-2 border-orange-500/20 animate-spin-slow"
              style={{ animationDuration: `${Math.random() * 20 + 20}s` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Shooting stars animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-orange-300 animate-shooting-star"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-white">
        <div className="max-w-4xl w-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10 animate-fade-in">
          <div className="flex flex-col items-center text-center">
            {/* Logo/Brand with animation */}
            <div className="mb-6 flex flex-col items-center relative">
              <img
                src={logo}
                alt="Curv Dzn Logo"
                className="h-22 w-60 animate-float"
                style={{ animationDuration: "8s" }}
              />
              {/*   <div className="flex items-center">
               <span className="text-4xl font-bold tracking-tighter text-white animate-pulse-text">
                  Curv
                </span>
                <span
                  className="text-4xl font-light tracking-tight text-orange-500 animate-pulse-text"
                  style={{ animationDelay: "0.5s" }}
                >
                  Dzn
                </span>
                <Zap
                  className="absolute -top-4 -right-6 text-orange-400 animate-pulse-slow"
                  size={20}
                />
              </div> */}
            </div>

            {/* Main Heading with animated gradient */}
            <h1 className="h-40 text-4xl md:text-5xl lg:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-300 animate-gradient">
              Something Amazing is Coming Soon
            </h1>

            <p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              We're crafting a new experience in design. Join our waitlist to be
              the first to know when we launch.
            </p>

            {/* Countdown Timer with hover effects */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex flex-col items-center p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-400/50 hover:bg-black/60 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-orange-300">Days</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-400/50 hover:bg-black/60 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-orange-300">Hours</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-400/50 hover:bg-black/60 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-orange-300">Minutes</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 transition-all duration-300 hover:border-orange-400/50 hover:bg-black/60 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-orange-300">Seconds</div>
              </div>
            </div>

            {/* Email Subscription Form with animation */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-24 py-3 bg-black/30 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-gray-400 transition-all duration-300 focus:border-orange-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <span className="mr-1 hidden md:inline">Notify Me</span>
                  <ArrowRight size={18} className="animate-pulse-slow" />
                </button>
              </div>
              {isSubmitted && (
                <div className="mt-2 text-center text-orange-300 animate-fade-in">
                  Thank you! We'll notify you when we launch.
                </div>
              )}
            </form>

            {/* Social Media Links with hover animations */}
            <div
              className="flex space-x-4 mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              <a
                href="https://www.instagram.com/invites/contact/?i=baltv15jo78x&utm_content=wr0ozhq"
                className="p-2 rounded-full bg-black/30 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-black/30 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/curv-dzn/"
                className="p-2 rounded-full bg-black/30 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/CurvDzn"
                className="p-2 rounded-full bg-black/30 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Github size={20} />
              </a>
            </div>

            {/* Footer with animated star */}
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "1.1s" }}
            >
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Curv Dzn. All rights reserved.
              </p>
              <Star
                className="absolute -top-6 -right-8 text-orange-400 animate-pulse-slow opacity-50"
                size={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
