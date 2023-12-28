
import './App.css'
import FavMovie from "./components/EX1/ex1";
import PersonalInfo from "./components/EX2/personalInfo.jsx";
import ShowTime from "./components/EX3/display";
import PetInfo from "./components/EX4/petInfo.jsx";

function App() {
const favmov = {
  title: "Список Шиндлера",
  director: "Стівен Спілберг",
  year: "2019",
  genre: " Воєнний/Документальний",
  lenght: "3г 15хв",
  company: "Universal Pictures",
  description: "Фільм знятий за однойменним романом Томаса Кенеллі, заснованому на реальних подіях. Головний герой німецький промисловець Оскар Шиндлер організовує бізнес в нацистській Німеччині, і, зробивши в'язнів єврейських гетто працівниками свого заводу, рятує їх від неминучої загибелі в концтаборах.",
  poster: "https://ukrface.fra1.cdn.digitaloceanspaces.com/jarvis/thumbnail/poster-film-page/posters/176/b2be3d5d3fe9a963e296.jpg"
}



return (
<>
    <FavMovie {...favmov}/>
        <hr/>
    <PersonalInfo/>
        <hr/>
    <ShowTime/>
        <hr/>
    <PetInfo/>
</>
  )
}

export default App
