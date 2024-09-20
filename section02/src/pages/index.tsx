import { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

export const getSeverSideProps = () => {
  //컴포넌트에 필요한 데이터를 불러오는 함수  
  const data = "hello";
  return{
    props : {
      data,
    },
  };
};

export default function Home( { data } : InferGetServerSidePropsType<typeof getSeverSideProps> ) {
  console.log(data);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book)=><BookItem key={book.id} {...book} />)}
      </section>
      <section>
        <h3>등록 된 모든 도서</h3>
        {books.map((book)=><BookItem key={book.id} {...book} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page : ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}