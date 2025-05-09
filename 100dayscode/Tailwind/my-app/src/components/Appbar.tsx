import { SearchBar } from "./Searchbar"


export const AppBar = () => {
  return <div className="flex justify-between pt-1">
<div className="text-md  inline-flex items-center pb-2">
  Youtube
</div>
<div>
<SearchBar/> 
</div>
<div>
  Sign in 
</div>
  </div>
}