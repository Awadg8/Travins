import "./Partners.css"
import { partners } from "../../data"

const Partners = () => {
  return (
    <div id="partners">
      <div className="slides">
        {partners.map((partner,key)=>(
            <img src={partner.image} alt={partner.name} key={key} />
        ))}
      </div>
    </div>
  )
}

export default Partners
