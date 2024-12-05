import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { AssetList } from "./components/AssetList"
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'

dayjs.locale('pt-br')

function App() {

  return (
    <Container>
      <Header />
      <AssetList />
    </Container >
  )
}

export default App
