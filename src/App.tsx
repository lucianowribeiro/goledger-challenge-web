import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { ListTable } from "./components/ListTable"
import { CreateDialog } from "./components/dialog/CreateDialog"

function App() {

  return (
    <Container >
      <Header />
      <ListTable />
      <CreateDialog />
    </Container >
  )
}

export default App
