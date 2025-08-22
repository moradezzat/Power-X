import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {

  const ScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
    } else {
        const offset = 40;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  }

  return (
    <footer className="bg-gray-800 text-white pt-8 pr-4 pb-4 pl-4 mt-16">
      <div className="max-w-[1200px] m-auto px-8">
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Services, Contact, Quick Links Sections */}
          <div className="grid grid-cols-3 gap-[1.5rem] max-w-[550px] mr-auto lg:order-1">
            <div className="footer-section">
              <h4 className="text-blue-400 text-[1.1rem] mb-4 text-center font-semibold cursor-default">خدماتنا</h4>
              <ul className="text-center list-none">
                <li className="mb-[0.5rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">تركيب التكييف</a></li>
                <li className="mb-[0.5rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">صيانة وإصلاح</a></li>
                <li className="mb-[0.5rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">تنظيف</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="text-blue-400 text-[1.1rem] mb-4 text-center font-semibold cursor-default">معلومات الاتصال</h4>
              <ul className="text-center list-none">
                <li className="mb-[0.5rem]"><a href="tel:+201007019959" className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">+20 10 0701 9959</a></li>
                <li className="mb-[0.5rem]"><a href="tel:+201121642772" className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">+20 11 2164 2772</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="text-blue-400 text-[1.1rem] mb-4 text-center font-semibold cursor-default">روابط سريعة</h4>
              <ul className="text-center list-none">
                <li className="mb-[0.5rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'home')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">الرئيسية</a></li>
                <li className="mb-[0.5rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'services')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">خدماتنا</a></li>
                <li className="mb-[0.5rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'about')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">من نحن</a></li>
                <li className="mb-[0.5rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">اتصل بنا</a></li>
              </ul>
            </div>
          </div>
          
          {/* Branding Section */}
          <div className="flex flex-col items-center text-center justify-center max-w-[320px] ml-auto mr-8 lg:order-2">
            <div className="w-[100px] h-[100px] mb-[0.5rem] bg-white rounded-lg flex items-center justify-center">
              <Image
                alt="Logo"
                src="/Assets/TransLogo.png"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl text-blue-400 font-semibold cursor-default mb-4">تيم باور اكس</h2>
            <div className="flex gap-[0.8rem] justify-center">
              <a href="https://www.facebook.com/profile.php?id=61561031706468" target="_blank" rel="noopener noreferrer" 
                 className="w-[35px] h-[35px] rounded-[50%] bg-gray-600 flex items-center justify-center text-white no-underline transition-all duration-300 ease hover:bg-blue-400 hover:scale-[1.1] will-change-transform">
                <FontAwesomeIcon icon={faFacebook} size="lg"/>
              </a>
              <a href="https://wa.me/201007019959" target="_blank" rel="noopener noreferrer"
                 className="w-[35px] h-[35px] rounded-[50%] bg-gray-600 flex items-center justify-center text-white no-underline transition-all duration-300 ease hover:bg-blue-400 hover:scale-[1.1] will-change-transform">
                <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
              </a>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-8">
            {/* Services, Contact, Quick Links Sections */}
            <div className="grid grid-cols-2 space-y-6 max-w-[360px] mr-auto ml-6 order-1">
              <div className="footer-section">
                <h4 className="text-blue-400 text-[1rem] mb-3 text-center font-semibold cursor-default">خدماتنا</h4>
                <ul className="text-center list-none text-sm">
                  <li className="mb-[0.4rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">تركيب التكييف</a></li>
                  <li className="mb-[0.4rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">صيانة وإصلاح</a></li>
                  <li className="mb-[0.4rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">تنظيف</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="text-blue-400 text-[1rem] mb-3 text-center font-semibold cursor-default">معلومات الاتصال</h4>
                <ul className="text-center list-none text-sm">
                  <li className="mb-[0.4rem]"><a href="tel:+201007019959" className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">+20 10 0701 9959</a></li>
                  <li className="mb-[0.4rem]"><a href="tel:+201121642772" className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">+20 11 2164 2772</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="text-blue-400 text-[1rem] mb-3 text-center font-semibold cursor-default">روابط سريعة</h4>
                <ul className="text-center list-none text-sm">
                  <li className="mb-[0.4rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'home')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">الرئيسية</a></li>
                  <li className="mb-[0.4rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'services')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">خدماتنا</a></li>
                  <li className="mb-[0.4rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'about')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">من نحن</a></li>
                  <li className="mb-[0.4rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">اتصل بنا</a></li>
                </ul>
              </div>
            </div>
            
            {/* Branding Section */}
            <div className="flex flex-col items-center text-center justify-center max-w-[280px] ml-auto mr-6 order-2">
              <div className="w-[100px] h-[100px] mb-[0.5rem] bg-white rounded-lg flex items-center justify-center">
                <Image
                  alt="Logo"
                  src="/Assets/TransLogo.png"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl text-blue-400 font-semibold cursor-default mb-4">تيم باور اكس</h2>
              <div className="flex gap-[0.8rem] justify-center">
                <a href="https://www.facebook.com/profile.php?id=61561031706468" target="_blank" rel="noopener noreferrer" 
                   className="w-[35px] h-[35px] rounded-[50%] bg-gray-600 flex items-center justify-center text-white no-underline transition-all duration-300 ease hover:bg-blue-400 hover:scale-[1.1] will-change-transform">
                  <FontAwesomeIcon icon={faFacebook} size="lg"/>
                </a>
                <a href="https://wa.me/201007019959" target="_blank" rel="noopener noreferrer"
                   className="w-[35px] h-[35px] rounded-[50%] bg-gray-600 flex items-center justify-center text-white no-underline transition-all duration-300 ease hover:bg-blue-400 hover:scale-[1.1] will-change-transform">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-[90px] h-[90px] bg-white rounded-lg flex items-center justify-center">
              <Image
                alt="Logo"
                src="/Assets/TransLogo.png"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <h2 className="text-[1.2rem] text-blue-400 font-semibold cursor-default">تيم باور اكس</h2>
            <div className="flex gap-[0.6rem] justify-center">
              <a href="https://www.facebook.com/profile.php?id=61561031706468" target="_blank" rel="noopener noreferrer" 
                 className="w-[32px] h-[32px] rounded-[50%] bg-gray-600 flex items-center justify-center text-white no-underline transition-all duration-300 ease hover:bg-blue-400 hover:scale-[1.1]">
                <FontAwesomeIcon icon={faFacebook} size="sm"/>
              </a>
              <a href="https://wa.me/201007019959" target="_blank" rel="noopener noreferrer"
                 className="w-[32px] h-[32px] rounded-[50%] bg-gray-600 flex items-center justify-center text-white no-underline transition-all duration-300 ease hover:bg-blue-400 hover:scale-[1.1]">
                <FontAwesomeIcon icon={faWhatsapp} size="sm"/>
              </a>
            </div>
            
            <div className="w-full space-y-4">
              <div className="footer-section">
                <h4 className="text-blue-400 text-[0.95rem] mb-2 text-center font-semibold cursor-default">خدماتنا</h4>
                <ul className="text-center list-none text-sm">
                  <li className="mb-[0.3rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">تركيب التكييف</a></li>
                  <li className="mb-[0.3rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">صيانة وإصلاح</a></li>
                  <li className="mb-[0.3rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">تنظيف</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="text-blue-400 text-[0.95rem] mb-2 text-center font-semibold cursor-default">معلومات الاتصال</h4>
                <ul className="text-center list-none text-sm">
                  <li className="mb-[0.3rem]"><a href="tel:+201007019959" className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">+20 10 0701 9959</a></li>
                  <li className="mb-[0.3rem]"><a href="tel:+201121642772" className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">+20 11 2164 2772</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="text-blue-400 text-[0.95rem] mb-2 text-center font-semibold cursor-default">روابط سريعة</h4>
                <ul className="text-center list-none text-sm">
                  <li className="mb-[0.3rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'home')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">الرئيسية</a></li>
                  <li className="mb-[0.3rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'services')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">خدماتنا</a></li>
                  <li className="mb-[0.3rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'about')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">من نحن</a></li>
                  <li className="mb-[0.3rem]"><a href="#" onClick={(e) => ScrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 ease inline-block hover:text-blue-400">اتصل بنا</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-4 mt-4 border-t border-t-gray-700 text-gray-300 text-[0.8rem] cursor-default">
        <p>&copy; 2025 تيم باور اكس. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}