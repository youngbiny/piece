export default function Page({
  searchParams,    
  } :  
 {searchParams : { q? : string}; }) {
  return(
    <div>서치페이지 {searchParams.q}</div>
  )
}