import "./Logo.css"
import logo from "../../assets/logo.svg"

const Logo = () => {
  return (
    <div className="flex-center logo">
        <img src={logo} alt="" />
        <h1>Travins</h1>
    </div>
  )
}

export default Logo
