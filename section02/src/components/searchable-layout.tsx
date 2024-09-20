import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useState } from "react";
import style from './searchable.module.css';

export default function SearchableLayout({children,}: {children : ReactNode;}) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const q = router.query.q as string;
  useEffect(() =>{
    setSearch(q || "");
  } ,[q])
  const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const onSubmit = () => {
    if(!search) return;
    router.push(`/search?q=${search}`);
  }
  const onKeydown = ( e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      onSubmit();
    }
  }

  return(
    <div>
      <div className={style.searchbar_container}>
        <input onKeyDown={onKeydown} placeholder="검색어를 입력하세요..." value={search} onChange={onChangeSearch} />
        <button onClick={onSubmit} >검색</button>
      </div>
      {children}
    </div>
  )  
}
