import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <Banner />
                {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" /> */}
                
                <div className="home_row">
                    < Product
                    id="141198" 
                    title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
                    image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
                    price={890}
                    rating={4} />
                    < Product
                    id="141099"
                    title="Redmi Note 9 (Arctic White, 4GB RAM, 64GB Storage) - 48MP Quad Camera & Full HD+ Display"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41zD4GN4E2L._SS135_.jpg"
                    price={9999}
                    rating={3}
                    />
                </div>

                <div className="home_row">
                < Product 
                id="111219"
                title='Asus Vivobook (AMD Ryzen 5-3500U 2.1 GHz/ 8GB DDR4/ 1TB HDD/ 14 inch" FHD/ AMD Radeon Vega 8 Graphics/ Windows 10 Home/ Slate Grey/ 1.6 Kg)'
                image="https://images-na.ssl-images-amazon.com/images/I/71zKXppEVnL._SX679_.jpg"
                price={39760}
                rating={4}
                />
                < Product
                id="120320"
                title="Syska HT200 PRO BeardPro Cordless Rechargeable Trimmer - 10 Length Settings; 45 min Runtime (Black) Best of five"
                image="https://images-na.ssl-images-amazon.com/images/I/31i%2BnRfCjeL._AC_SY1000_FMwebp_.jpg" 
                price={760}
                rating={3}
                />
                < Product
                id="141119"
                title="Noise ColorFit Pro 2- India's No. 1 Smartwatch with 24x7 Dynamic Heart Rate Tracking, 10 Day Battery, Full Touch HD Display & Multi-Sports Mode"
                image="https://images-na.ssl-images-amazon.com/images/I/61xzuXWWozS._SX679_.jpg"
                price={2599}
                rating={4}
                />
                </div>

                <div className="home_row">
                < Product
                id="150321"
                title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
                image="https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._SX679_.jpg"
                price={15999}
                rating={5}
                />
                </div>
            </div>
        </div>
    )
}

export default Home
