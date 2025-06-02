

export function ReactKey() {
  const items = [
    {id:1, name: "hi everyone"},
    {id:2, name: "hello evyone"}
  ]
   return<>
   {items.map((item) => (
  <li key={item.id}> {item.name}</li>
))}

   </>
}