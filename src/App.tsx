function App() {

  return (
    <>
      <div className="flex flex-col container mx-auto bg-zinc-900">
        <div className="py-5 px-5">

          <div className="flex flex-1 justify-between">
            <div className="flex gap-2">
              <img src="../public/logo.svg" className="size-7 bg-white " alt="go leader logo" />
              <p className="font-semibold"> Go Ledger - Challenge</p>
            </div>
            <button type="button">+</button>
          </div>
          <div>
            <button type="button">Playlists</button>
            <button type="button">Podcasts</button>
            <button type="button">Albuns</button>
            <button type="button">Artists</button>

          </div>
          <div>
            <button type="button">serch</button>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-col">
              <span>name</span>
              <span>outras</span>
            </div>
            <div className="flex flex-col">
              <span>name</span>
              <span>outras</span>
            </div>
            <div className="flex flex-col">
              <span>name</span>
              <span>outras</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
