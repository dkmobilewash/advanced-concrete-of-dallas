export default function PageLoader() {
  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-1 overflow-hidden bg-transparent" role="status" aria-label="Loading page">
      <div className="h-full w-1/3 animate-[loaderSlide_1s_ease-in-out_infinite] bg-gold" />
      <style>{`
        @keyframes loaderSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  )
}
