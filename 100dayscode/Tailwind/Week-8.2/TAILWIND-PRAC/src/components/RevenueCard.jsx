



export const RevenueCard = ({
   title,
   amount,
   orderCount
}) => {
return (<div className="bg-red-600  rounded shadow-md ">
  <div>
    {title} 
    ? 
  </div>
  <div className="flex justify-between">
    <div> 
    $ {amount}
  </div>
   {orderCount ? <div>
    {orderCount} order(s) {">"} 
    </div>: null}
    </div>
</div>
)
}

 