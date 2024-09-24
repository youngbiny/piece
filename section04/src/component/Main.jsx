import "./Main.css"

const Main = () => {
  const user = {
    name: "이정한",
    isLogin : true,
  }
  return(
    <>
      {user.isLogin ? (
        <div className="logout">로그인</div>
      ) : (
        <div>로그아웃</div>
      )}
    </>
  )
}

export default Main;