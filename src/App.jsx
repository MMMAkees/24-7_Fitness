import "./App.css";

const programs = [
  {
    icon: "fitness_center",
    title: "Weight Training",
    text: "Build foundational strength and muscle hypertrophy with precision equipment.",
  },
  {
    icon: "monitoring",
    title: "Cardio Performance",
    text: "Optimize your cardiovascular health with high-tech endurance training.",
  },
  {
    icon: "self_improvement",
    title: "Zen Yoga",
    text: "Enhance flexibility and mental focus in a focused glassmorphic studio.",
  },
  {
    icon: "bolt",
    title: "CrossFit Elite",
    text: "High-intensity functional training for those who demand the extreme.",
  },
  {
    icon: "person_apron",
    title: "Personal Training",
    text: "One-on-one coaching with our elite trainers for bespoke fitness goals.",
  },
  {
    icon: "restaurant",
    title: "Nutrition Guide",
    text: "Personalized diet plans to fuel your performance and recovery.",
  },
];

const features = [
  [
    "verified",
    "Certified Trainers",
    "Industry-leading experts at your service.",
  ],
  [
    "precision_manufacturing",
    "Modern Equipment",
    "Next-gen biometric fitness tech.",
  ],
  ["schedule", "Flexible Timing", "Your schedule, your workout."],
  ["nutrition", "Diet Guidance", "Complete nutritional ecosystem."],
  ["psychology", "Personal Coaching", "Tailored mental and physical plans."],
  ["all_inclusive", "Open 24/7", "Relentless access, zero excuses."],
];

const trainers = [
  {
    name: "Alex Rivera",
    role: "CrossFit Lead",
    quote: "Pushing boundaries is a daily discipline, not a one-time event.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxJabe9sD3DtrGxxe1d0SWHlXT-89CbcuLJWPlyckH0leIiPr-CKtYPyj1Ze0SNL6hWkE00AxxeotOooG3ebiuMdj26mmsn5dricjCC2HhsiOV1v3IV46JA0iUmc096G0M10E7xu0udHiDrAvd1chmsinxaomGMKMuWS5kOOcvWM4MGIW1R0CqVjNNtsf0dypDzuhK4MZfHBhh0kbeojBbt1QB6IcI8UVARY6t5bwZee9FkeJZgPn2fu_KcBpZHs-XyaliAnxXyjoK",
  },
  {
    name: "Sarah Chen",
    role: "Yoga & Pilates",
    quote: "Balance is the foundation upon which all true strength is built.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBanR1bjqkuuFYh7vDdqOm3jZENmv1LgKsVlYzYsbyZWXmKr_xIvAUeZOkSTLiWAJwHcfNdUyiGYiDxXl_5IiHbTZp_Uf5mP8dzTHL22-YvBeMTlKe_PQWILZ2vQW7rYCQ1g31impXx5IGoVrP_ghiVJvTamicyg-x4FYhYOb_LBssNv8BqxF7Rf0Si3pw2c_1OPJ-VGyLJwatVb2rviOmwdebYg2l4YwWdfE6_F0YrZ9MQod24-ENO8hdD66JBLKg2ywUjzb-QTCvv",
  },
];

const plans = [
  {
    name: "Basic",
    price: "$29",
    cta: "Select Plan",
    features: [
      ["check_circle", "24/7 Access"],
      ["check_circle", "Standard Locker Access"],
      ["check_circle", "2 Guest Passes/mo"],
      ["cancel", "Personal Training", true],
    ],
  },
  {
    name: "Pro",
    price: "$59",
    cta: "Get Started Now",
    featured: true,
    features: [
      ["check_circle", "All Basic Features"],
      ["check_circle", "4 Training Sessions/mo"],
      ["check_circle", "Diet Plan Analysis"],
      ["check_circle", "Priority Class Booking"],
    ],
  },
  {
    name: "Elite",
    price: "$99",
    cta: "Select Plan",
    features: [
      ["check_circle", "All Pro Features"],
      ["check_circle", "Unlimited Training"],
      ["check_circle", "Spa & Recovery Lounge"],
      ["check_circle", "Private Suite Access"],
    ],
  },
];

const testimonials = [
  [
    "The tech integration at 24/7 Fitness is unmatched. I track every calorie and biometric stat right from my phone. It's transformed my training.",
    "James T.",
    "Member since 2022",
  ],
  [
    "Being a night owl, the 24/7 access is a lifesaver. The equipment is always pristine and the atmosphere is pure focus.",
    "Elena R.",
    "Member since 2023",
  ],
  [
    "The trainers here don't just count reps; they understand physiology. Sarah completely fixed my posture and performance.",
    "Marcus L.",
    "Member since 2021",
  ],
];

function App() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 h-20 shadow-md">
        <div className="flex justify-between items-center w-full px-container-padding max-w-[1440px] mx-auto h-full gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">
              fitness_center
            </span>
            <span className="font-headline-md text-base sm:text-headline-md font-black tracking-tighter text-on-surface whitespace-nowrap">
              24/7 FITNESS
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-primary-container font-label-bold border-b-2 border-primary-container pb-1"
              href="#"
            >
              Home
            </a>
            <a
              className="text-on-surface-variant font-label-bold hover:text-on-surface transition-colors"
              href="#programs"
            >
              Programs
            </a>
            <a
              className="text-on-surface-variant font-label-bold hover:text-on-surface transition-colors"
              href="#trainers"
            >
              Trainers
            </a>
            <a
              className="text-on-surface-variant font-label-bold hover:text-on-surface transition-colors"
              href="#plans"
            >
              Pricing
            </a>
            <a
              className="text-on-surface-variant font-label-bold hover:text-on-surface transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button className="hidden sm:block text-on-surface font-label-bold px-4 py-2 hover:text-primary-container transition-colors">
              Login
            </button>
            <button className="primary-gradient text-white font-label-bold px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
          <img
            alt="High-Performance Training Environment"
            className="w-full h-full object-cover grayscale opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN8DEJaLI3m3ti5aeRAt1ScsnV379P-GGmkkOAjxBAbu-zjp1Slhg4ECPN9dmnh-gavUO88raXmMkLQpKsbyftwWusWj9cLBJ5MIq94Axx8pcYey1SS5_EJvpQzrid35mN4cnCql3Z928eYluEM6cMPuMbvU0euK_cL-VchkBAh-b-cJjSjnIkcorQg5Fo72clw-cuCMD4TbwNg8Q1cJCUUuOq_pm8vR1dUFXB-_46stMMI590-ugi1HsZtIErqilp-s8Yt9S_RZl1"
          />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-container-padding w-full grid grid-cols-1 md:grid-cols-2 gap-gutter py-10 sm:py-16">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-display-lg leading-tight uppercase">
              Train <span className="text-gradient">Anytime.</span>
              <br />
              Transform Every Day.
            </h1>
            <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-xl">
              Unlock your full potential with world-class trainers and 24/7
              access to our premium facilities. Precision-engineered fitness for
              the high-performance lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <button className="primary-gradient text-white font-label-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                Get Started{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="glass text-white font-label-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                View Programs
              </button>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-center items-end gap-6">
            <div className="glass p-6 rounded-xl w-64 translate-x-12 glow-hover transition-all">
              <span className="text-primary-container text-headline-md font-bold">
                15k+
              </span>
              <p className="text-on-surface-variant font-label-bold">
                Active Members
              </p>
            </div>
            <div className="glass p-6 rounded-xl w-64 glow-hover transition-all">
              <span className="text-primary-container text-headline-md font-bold">
                50+
              </span>
              <p className="text-on-surface-variant font-label-bold">
                Expert Trainers
              </p>
            </div>
            <div className="glass p-6 rounded-xl w-64 translate-x-12 glow-hover transition-all">
              <span className="text-primary-container text-headline-md font-bold">
                1.2M
              </span>
              <p className="text-on-surface-variant font-label-bold">
                Calories Burned
              </p>
            </div>
          </div>
        </div>
      </header>

      <section
        id="programs"
        className="py-section-gap max-w-[1440px] mx-auto px-container-padding"
      >
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg mb-4 uppercase tracking-wider">
            Elite <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
            Science-backed training methodologies designed for maximum
            efficiency and results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {programs.map((program) => (
            <div
              key={program.title}
              className="glass p-6 sm:p-8 rounded-xl glow-hover transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl primary-gradient rounded-full"></div>
              <span
                className="material-symbols-outlined text-primary-container text-4xl mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {program.icon}
              </span>
              <h3 className="font-headline-md text-headline-md mb-2">
                {program.title}
              </h3>
              <p className="text-on-surface-variant mb-6">{program.text}</p>
              <a
                className="text-primary-container font-label-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                href="#"
              >
                Explore Program{" "}
                <span className="material-symbols-outlined">trending_flat</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-[1440px] mx-auto px-container-padding grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              alt="Modern gym interior"
              className="rounded-xl shadow-2xl relative z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEFokNhZ9W9VJNMgpAHpgt77djamnnk3ZgZCGv6vzFffEO6D-fU1aB4aQqs3wg0R-70hKVxo7mjgFhGsTBP9P05yD_zKx3Bkmm1WZh07zN-iqnjM-ieA4ATCRBXNmU7Q5qlYF1a39Vnn-Ln9U3Iy2t3YWZyI5WO5b2dmV3sDlcN-L9NzNP0Ii1gd26CiQQKw1dW_o7frU1Pz6O8HLCo0eIAiIcoyZ9XClFdDk--SD2OzNOJibk6aq1nWO-mkZEsFLvBFcFjBmMeQW"
            />
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-container/30 rounded-xl z-0"></div>
          </div>
          <div>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg mb-8 uppercase">
              Why <span className="text-gradient">Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              {features.map(([icon, title, text]) => (
                <div key={title} className="space-y-2">
                  <span className="material-symbols-outlined text-primary-container">
                    {icon}
                  </span>
                  <h4 className="font-label-bold text-on-surface">{title}</h4>
                  <p className="text-on-surface-variant text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="trainers"
        className="py-section-gap max-w-[1440px] mx-auto px-container-padding"
      >
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg mb-4 uppercase">
            Elite <span className="text-gradient">Trainers</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-5xl mx-auto">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="glass flex flex-col md:flex-row rounded-xl overflow-hidden glow-hover transition-all"
            >
              <img
                alt={trainer.name}
                className="w-full md:w-60 h-64 sm:h-80 object-cover"
                src={trainer.image}
              />
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary-container font-label-bold uppercase tracking-widest mb-4">
                  {trainer.role}
                </p>
                <p className="text-on-surface-variant mb-6 italic">
                  "{trainer.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="bg-surface py-section-gap">
        <div className="max-w-[1440px] mx-auto px-container-padding">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg mb-4 uppercase">
              Membership <span className="text-gradient">Plans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "relative primary-gradient p-[2px] rounded-xl blade-layout md:scale-105 shadow-2xl shadow-primary-container/20"
                    : "glass p-6 sm:p-10 rounded-xl blade-layout border-white/5"
                }
              >
                <div
                  className={
                    plan.featured
                      ? "bg-surface p-6 sm:p-10 rounded-xl h-full"
                      : ""
                  }
                >
                  {plan.featured ? (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-[2px]">
                      Recommended
                    </div>
                  ) : null}
                  <h3 className="font-headline-md text-headline-md mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-display-lg text-on-surface">
                      {plan.price}
                    </span>
                    <span className="text-on-surface-variant">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map(([icon, text, disabled]) => (
                      <li
                        key={text}
                        className={`flex items-center gap-3 ${disabled ? "text-white/20" : "text-on-surface-variant"}`}
                      >
                        <span
                          className={`material-symbols-outlined text-sm ${disabled ? "text-white/10" : plan.featured ? "text-primary-container" : "text-tertiary"}`}
                        >
                          {icon}
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={
                      plan.featured
                        ? "w-full primary-gradient py-4 rounded-xl font-label-bold text-white shadow-lg hover:brightness-110 transition-all"
                        : "w-full glass py-4 rounded-xl font-label-bold hover:bg-white/5 transition-all"
                    }
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-container-padding">
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg mb-10 sm:mb-16 text-center uppercase tracking-widest">
            Real <span className="text-gradient">Results</span>
          </h2>
          <div className="flex gap-gutter overflow-x-auto pb-8 snap-x no-scrollbar">
            {testimonials.map(([text, name, joined]) => (
              <div
                key={name}
                className="glass p-6 sm:p-10 rounded-xl min-w-[85vw] sm:min-w-[350px] snap-center"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={`${name}-${i}`}
                      className="material-symbols-outlined text-primary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-on-surface-variant italic mb-8">
                  "{text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full primary-gradient"></div>
                  <div>
                    <h4 className="font-label-bold">{name}</h4>
                    <p className="text-xs text-on-surface-variant">{joined}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-section-gap max-w-[1440px] mx-auto px-container-padding"
        id="contact"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap">
          <div className="glass p-10 rounded-xl">
            <h3 className="font-headline-md text-headline-md mb-6 sm:mb-8">
              Quick <span className="text-gradient">BMI Calculator</span>
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-label-bold text-on-surface-variant mb-2">
                  Weight (kg)
                </label>
                <input
                  className="w-full bg-surface border-0 border-b-2 border-white/10 focus:ring-0 focus:border-primary-container transition-all py-3 px-0 text-white placeholder:text-white/20"
                  placeholder="Enter weight"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-sm font-label-bold text-on-surface-variant mb-2">
                  Height (cm)
                </label>
                <input
                  className="w-full bg-surface border-0 border-b-2 border-white/10 focus:ring-0 focus:border-primary-container transition-all py-3 px-0 text-white placeholder:text-white/20"
                  placeholder="Enter height"
                  type="number"
                />
              </div>
              <button className="w-full primary-gradient py-4 rounded-xl font-label-bold text-white shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
                Calculate Now
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="font-headline-lg text-headline-lg uppercase">
              <span className="text-gradient">Train</span> Anywhere
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              Take the precision of 24/7 Fitness with you. Track workouts,
              stream classes, and manage your diet on the go.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
