import { Container } from "./components/ui/Container"
import { Header } from "./components/common/Header"
import { AssetList } from "./components/common/AssetList"
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import { MultimediaFooter } from "./components/ui/MultimediaFooter"
import { selectAssetName, selectAssetType } from "./containers/SelectedAssetContainer/selectors"
import { useSelectors } from "./redux/hooks"

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
