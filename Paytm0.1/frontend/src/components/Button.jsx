export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" className="bg-gray-800 text-white  font-medium     
    border   rounded-lg w-full hover:bg-gray-900 focus: outline-none focus:ring-4 focus:ring-gray-300 px-5 py-2.5 mb-2 me-2 mt-3  ">{label}</button>
}

