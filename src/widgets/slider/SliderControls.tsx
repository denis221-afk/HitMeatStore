interface Props {
  onPrev: () => void
  onNext: () => void
}

export const SliderControls = ({ onPrev, onNext }: Props) => {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <button
        onClick={onPrev}
        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
      >
        ←
      </button>

      <button
        onClick={onNext}
        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
      >
        →
      </button>
    </div>
  )
}