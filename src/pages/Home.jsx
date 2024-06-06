import ListPost from "../Components/ListPost"
import ListCategories from "../Components/ListCategoria"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories/>
      <ListPost url={"/posts"}/>    
    </main>
  )
}

export default Home
