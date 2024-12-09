import { Container } from "./components/Container"
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import { MultimediaFooter } from "./components/MultimediaFooter"
import { selectAssetName, selectAssetType } from "./containers/SelectedAssetContainer/selectors"
import { useSelectors } from "./redux/hooks"
import { Header } from "./components/Header"
import { AssetList } from "./components/AssetList"

dayjs.locale('pt-br')

function App() {
  const assetType = useSelectors(selectAssetType)
  const assetName = useSelectors(selectAssetName)
  return (
    <Container>
      <Header />
      <AssetList />
      <MultimediaFooter assetName={assetName} assetType={assetType} />
    </Container >
  )
}

export default App
