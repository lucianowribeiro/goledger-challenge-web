import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { ListMediaTable } from "./components/ListMediaTable"
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
dayjs.locale('pt-br')

function App() {

  return (
    <Container>
      <Header />
      <ListMediaTable />
    </Container >
  )
}

export default App
