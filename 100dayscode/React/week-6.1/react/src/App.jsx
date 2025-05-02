

function App() {
   return <div>
  <CardWrapper>
  <CardWrapper>
  <CardWrapper>
    hi there
    </CardWrapper>
    </CardWrapper>
  </CardWrapper>
   </div>

}

function CardWrapper({children}) {
  return <div style={{border: "2px solid black ", padding:20}}>{children}
  </div>   
}




export default App
