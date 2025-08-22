"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/Service";
import ReviewCard from "@/components/Review";
import FloatingParticles from "@/components/Particles";
import LoadingScreen from "@/components/Loading";
import SuccessScreen from "@/components/Success";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          mobile: e.target.mobile.value,
          service: e.target.service.value,
          message: e.target.message.value
        })
      });

      const data = await res.json();
      
      if (res.ok) {
        setShowSuccess(true);
        e.target.reset();
      } else {
        alert(data.message || "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };
  
  const Services = [
    { key: 1, Title: "تركيب التكييف", Emoji: "❄️", Feature1: "تكييفات سبليت", Feature2: "تكييفات شباك", Feature3: "تمديد المواسير والعوازل" },
    { key: 2, Title: "صيانة وإصلاح", Emoji: "🔧", Feature1: "إصلاح أعطال التبريد", Feature2: "شحن غاز الفريون", Feature3: "فحص وضبط الأداء" },
    { key: 3, Title: "تنظيف", Emoji: "🧹", Feature1: "تنظيف الفلاتر", Feature2: "تنظيف المواسير الداخلية", Feature3: "إزالة الأتربة والعفن" },
    { key: 4, Title: "أنظمة التكييف المركزية", Emoji: "🏢", Feature1: "تركيب تكييفات مركزية جديدة", Feature2: "صيانة الأنظمة المركزية", Feature3: "تحديث أنظمة التحكم" }
  ];
  
  const Reviews = [
    { key: 1, Name: "Muna", Location: "Giza", Rate: 5, Message: "فنى فوق الممتاز خلوق ويرعى ربنا ف شغله بجد الف شكر" },
    { key: 2, Name: "Kareem", Location: "Faiyum", Rate: 5, Message: "ماشاء الله فني محترم نضيف فاهم في شغله بالتوفيق" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <LoadingScreen isLoading={isLoading} />
      <SuccessScreen isVisible={showSuccess} onClose={handleCloseSuccess} />
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white pb-20 pt-20 md:pb-40 md:pt-40">
        <FloatingParticles density={90} />
        <div className="container mx-auto px-4 relative">
          <div className="gap-12 items-center">
            <div className="text-right">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                خدمات التبريد والتكييف
                <span className="block text-cyan-200">المهنية</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    const offset = 40;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer"
                >
                  احصل على استشارة
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">خدماتنا المميزة</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              يقدم فريق باور اكس العديد من الخدمات المتنوعه ومنها
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Services.map((service) => (
              <ServiceCard
                key={service.key}
                Title={service.Title}
                Emoji={service.Emoji}
                Feature1={service.Feature1}
                Feature2={service.Feature2}
                Feature3={service.Feature3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="gap-12 items-center ">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-right">من نحن</h2>
              <p className="text-lg text-gray-600 mb-6 text-right">
                نحن فريق باور اكس متخصصون في التبريد والتكييف بخبرة 10 سنوات، نقدم حلول تركيب وصيانة وتنظيف بأعلى جودة لضمان راحتك وأداء مثالي لأجهزتك
              </p>
              <div className="space-y-4 flex flex-col items-end text-right">
                <div className="flex items-center flex-row-reverse gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-right">خبرة 10 سنوات في التبريد والتكييف</span>
                </div>
                <div className="flex items-center flex-row-reverse gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-right">خدمات تركيب، صيانة، وتنظيف</span>
                </div>
                <div className="flex items-center flex-row-reverse gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-right">جودة عالية وسرعة في الإنجاز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white cursor-default">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                2000+
              </div>
              <p className="text-blue-100">عميل راضي</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                1000+
              </div>
              <p className="text-blue-100">مشروع مكتمل</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                10
              </div>
              <p className="text-blue-100">سنة خبرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">آراء العملاء</h2>
            <p className="text-xl text-gray-600">
              وهنا بعض آراء احدي العملاء الراضين عن المشاريع التي تم تسليمها
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Reviews.map((review) => (
              <ReviewCard
                key={review.key}
                Name={review.Name}
                Rate={review.Rate}
                Location={review.Location}
                Message={review.Message}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">اتصل بنا</h2>
            <p className="text-xl text-gray-600">يمكنك التواصل معنا عن طريق ملئ نموذج أو مكالمة هاتفيه</p>
          </div>
          <div className="grid xl:grid-cols-2 gap-12">
            <div className="xl:order-1 order-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">معلومات الاتصال</h3>
                <div className="space-y-4 flex items-end flex-col">
                  <div className="flex items-center flex-row-reverse gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📞</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">الهاتف</p>
                      <p className="text-gray-600">+20 10 0701 9959</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-row-reverse gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📞</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">الهاتف</p>
                      <p className="text-gray-600">+20 11 2164 2772</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:order-2 order-2 bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">أرسل لنا رسالة</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4" style={{ direction: 'rtl' }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      الاسم الأول
                      <span className="text-red-500 mr-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="الاسم الأول"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                      الاسم الأخير
                      <span className="text-red-500 mr-1">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="الاسم الأخير"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    <span className="text-red-500 mr-1">*</span>
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="رقم الهاتف"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    <span className="text-red-500 mr-1">*</span>
                    اختر الخدمة المطلوبة
                  </label>
                  <select name="service" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right">
                    <option value="">اختر الخدمة المطلوبة</option>
                    <option value="تركيب التكييف">تركيب التكييف</option>
                    <option value="صيانة وإصلاح">صيانة وإصلاح</option>
                    <option value="تنظيف">تنظيف</option>
                    <option value="أنظمة التكييف المركزية">أنظمة التكييف المركزية</option>
                    <option value="أخري">أخري</option>
                  </select>
                </div>
                <textarea
                  placeholder="تفاصيل الطلب"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  إرسال الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}