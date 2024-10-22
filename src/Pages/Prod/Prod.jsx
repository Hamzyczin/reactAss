import List from "../../Components/List/List"
import Fan from "../../assets/prod-1.jpg"
import Tan from "../../assets/prod-2.jpg"
import Can from "../../assets/prod-3.jpg"
import Nan from "../../assets/prod-5.jpg"
import "./Prod.css"

const Prod = () =>{
  return(
    <div>
      <h2 id="him">Product listing page</h2>
      <div className="lim">
      < List prodname="Lontor" image={Fan} price="₦36,380"  word="Lontor link" description="Lontor 12 Inch Rechargeable  Fan" link="https://www.jumia.com.ng/12-inch-rechargeable-table-fan-cf025-12-lontor-mpg4310477.html"/>
      < List prodname="Glamstar" image={Tan} price="₦68,421"  word="Glamstar link" description="Glamstar 18 Inch Rechargeable Fan Black" link="https://www.jumia.com.ng/glamstar-18-inches-rechargeable-standing-fan-black-338892377.html"/>
      < List prodname="Glamstar" image={Can} price="₦69,500"  word="Glamstar link" description="Glamstar 18 Inches Rechargeable Standing Fan White" link="https://www.jumia.com.ng/glamstar-18-inches-rechargeable-standing-fan-white-346616815.html" />
      < List prodname="Sun King Solar Fan" image={Nan} price="₦111,357"  word=" Sun King Solar Fan link" description="Sun King Solar Fan With 20W Solar Panel" link="https://www.jumia.com.ng/sun-king-solar-fan-with-20w-solar-panel-71338441.html"/>
    </div>
    </div>
  )
}

export default Prod