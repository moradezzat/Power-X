export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">

            {/* Services */}
            <div className="text-right">
              <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">تركيب التكييف</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">صيانة وإصلاح</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">تنظيف</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-right">
              <h4 className="text-lg font-semibold mb-4">معلومات الاتصال</h4>
              <div className="text-gray-300">
                <p>+20 10 0701 9959</p>
                <p>+20 11 2164 2772</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-right">
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">خدماتنا</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>

            <div className="text-right">
              <div className="flex items-center space-x-2 mb-4 justify-end">
                <h3 className="text-xl font-bold">تيم باور اكس</h3>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ت</span>
                </div>
              </div>
              <div className="flex space-x-4 justify-end">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="text-xl">📱</span>
                </a>
              </div>
            </div>
          </div>
          

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 تيم باور اكس. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    )
}