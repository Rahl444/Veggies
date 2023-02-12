import "./home.css"
import Logo from "./logo.png"
export default function Home(){


    return(
        <div className="Main">
            <div className="mainBox">
                <img src={Logo} className="homeLogo"/>
                <div className="Homedes">
                Welcome to vital Veggies, your one-stop source for fresh and delicious produce! Our mission is to bring the taste of farm-to-table to your home with the convenience of direct delivery.<br/><br/>
                We believe that everyone should have access to high-quality, fresh food, and that's why we work directly with local farmers to source the best ingredients for you. Whether you're looking for crisp fruits, leafy greens, or juicy vegetables, we've got you covered.<br/><br/>

With vital Veggies, you can enjoy the benefits of eating healthy, seasonal produce without ever having to leave your house. We offer a variety of customizable boxes to fit your specific dietary needs and preferences, so you can enjoy a variety of wholesome, delicious meals each week.<br/><br/>

We are committed to making a positive impact on the environment, so we use eco-friendly packaging and minimize waste. We also donate a portion of our profits to local organizations that support sustainable agriculture.

Join us today and taste the difference that fresh, local food can make. Order your delivery now!
                </div>

            </div>
        </div>
    )
}