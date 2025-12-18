import {
  Check,
  ChevronUp,
  Copy,
  ExternalLink,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// Lesson data structure
const lessonsData = {
  "5eme": {
    math: {
      title: "الرياضيات",
      price: 15,
      files: [
        {
          name: "01-أتعرّف سلسلتين من الأعداد الصّحيحة الطّبيعيّة المتناسبة طردا",
          type: "pptx",
          path: "/lessons/5eme/math/01-أتعرّف سلسلتين من الأعداد الصّحيحة الطّبيعيّة المتناسبة طردا.pptx",
        },
        {
          name: "01-أتعرّف سلسلتين من الأعداد الصّحيحة الطّبيعيّة المتناسبة طردا",
          type: "docx",
          path: "/lessons/5eme/math/01-أتعرّف سلسلتين من الأعداد الصّحيحة الطّبيعيّة المتناسبة طردا.docx",
        },
        {
          name: "01-التناسب",
          type: "docx",
          path: "/lessons/5eme/math/01-التناسب.docx",
        },
      ],
    },
    physics: {
      title: "الفيزياء",
      price: 15,
      files: [
        {
          name: "01-الدّورة الدموية الصغرى و الكبرى",
          type: "pptx",
          path: "/lessons/5eme/physics/01-الدّورة الدموية الصغرى و الكبرى.pptx",
        },
        {
          name: "01-الدورة الدموية الصغرى و الكبرى",
          type: "docx",
          path: "/lessons/5eme/physics/01-الدورة الدموية الصغرى و الكبرى.docx",
        },
        {
          name: "01-الدورة الدموية الصغرى و الكبرى",
          type: "docx",
          path: "/lessons/5eme/physics/01-الدورة الدموية الصغرى و الكبرى.docx",
        },
      ],
    },
    extra: {
      title: "مواد إضافية",
      price: 10,
      files: [
        {
          name: "تمارين الدعم و العلاح - سنة خامسة",
          type: "docx",
          path: "/lessons/5eme/extra/تمارين الدعم و العلاح - سنة خامسة.docx",
        },
        {
          name: "تمارين الدعم و العلاح رياضيات - سنة خامسة",
          type: "docx",
          path: "/lessons/5eme/extra/تمارين الدعم و العلاح رياضيات - سنة خامسة.docx",
        },
        {
          name: "حل مسائل سنة خامسة",
          type: "docx",
          path: "/lessons/5eme/extra/حل مسائل سنة خامسة.docx",
        },
        {
          name: "ملف التقييم - إيقاظ علمي - سنة خامسة - الثلاثي الأول",
          type: "docx",
          path: "/lessons/5eme/extra/ملف التقييم - إيقاظ علمي - سنة خامسة - الثلاثي الأول.docx",
        },
        {
          name: "ملف التقييم رياضيات - سنة خامسة",
          type: "docx",
          path: "/lessons/5eme/extra/ملف التقييم رياضيات - سنة خامسة.docx",
        },
      ],
    },
  },
  "6eme": {
    math: {
      title: "الرياضيات",
      price: 15,
      files: [
        {
          name: "01-قسمة عدد صحيح طبيعي على 2و5",
          type: "pptx",
          path: "/lessons/6eme/math/01-قسمة عدد صحيح طبيعي على 2و5.pptx",
        },
        {
          name: "01-عدد صحيح طبيعي على 2و5",
          type: "docx",
          path: "/lessons/6eme/math/01-عدد صحيح طبيعي على 2و5.docx",
        },
        {
          name: "01-قسمة عدد صحيح طبيعي على 2و5",
          type: "docx",
          path: "/lessons/6eme/math/01-قسمة عدد صحيح طبيعي على 2و5.docx",
        },
      ],
    },
    physics: {
      title: "الفيزياء",
      price: 15,
      files: [
        {
          name: "01-تركيبة الدّم",
          type: "pptx",
          path: "/lessons/6eme/physics/01-تركيبة الدّم.pptx",
        },
        {
          name: "01- الدّم",
          type: "docx",
          path: "/lessons/6eme/physics/01- الدّم.docx",
        },
        {
          name: "01-تركيبة الدّم",
          type: "docx",
          path: "/lessons/6eme/physics/01-تركيبة الدّم.docx",
        },
      ],
    },
    extra: {
      title: "مواد إضافية",
      price: 12,
      files: [
        {
          name: "إدماج رياضيات الفترة 2 سنة سادسة",
          type: "docx",
          path: "/lessons/6eme/extra/إدماج رياضيات الفترة 2 سنة سادسة.docx",
        },
        {
          name: "الدعم و العلاج - إيقاظ علمي سنة سادسة",
          type: "docx",
          path: "/lessons/6eme/extra/الدعم و العلاج - إيقاظ علمي سنة سادسة.docx",
        },
        {
          name: "تمارين الدعم و العلاح - سنة سادسة الثلاثي الأول",
          type: "docx",
          path: "/lessons/6eme/extra/تمارين الدعم و العلاح - سنة سادسة الثلاثي الأول.docx",
        },
        {
          name: "حل مسائل سنة سادسة-Correction",
          type: "docx",
          path: "/lessons/6eme/extra/حل مسائل سنة سادسة-Correction.docx",
        },
        {
          name: "حل مسائل سنة سادسة",
          type: "docx",
          path: "/lessons/6eme/extra/حل مسائل سنة سادسة.docx",
        },
        {
          name: "مخطط الفترة 2 - 00",
          type: "docx",
          path: "/lessons/6eme/extra/مخطط الفترة 2 - 00.docx",
        },
        {
          name: "ملف التقييم - إيقاظ علمي - سنة سادسة - الثلاثي الأول",
          type: "docx",
          path: "/lessons/6eme/extra/ملف التقييم - إيقاظ علمي - سنة سادسة - الثلاثي الأول.docx",
        },
        {
          name: "ملف التقييم - سنة سادسة - الثلاثي الأول",
          type: "docx",
          path: "/lessons/6eme/extra/ملف التقييم - سنة سادسة - الثلاثي الأول.docx",
        },
      ],
    },
  },
};

// Review images
const reviews = Array(9)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    image: `/src/assets/reviews/review${i + 1}.jpg`,
    alt: `تقييم ${i + 1}`,
  }));

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array(20).fill(null);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 8 + 4 + "px",
            height: Math.random() * 8 + 4 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            background: ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"][
              Math.floor(Math.random() * 4)
            ],
            animation: `float ${Math.random() * 10 + 15}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function TeacherLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("5eme");
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedLessons, setSelectedLessons] = useState({});
  const [generatedCode, setGeneratedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const toggleLesson = (grade, subject) => {
    const key = `${grade}-${subject}`;
    setSelectedLessons((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(selectedLessons).forEach((key) => {
      if (selectedLessons[key]) {
        const [grade, subject] = key.split("-");
        total += lessonsData[grade][subject].price;
      }
    });
    return total;
  };

  const generateCode = () => {
    const selected = Object.keys(selectedLessons).filter(
      (key) => selectedLessons[key]
    );
    if (selected.length === 0) {
      setGeneratedCode("");
      return;
    }
    const code = selected
      .map((key) => {
        const [grade, subject] = key.split("-");
        return `${grade[0]}${subject[0]}`.toUpperCase();
      })
      .join("-");
    const timestamp = Date.now().toString().slice(-4);
    setGeneratedCode(`${code}-${timestamp}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppLink = () => {
    const phone = "21612345678";
    const message = `مرحباً! أود شراء الدروس التالية:%0A%0Aالكود: ${generatedCode}%0Aالمبلغ الإجمالي: ${calculateTotal()} دينار%0A%0Aسأرسل إثبات الدفع`;
    return `https://wa.me/${phone}?text=${message}`;
  };

  const total = calculateTotal();
  const currentSubjectData = lessonsData[selectedGrade][selectedSubject];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900"
      dir="rtl"
    >
      <FloatingParticles />

      {/* Navigation */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
            : "bg-gradient-to-r from-blue-500/90 to-purple-500/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-extrabold text-white">
              Teach with Oussama
            </div>

            <div className="hidden md:flex gap-8">
              {[
                { id: "hero", label: "الرئيسية" },
                { id: "lessons", label: "الدروس" },
                { id: "reviews", label: "آراء المعلمين" },
                { id: "purchase", label: "الشراء" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-white/90 hover:text-white font-medium transition-all after:content-[''] after:block after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg mt-2 mx-4 p-4">
            {[
              { id: "hero", label: "الرئيسية" },
              { id: "lessons", label: "الدروس" },
              { id: "reviews", label: "آراء المعلمين" },
              { id: "purchase", label: "الشراء" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-right py-3 text-gray-700 hover:text-blue-600 font-medium border-b last:border-b-0 border-gray-200 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 right-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            علّم بشكل أفضل، اكسب أكثر
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            موارد تعليمية متميزة للأساتذة - دروس جاهزة، عروض تقديمية، وثائق
            داعمة
          </p>
          <button
            onClick={() => scrollToSection("lessons")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-delay-2"
          >
            ابدأ التعلم الآن
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-gray-700 mt-2">معلم راضٍ</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                40+
              </div>
              <div className="text-gray-700 mt-2">درس متاح</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-700 mt-2">جودة مضمونة</div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          .animate-fade-in-delay {
            animation: fade-in 0.8s ease-out 0.2s both;
          }
          .animate-fade-in-delay-2 {
            animation: fade-in 0.8s ease-out 0.4s both;
          }
        `}</style>
      </section>

      {/* Lessons Section */}
      <section id="lessons" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            دروسنا المتاحة
          </h2>
          <p className="text-center text-gray-700 mb-12">
            اختر المستوى الدراسي والمادة لاستكشاف المحتوى
          </p>

          <div className="border-b border-gray-300 mb-8">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedGrade("5eme");
                  setSelectedSubject("math");
                }}
                className={`px-8 py-3 font-semibold border-b-4 transition-all ${
                  selectedGrade === "5eme"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                السنة الخامسة
              </button>
              <button
                onClick={() => {
                  setSelectedGrade("6eme");
                  setSelectedSubject("math");
                }}
                className={`px-8 py-3 font-semibold border-b-4 transition-all ${
                  selectedGrade === "6eme"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                السنة السادسة
              </button>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-2 mb-8 flex justify-center gap-2">
            <button
              onClick={() => setSelectedSubject("math")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedSubject === "math"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-white/50"
              }`}
            >
              الرياضيات
            </button>
            <button
              onClick={() => setSelectedSubject("physics")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedSubject === "physics"
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-white/50"
              }`}
            >
              الفيزياء
            </button>
            <button
              onClick={() => setSelectedSubject("extra")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedSubject === "extra"
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-white/50"
              }`}
            >
              مواد إضافية
            </button>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-8 border border-white/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {currentSubjectData.title}
              </h3>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentSubjectData.price} دينار
              </div>
            </div>

            <div className="space-y-3">
              {currentSubjectData.files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition border border-gray-200/50"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {file.type.toUpperCase()}
                    </span>
                    <span className="font-medium text-gray-900">
                      {file.name}
                    </span>
                  </div>
                  <a
                    href={file.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-purple-600 flex items-center gap-2 font-medium transition-colors"
                  >
                    <span>معاينة</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-700 text-sm">
                📦 يحتوي هذا الدرس على {currentSubjectData.files.length} ملفات
                تعليمية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ماذا يقول المعلمون عنا
          </h2>
          <p className="text-center text-gray-700 mb-12">
            آراء حقيقية من معلمين استخدموا موادنا
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/50 hover:-translate-y-1"
                onClick={() => {
                  setModalImage(review.image);
                  setModalOpen(true);
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-2">
                  <img
                    src={review.image}
                    alt={review.alt}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            اختر دروسك
          </h2>
          <p className="text-center text-gray-700 mb-12">
            حدد الدروس التي تريدها واحصل على كودك الخاص
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {["5eme", "6eme"].map((grade) => (
                <div
                  key={grade}
                  className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6 border border-white/50"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {grade === "5eme" ? "السنة الخامسة" : "السنة السادسة"}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(lessonsData[grade]).map(
                      ([subject, data]) => (
                        <label
                          key={subject}
                          className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-lg cursor-pointer hover:bg-white/80 transition border border-gray-200/50"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={
                                selectedLessons[`${grade}-${subject}`] || false
                              }
                              onChange={() => toggleLesson(grade, subject)}
                              className="w-5 h-5 rounded accent-blue-600"
                            />
                            <span className="font-semibold text-gray-900">
                              {data.title}
                            </span>
                          </div>
                          <span className="text-blue-600 font-bold">
                            {data.price} د.ت
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky top-20 h-fit">
              <div className="bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm rounded-xl shadow-md p-8 border-2 border-purple-200/50">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ملخص الطلب
                </h3>

                <div className="space-y-4 mb-6">
                  {Object.entries(selectedLessons)
                    .filter(([_, selected]) => selected)
                    .map(([key]) => {
                      const [grade, subject] = key.split("-");
                      const data = lessonsData[grade][subject];
                      return (
                        <div
                          key={key}
                          className="flex justify-between items-center py-2 border-b border-gray-200"
                        >
                          <span className="text-gray-900">
                            {data.title} -{" "}
                            {grade === "5eme" ? "خامسة" : "سادسة"}
                          </span>
                          <span className="font-bold text-gray-900">
                            {data.price} د.ت
                          </span>
                        </div>
                      );
                    })}
                </div>

                <div className="text-3xl font-bold mb-6 py-4 bg-white/80 backdrop-blur-sm rounded-lg text-center border border-gray-200">
                  المجموع:{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {total}
                  </span>{" "}
                  دينار
                </div>

                <button
                  onClick={generateCode}
                  disabled={total === 0}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed py-4 rounded-lg font-bold text-lg mb-4 transition-all text-white shadow-md"
                >
                  توليد الكود
                </button>

                {generatedCode && (
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">
                      الكود الخاص بك:
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                      <span className="font-mono text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {generatedCode}
                      </span>
                      <button
                        onClick={copyToClipboard}
                        className="hover:scale-110 transition text-blue-600"
                      >
                        {copied ? (
                          <Check className="text-green-600" size={24} />
                        ) : (
                          <Copy size={24} />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {generatedCode && (
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all text-white shadow-md"
                  >
                    <MessageCircle size={24} />
                    أرسل عبر واتساب
                  </a>
                )}
              </div>

              {/* Payment Instructions */}
              <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6 border border-white/50">
                <h4 className="font-bold text-lg mb-3 text-gray-900">
                  طرق الدفع:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• تحويل بنكي</li>
                  <li>• D17</li>
                  <li>• دفع مباشر</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  بعد الدفع، أرسل الكود وإثبات الدفع عبر واتساب
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            أكاديمية أسامة
          </div>
          <p className="text-gray-300 mb-6">موارد تعليمية متميزة للأساتذة</p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="hover:text-blue-400 transition">
              البريد الإلكتروني
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              الهاتف
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              واتساب
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 جميع الحقوق محفوظة - أكاديمية أسامة
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-8 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={modalImage}
              alt="عرض مكبر"
              className="max-w-full max-h-full object-contain"
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
              }}
            />
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-red-500 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
