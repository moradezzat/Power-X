export default function ServiceCard({ Emoji, Title, Feature1, Feature2, Feature3 }) {
    return(
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-shadow text-right">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 mr-auto">
                <span className="text-white text-2xl">{Emoji}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{Title}</h3>
            <ul className="space-y-2 text-gray-600">
                <li>{Feature1} •</li>
                <li>{Feature2} •</li>
                <li>{Feature3} •</li>
            </ul>
        </div>
    )
}