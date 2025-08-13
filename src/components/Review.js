export default function ReviewCard({ Name, Location, Rate, Message }) {
    const generateStars = (rate) => {
        const fullStars = "⭐".repeat(Math.floor(rate));
        const emptyStars = "".repeat(5 - Math.floor(rate));
        return fullStars + emptyStars;
    };

    return(
        <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <span>{generateStars(Rate)}</span>
                </div>
            </div>
            <p className="text-gray-600 mb-6 italic">{Message}</p>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">{/* pfp */}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{Name}</h4>
                  <p className="text-sm text-gray-600">{Location}</p>
                </div>
            </div>
        </div>
    )
}