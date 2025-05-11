

export const  Hi = ({
  followers,
  Likes,
  Photos

}) => {
return (
<div className="flex bg-black">
<div>{followers}</div>
<div>{Likes}</div>
<div>{Photos}</div>
</div>
)
}