import React from 'react'

import './Invoice.css'

import logo from './logo.svg'

export class Invoice extends React.PureComponent {
  render() {
    return (
      <div className="Invoice">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>BLOOMING BEE</p>
        </div>
        <div className="info">
          <p>ORDER N. 348424</p>
          <p>DATE: 11/07/2021</p>
          <p>LIVRAISON: 12:45</p>
          <p>TELEPHONE: +33661162787</p>
          <p>ADRESSE: 13 chemin certoux 74160</p>
          <p>Saint Julien en genevois</p>
        </div>
        <div>
          <div className="item">
            <div>1 Muffin</div>
            <div>$6.00</div>
          </div>
          <div className="item">
            <div>3 Stick Gaufre</div>
            <div>$18.00</div>
          </div>
        </div>
        <div>
          <div>4 Produits</div>
          <div className="total">
            <div>Total</div>
            <div>$24.00</div>
          </div>
        </div>
        <div className="footer">
          <p>Merci pour votre commande</p>
          <div>
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
            <span>Bloo.mingbe</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoice
