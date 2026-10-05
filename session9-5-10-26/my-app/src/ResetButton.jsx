
export const ResetButton = ({ onHandle }) => {

  return (
    <button
      type="button"
      onClick={onHandle}
      className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-colors"
    >
      Clear
    </button>
  )
}
