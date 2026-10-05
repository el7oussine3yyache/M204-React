export const CalculateButton = () => {
  return (

    <div className="flex gap-2 pt-2">
      <button
        type="submit"
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Calculate
      </button>
    </div>
  )
}
