import "./App.css"
import Analytics from "./components/Analytics"
import Rating from "./components/Rating"
import Review from "./components/Review"
import Sidebar from "./components/Sidebar"
import Visitors from "./components/Visitors"

function App() {
  return (
    <div className="container">
      <div className="grid">
        <Sidebar />
        <Review />
        <Rating />
        <Analytics />
        <Visitors />
      </div>
    </div>
  )
}

export default App
