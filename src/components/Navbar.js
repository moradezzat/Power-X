export default function Navbar() {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
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
    };

    return(
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    احصل على عرض سعر
                    </button>
                    <div className="hidden md:flex items-center space-x-8">
                    <a 
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')} 
                        className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                        اتصل بنا
                    </a>
                    <a 
                        href="#about"
                        onClick={(e) => scrollToSection(e, 'about')} 
                        className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                        من نحن
                    </a>
                    <a 
                        href="#services"
                        onClick={(e) => scrollToSection(e, 'services')} 
                        className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                        خدماتنا
                    </a>
                    <a 
                        href="#home"
                        onClick={(e) => scrollToSection(e, 'home')} 
                        className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                        الرئيسية
                    </a>
                    </div>
                    <div className="flex items-center space-x-2">
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">تيم باور اكس</h1>
                        <p className="text-sm text-gray-600 text-right">للتبريد والتكييف</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">ت</span>
                    </div>
                    </div>
                </div>
            </nav>
      </header>
    )
}