export function InputBox ({label, placeholder}) {
   return <div >
     <div className="font-medium text-sm text-left py-2 " >
      {label}
     </div>
      <input className="p-2 border border-slate-300 w-full rounded py-1" placeholder={placeholder}  />
   </div>
}