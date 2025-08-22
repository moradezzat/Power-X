export default function LoadingScreen({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        <div className="text-white text-center mt-4 font-medium">
          جاري التحميل
        </div>
      </div>
    </div>
  );
}