import './App.css'
import Header from './component/Header/Header.component'
import Item from './component/Item/Item.component'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-itemsContainer">
        <Item
          title="Model S"
          desc="
Order Online for "
          descLink="https://www.tesla.com/support/delivery-options"
          backgroundImg={ModelS}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons={true}
          car
          first
        />
        <Item
          title="Model Y"
          desc="
Order Online for "
          descLink="https://www.tesla.com/support/delivery-options"
          backgroundImg={ModelY}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons={true}
          car
        />
        <Item
          title="Model 3"
          desc="
Order Online for "
          descLink="https://www.tesla.com/support/delivery-options"
          backgroundImg={Model3}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons={true}
          car
        />
        <Item
          title="Model x"
          desc="
Order Online for "
          descLink=""
          backgroundImg={ModelX}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons={true}
        />
        <Item
          title="Model S"
          desc="
Order Online for "
          descLink=""
          backgroundImg={ModelS}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons={true}
          car
        />
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons={true}
          notaCar
        />
        <Item
          title="Solar for New Roofs"
          desc="
Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons={true}
          notaCar
        />
        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnText="Shop Now"
          leftBtnLink=""
          rightBtnText=""
          rightBtnLink=""
          twoButtons={false}
          notaCar
        />
      </div>
    </div>
  )
}

export default App
