import React from 'react'
import { FooterMain } from './styles'
import drogaraia from '../../images/logo_drogaraia.png'
import drogasil from '../../images/logo_drogasil.png'
import farmasil from '../../images/logo_farmasil.png'
import univers from '../../images/logo_univers.png'
import bio from '../../images/logo_4bio.png'
import logosmall from '../../images/logo_small.png'

export default function Footer () {
  return (
    <FooterMain>
      <section>
        <div className="col1">
          <p>RD 2020. Todos os direitos reservados</p>
        </div>
        <div className="col2">
          <ul>
            <li>
              <a href="" target="_blank">
                <img src={ drogaraia } alt="Drogaraia" />
              </a>
            </li>
            <li>
              <a href="" target="blank">
                <img src={ drogasil } alt="Drogasil" />
              </a>
            </li>
            <li>
              <a href="" target="blank">
                <img src={ farmasil } alt="Farmasil" />
              </a>
            </li>
            <li>
              <a href="" target="blank">
                <img src={ univers } alt="Univers" />
              </a>
            </li>
            <li>
              <a href="" target="blank">
                <img src={ bio } alt="4Bio" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col3">
          <img src={ logosmall } alt="RaiaDrogasil SA" />
        </div>
      </section>
    </FooterMain>
  )
}
