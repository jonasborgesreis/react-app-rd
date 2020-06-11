import React from 'react'
import { ContentMain } from './styles'
import desktop from '../../images/desktop-responsive-design.png'
import tablet from '../../images/tablets-responsive-design.png'
import mobile from '../../images/mobile-responsive-design.png'

export default function MainContent () {
  return (
    <ContentMain>
      <div>
        <section>
          <h2>
            Crie este site <strong>responsivo</strong> com <strong>REACT</strong><br/>
            utilizando <strong>styled-components</strong>
          </h2>
          <h3>
            A fonte utilizada é a Open Sans de 300 a 800.<br/>
            exemplo: &quot;Open Sans&ldquo;, Helvetica, sans-serif, arial;<br/>
            Já as cores são:
          </h3>
          <ul className="list-color">
            <li><span className="cor1"></span>#007f56</li>
            <li><span className="cor2"></span>#868686</li>
            <li><span className="cor3"></span>#FE9481</li>
            <li><span className="cor4"></span>#FCDA92</li>
            <li><span className="cor5"></span>#9C8CB9</li>
          </ul>
          <div>
            <ul className="list-pages">
              <li>
                <span className="cor3">
                  <img src={ desktop } />
                  <h4>Site Responsivo DESKTOP</h4>
                </span>
                <p>
                  Quando pressionado o botão <strong>Leia mais...</strong> o restante da informação deverá aparecer em scroll down.
                </p>
                <a href="#" className="cor3">Leia mais...</a>
              </li>
              <li>
                <span className="cor4">
                  <img src={ tablet } />
                  <h4>Site Responsivo TABLET</h4>
                </span>
                <p>
                  Quando pressionado o botão <strong>Leia mais...</strong> informação deverá aparecer completa em um popup na tela.
                </p>
                <a href="#" className="cor4">Leia mais...</a>
              </li>
              <li>
                <span className="cor5">
                  <img src={ mobile } />
                  <h4>Site Responsivo MOBILE</h4>
                </span>
                <p>
                  Quando pressionado o botão <strong>alterar tema</strong> modifique o tema do site para blackfriday a seu gosto.
                </p>
                <a href="#" className="cor5">Leia mais...</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </ContentMain>
  )
}
