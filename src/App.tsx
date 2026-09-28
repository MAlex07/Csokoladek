import Chocolate from './componens/ChocolateCard'

let App = () => {

  return (
  <>
   <h1>Csokoládék</h1>
    <Chocolate
     name = "Étcsoki 70%"
     brand = "Lindt"
     isDark = {true}
     cocoaPercentage = {70}
     ingridiets = {["kakaómassza", "cukor", "kakaóvaj"]}
    />

    <Chocolate
    name = "Tejcsoki mogyoróval"
    brand = "Milka"
    isDark = {false}
    cocoaPercentage = {30}
    ingridiets = {["cukor", "tejpor", "kakaóvaj", "mogyoró"]}
    
    />
    <Chocolate
    name = "Fehércsoki epres"
    brand = "Nestlé"
    isDark = {false}
    cocoaPercentage = {25}
    ingridiets = {["cukor", "tejpor", "kakaóvaj", "eperdarabok"]}
    
    />

   <small>Az oldalt készítette: Molnár Alex</small>

   </>
  )
}

export default App
