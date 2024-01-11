import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./components/home/Home"
import { Message } from "./components/message"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Home */}
      <Home />

      {/* Footer */}
      <Footer />

      {/* Message */}
      <Message />
    </div>
  )
}

export default App
