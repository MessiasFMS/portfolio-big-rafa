import { NavigationBar } from "./components/navigation_bar"
import { PrimarySection } from "./components/primary_section"
import { ThemeToggle } from "./components/theme_toggle_button"

function App() {
  

  return (
    <div className=" dark:bg-[#202020] transition-colors dark:text-white">
      <NavigationBar />
     <PrimarySection />
     <span className="fixed bottom-10 right-10 ">
     <ThemeToggle />
     </span>
    
    </div>
  )
}

export default App
