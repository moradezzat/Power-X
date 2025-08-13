"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/Service";
import ReviewCard from "@/components/Review";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

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
    alert(data.message);
  }
  
  const Services = [
    { key: 1, Title: "تركيب التكييف", Emoji: "❄️", Feature1: "", Feature2: "", Feature3: "" },
    { key: 2, Title: "صيانة وإصلاح", Emoji: "🔧", Feature1: "", Feature2: "", Feature3: "" },
    { key: 3, Title: "تنظيف", Emoji: "🧹", Feature1: "", Feature2: "", Feature3: "" },
    { key: 4, Title: "أنظمة التكييف المركزية", Emoji: "🏢", Feature1: "", Feature2: "", Feature3: "" },
    { key: 5, Title: "استشارات وتصميم", Emoji: "💡", Feature1: "", Feature2: "", Feature3: "" }
  ]
  
  const Reviews = [
    { key: 1, Name: "Muna", Location: "Giza", Rate: 5, Message: "فنى فوق الممتاز خلوق ويرعى ربنا ف شغله بجد الف شكر" },
    { key: 2, Name: "Kareem", Location: "Faiyum", Rate: 5, Message: "ماشاء الله فني محترم نضيف فاهم في شغله بالتوفيق" }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-start">
              <div className="w-full h-96 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl text-white/70">صورة رئيسية</span>
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                خدمات التبريد والتكييف
                <span className="block text-cyan-200">المهنية</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  احصل على استشارة مجانية
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  شاهد أعمالنا
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
              <div className="w-full h-96 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-2xl text-gray-400">صورة الفريق</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-right">من نحن</h2>
              <p className="text-lg text-gray-600 mb-6 text-right">
                {/* About description placeholder */}
              </p>
              <div className="space-y-4 flex flex-col items-end text-right">
                <div className="flex items-center flex-row-reverse gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-right"> {/* Feature 1 */}</span>
                </div>
                <div className="flex items-center flex-row-reverse gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-right"> {/* Feature 2 */}</span>
                </div>
                <div className="flex items-center flex-row-reverse gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-right"> {/* Feature 3 */}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                {/* Number 1 */}
              </div>
              <p className="text-blue-100">عميل راضي</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {/* Number 2 */}
              </div>
              <p className="text-blue-100">مشروع مكتمل</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {/* Number 3 */}
              </div>
              <p className="text-blue-100">سنة خبرة</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {/* Number 4 */}
              </div>
              <p className="text-blue-100">فني محترف</p>
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

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
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

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-right">أرسل لنا رسالة</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="الاسم الأخير"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                  />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="الاسم الأول"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="رقم الهاتف"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right"
                />
                <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-right">
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="تركيب التكييف">تركيب التكييف</option>
                  <option value="صيانة وإصلاح">صيانة وإصلاح</option>
                  <option value="تنظيف">تنظيف</option>
                  <option value="أنظمة التكييف المركزية">أنظمة التكييف المركزية</option>
                  <option value="أخري">أخري</option>
                </select>
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