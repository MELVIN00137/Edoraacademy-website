import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Star, 
  ChevronDown, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Calendar,
  Clock,
  Target,
  Music,
  Calculator,
  Crown,
  Brain,
  Zap,
  Shield,
  Heart,
  Sparkles,
  ChevronRight,
  MessageCircle,
  UserCheck,
  GraduationCap
} from 'lucide-react';

interface Course {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  ageRange: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    interests: '',
    timing: '',
    tutorPreference: ''
  });

  const courses: Course[] = [
    {
      title: "Academic Subjects",
      description: "Math, Science, English, Social Studies - comprehensive curriculum support",
      icon: <BookOpen className="h-8 w-8" />,
      features: ["Curriculum aligned", "Homework help", "Exam preparation", "Concept clarity"],
      ageRange: "Grade 1-12"
    },
    {
      title: "Abacus",
      description: "Mental math mastery through traditional abacus techniques",
      icon: <Calculator className="h-8 w-8" />,
      features: ["Mental calculation", "Speed & accuracy", "Brain development", "Competition prep"],
      ageRange: "Age 5-14"
    },
    {
      title: "Vedic Math",
      description: "Ancient Indian mathematical techniques for faster calculations",
      icon: <Brain className="h-8 w-8" />,
      features: ["Quick calculations", "Pattern recognition", "Mental agility", "Confidence building"],
      ageRange: "Age 8-16"
    },
    {
      title: "Guitar",
      description: "Learn acoustic and electric guitar with personalized instruction",
      icon: <Music className="h-8 w-8" />,
      features: ["Chord progressions", "Song learning", "Music theory", "Performance skills"],
      ageRange: "Age 6+"
    },
    {
      title: "Piano",
      description: "Classical and contemporary piano lessons for all skill levels",
      icon: <Music className="h-8 w-8" />,
      features: ["Technique building", "Sheet music reading", "Repertoire development", "Recital preparation"],
      ageRange: "Age 5+"
    },
    {
      title: "Chess",
      description: "Strategic thinking and competitive chess training",
      icon: <Crown className="h-8 w-8" />,
      features: ["Opening strategies", "Tactical patterns", "Endgame mastery", "Tournament prep"],
      ageRange: "Age 6+"
    }
  ];

  const steps: Step[] = [
    {
      number: "01",
      title: "Book Free Demo",
      description: "Schedule your first demo class at your convenience - completely free with no strings attached",
      icon: <Calendar className="h-8 w-8" />
    },
    {
      number: "02", 
      title: "Try Multiple Tutors",
      description: "Take unlimited demo classes with different tutors until you find the perfect match for your child",
      icon: <Users className="h-8 w-8" />
    },
    {
      number: "03",
      title: "Choose Your Tutor",
      description: "Select the tutor who connects best with your child's learning style and personality",
      icon: <UserCheck className="h-8 w-8" />
    },
    {
      number: "04",
      title: "Begin Classes",
      description: "Start regular classes only when you're completely satisfied with your tutor choice",
      icon: <GraduationCap className="h-8 w-8" />
    }
  ];

  const features: Feature[] = [
    {
      title: "Personalized Tutor Matching",
      description: "Our unique process ensures you find the perfect tutor who understands your child's learning style",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Unlimited Demo Classes",
      description: "Take as many demo classes as you need - no pressure, no commitment until you're happy",
      icon: <Sparkles className="h-8 w-8" />
    },
    {
      title: "Flexible Scheduling",
      description: "Classes that fit your family's schedule with easy rescheduling options",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Modern Teaching Methods",
      description: "Interactive digital tools and engaging techniques that make learning fun and effective",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress reports to monitor your child's growth",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "Safe Learning Environment",
      description: "Secure online platform with verified tutors and parental oversight features",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      role: "Parent of Arjun (Grade 7)",
      content: "The demo classes were a game-changer! We found the perfect math tutor for Arjun. Now he actually looks forward to his classes and his grades have improved dramatically.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Ananya (Age 10)",
      content: "Edora Academy's approach is brilliant. No pressure to commit until we were completely satisfied. Ananya's piano teacher is amazing - patient, skilled, and makes every lesson enjoyable.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Meera Patel",
      role: "Parent of Rohan (Grade 5)",
      content: "The chess coaching has been exceptional. Rohan went from knowing basic moves to winning his school tournament in just 6 months. The tutor's teaching style perfectly matched Rohan's learning pace.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "What subjects or skills does Edora Academy offer?",
      answer: "We offer live weekly classes in Abacus, Vedic Math, Piano, Guitar, and academic subjects like Physics and Chemistry. We can also arrange sessions for additional skills such as languages, programming, or other areas based on student interest."
    },
    {
      question: "Are the classes live or pre-recorded?",
      answer: "All classes at Edvora Academy are conducted live by experienced tutors, ensuring interactive sessions with personalized attention and real-time doubt clearing."
    },
    {
      question: "How can I enroll in a class?",
      answer: "After choosing the skill you want to learn, click the demo button to connect with us on WhatsApp. Share your availability, book a free demo, and once the tutor is confirmed, you can proceed with regular weekly classes."
    },
    {
      question: "Can I choose my own tutor?",
      answer: "Yes, our flexible plans allow you to select from a range of qualified tutors, based on your learning style, goals, and subject requirements."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
New Demo Booking Request:

Student Name: ${formData.name}
Parent Email: ${formData.email}
Phone Number: ${formData.phone}
Grade/Age: ${formData.grade}
Subjects of Interest: ${formData.interests}
Preferred Timing: ${formData.timing}
Tutor Preference: ${formData.tutorPreference}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:admin@edoraacademy.com?subject=New Demo Booking Request - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success popup
    setShowSuccessPopup(true);
    
    // Clear form
    setFormData({ name: '', email: '', phone: '', grade: '', interests: '', timing: '', tutorPreference: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://i.postimg.cc/KY11gf7M/3.png" 
                alt="Edora Academy" 
                className="h-28 w-28 object-contain"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('courses')} className="text-black hover:text-teal-600 transition-colors">Courses</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-black hover:text-teal-600 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('why-us')} className="text-black hover:text-teal-600 transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-black hover:text-teal-600 transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('demo')} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">Book Free Demo</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('courses')} className="block w-full text-left px-3 py-2 text-black hover:bg-gray-50 rounded-md">Courses</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-2 text-black hover:bg-gray-50 rounded-md">How It Works</button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-3 py-2 text-black hover:bg-gray-50 rounded-md">Why Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-black hover:bg-gray-50 rounded-md">Reviews</button>
              <button onClick={() => scrollToSection('demo')} className="block w-full text-left px-3 py-2 bg-teal-600 text-white rounded-md mt-2">Book Free Demo</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Empower Your Child with 
            <span className="text-teal-600 block mt-2">Modern Learning</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Personalized, skill-focused online classes for academic brilliance and beyond. 
            <span className="font-semibold text-teal-600"> Experience quality online education!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.open('https://api.whatsapp.com/send/?phone=%2B917305800520&text&type=phone_number&app_absent=0', '_blank');
              }}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Free Demo</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>See How It Works</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-gray-600">Parent Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From academics to creative skills, we offer personalized instruction across diverse subjects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border-2 border-gray-100 hover:border-teal-600">
                <div className="p-6">
                  <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="text-sm text-teal-600 font-medium mb-4">{course.ageRange}</div>
                  
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => scrollToSection('demo')}
                    className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 group-hover:transform group-hover:scale-105 duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://api.whatsapp.com/send/?phone=%2B917305800520&text&type=phone_number&app_absent=0', '_blank');
                    }}
                  >
                    <span>Try Free Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">Our unique process ensures you find the perfect tutor match</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{step.icon}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Edvora Academy Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Edora Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're revolutionizing online education with our student-first approach</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white hover:bg-gray-50 transition-colors border border-gray-100 hover:border-teal-600 group">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Parents Say</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">Real stories from families who found their perfect tutor match</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="text-center md:text-left flex-1">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">"{testimonials[currentTestimonial].content}"</p>
                  <div>
                    <div className="font-semibold text-black">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-500">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-white' : 'bg-teal-400'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our programs</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-black">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Booking Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Book Your Free Demo Class</h2>
              <p className="text-xl text-gray-600 mb-6">Experience our teaching methodology firsthand!</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 md:p-12 border-2 border-teal-600">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Student's Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Parent's Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-black mb-2">Grade/Age *</label>
                    <select
                      id="grade"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    >
                      <option value="">Select grade/age</option>
                      <option value="kindergarten">Kindergarten (Age 5-6)</option>
                      <option value="grade1-3">Grade 1-3 (Age 6-9)</option>
                      <option value="grade4-6">Grade 4-6 (Age 9-12)</option>
                      <option value="grade7-9">Grade 7-9 (Age 12-15)</option>
                      <option value="grade10-12">Grade 10-12 (Age 15-18)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-black mb-2">Subjects of Interest *</label>
                  <select
                    id="interests"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    value={formData.interests}
                    onChange={(e) => setFormData({...formData, interests: e.target.value})}
                  >
                    <option value="">Select subject</option>
                    <option value="academic">Academic Subjects (Math, Science, English)</option>
                    <option value="abacus">Abacus</option>
                    <option value="vedic-math">Vedic Math</option>
                    <option value="guitar">Guitar</option>
                    <option value="piano">Piano</option>
                    <option value="chess">Chess</option>
                    <option value="multiple">Multiple Subjects</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timing" className="block text-sm font-medium text-black mb-2">Preferred Timing</label>
                    <select
                      id="timing"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      value={formData.timing}
                      onChange={(e) => setFormData({...formData, timing: e.target.value})}
                    >
                      <option value="">Select timing</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="tutorPreference" className="block text-sm font-medium text-black mb-2">Tutor Preference</label>
                    <select
                      id="tutorPreference"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      value={formData.tutorPreference}
                      onChange={(e) => setFormData({...formData, tutorPreference: e.target.value})}
                    >
                      <option value="">No preference</option>
                      <option value="male">Male tutor</option>
                      <option value="female">Female tutor</option>
                      <option value="experienced">Most experienced</option>
                      <option value="young">Younger tutor</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Free Demo</span>
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">By booking a demo, you agree to our terms of service and privacy policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">About Edora Academy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Edora Academy, we believe every child deserves a tutor who truly understands their unique learning style. 
              That's why we've revolutionized online education with our unlimited demo approach - ensuring perfect tutor-student matches 
              before any commitment is made.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our expert tutors combine academic excellence with fun, engaging teaching methods that make learning an adventure. 
              From traditional academics to creative skills like music and strategic thinking through chess, we nurture well-rounded development.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Student-First Approach</h3>
                <p className="text-gray-600">Every decision we make prioritizes student happiness and learning success</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Proven Excellence</h3>
                <p className="text-gray-600">Track record of academic improvement and skill development across all subjects</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">Perfect Matches</h3>
                <p className="text-gray-600">Our unique process ensures ideal tutor-student compatibility every time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Edora Academy</h3>
              <p className="text-gray-400 mb-4">Empowering students with personalized online education.</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/edoraacademy/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/edora_academy/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition-colors">Courses</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
                <li><button onClick={() => scrollToSection('why-us')} className="hover:text-white transition-colors">Why Us</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Reviews</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Academic Subjects</li>
                <li className="hover:text-white transition-colors cursor-pointer">Abacus</li>
                <li className="hover:text-white transition-colors cursor-pointer">Vedic Math</li>
                <li className="hover:text-white transition-colors cursor-pointer">Guitar & Piano</li>
                <li className="hover:text-white transition-colors cursor-pointer">Chess</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 7305800520</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>admin@edoraacademy.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bangalore</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-center text-gray-400">
              <p className="text-gray-400">&copy; 2025 Edora Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">Your free demo booking is confirmed. Our team will contact you shortly.</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;