
/* export function ReactRetrns() {
    return<>
    
    <div>Hi EVeryone</div>
    <div> Hello Everyone</div>
    </>
} */

   export function ReactRetrns({ show }) {
  if (!show) return null;

  return <p>You can see me now!</p>;
}
