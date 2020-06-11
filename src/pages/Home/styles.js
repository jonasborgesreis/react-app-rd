import styled from 'styled-components'

const media = {
  mobile: '@media(max-width: 500px)',
  tablet: '@media(max-width: 700px)',
  desktop: '@media(min-width: 1100px)'
}

export const HeaderNav = styled.header`
  display: block;
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0px;
  box-sizing: border-box;
  ${media.mobile} {
    width:100%;
    padding: 10px 20px;
  };
  ${media.tablet} {
    width:100%;
    padding: 10px 20px;
  };
  ${media.desktop} {
    background: transparent;
  };
  height: 90px;
  border-bottom: 1px solid #E0E0E0;

  h1{
    font-size: 40px;
    float: left;
    width: auto;
    display: block;
    margin: 0px;
    padding: 0px;
  }

  .menu-mobile{
    display: none;
  }

  ${media.mobile} {
   nav ul{
     display: none;
   } 
   h1{
    margin: 0px 0px 0px 10px;
    padding: 0px;
   } 
   h1 img{
    width: 80%;
   }

   .menu-mobile{
    display: block !important;
    float: right;
   }

   .menu-mobile button {
    margin: 20px 10px;
    cursor: pointer;
    border: none;
    float: right;
    background: transparent;
    outline: none !important;
  }

  .overlay-fluid{
    margin: 0;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.8;
    z-index: 1001;
  }

  .itens-menu-mobile{
    z-index: 1002;
    position: fixed;
    border-bottom-right-radius: 0;
    top: 0;
    right: 0;
    height: 100%;
    width: 360px;
    background-color: #fff;
  }

  .itens-menu-mobile ul {
    float: left;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  .itens-menu-mobile ul li {
    float: left;
    width: 100%;
    margin: 0;
    padding: 15px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }

  .itens-menu-mobile ul li a {
    color: #007f56;
    font-size: 1em;
    font-weight: 300;
    text-decoration: none;
  }

   .menu-mobile button img{
      width: 25px;
   }
  }

  nav{
    float: right;
    width: auto;
    display: block;
  }

  nav ul {
    list-style: none;
    width: auto;
    margin: 0px 20px 0px 0px;
    padding: 0;
  }

  nav ul li {
    display: inline;
    padding: 0;
    margin: 0;
  }

  nav ul li a{
    color: #007f56;
    font-size: 1.2222222222em;
    font-weight: 300;
    letter-spacing: -0.0909090909em;
    line-height: 1.18181818182em;
    display: inline-block;
    padding: 25px 20px;
    text-decoration: none;
  }

  .menu-mobile{
    margin: 0;
  } 
`

export const ContentMain = styled.div`
  display: block;
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0px;
  box-sizing: border-box;
  background: #eeeeee;
  height: auto;

  ${media.mobile}{
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background: #eeeeee;
    height: auto;
    float: left;
  }

  ${media.mobile}{
    h2{
     font-size: 1.5em !important;
    }

    h3 {
     font-size: 1.2em !important;
     line-height: 1.2em !important;
    }

    div ul.list-color {
      width: 170px !important;
      margin: 20px auto 0px auto !important;
    }

    div ul.list-color li{
      width: 100%;
    }

    div ul.list-pages{
      display: block !important;
    }

    div ul.list-pages li{
      float: left;
      margin: 20px 0px !important;
    }
  }

  h1{
    font-size: 40px;
    float: left;
    width: auto;
    display: block;
  }

  h2{
    color: #007f56;
    font-size: 3.3333333333em;
    font-weight: 300;
    letter-spacing: -0.05em;
    line-height: 1.2em;
    text-align: center;
  }

  h3{
    text-align: center;
    font-size: 1.9em;
    font-weight: 300;
    letter-spacing: -0.0625em;
    line-height: 1em;
    color: #868686;
    margin-bottom: 5px;
  }

  div{
    float: left;
    width: 100%;
    display: block;
  }

  div ul.list-color {
    display: table;
    list-style: none;
    width: auto;
    margin: 0px auto;
    padding: 0;
  }

  div ul.list-color li {
    display: inline-block;
    padding: 0;
    margin: 0px 10px 0px 0px;
    color: #868686;
    font-size: 1.7em;
  }

  div ul.list-color li span{
    float: left;
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 100%;
    margin-top: 15px;
    margin-right: 10px;
  }

  .cor1{
    background-color: #007f56;
  }

  .cor2{
    background-color: #868686;
  }

  .cor3{
    background-color: #FE9481;
  }

  .cor4{
    background-color: #FCDA92;
  }

  .cor5{
    background-color: #9C8CB9;
  }

  div ul.list-pages{
    list-style: none;
    margin: 60px 0px;
    padding: 0;
    display: flex;
  }

  div ul.list-pages li:first-child {
    flex: 1;
    margin-left: 0px;
    background: #fff;
    box-sizing: border-box;
  }

  div ul.list-pages li{
    flex: 1;
    background: #fff;
    margin-left: 30px;
    box-sizing: border-box;
  }

  div ul.list-pages li span{
    float: left;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 20px 0px 20px;
    text-align: center;
  }

  div ul.list-pages li span h4{
    color: #fff;
    font-size: 1.8em;
    font-weight: 300;
    letter-spacing: -0.0625em;
  }

  div ul.list-pages li p {
    float: left;
    padding: 10px 20px;
    text-align: justify;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: -0.0400em;
  }

  div ul li a{
    color: #fff;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: -0.0400em;
    padding: 10px 15px;
    float: right;
    margin: 0px 20px 20px 0px;
    text-decoration: none;
  } 
`
export const FooterMain = styled.footer`
  display: block;
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0px;
  box-sizing: border-box;
  background: #eeeeee;
  height: auto;

  ${media.mobile}{
    width: 100% !important;
    margin: 0 auto !important;
    padding: 20px !important;

    section {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }

    div ul{
      display: block !important;
    }

    div ul li{
      text-align: center !important;
    }

    div.col1{
      width: 100% !important;
    }

    div.col2{
      width: 100% !important;
    }

    div.col3{
      width: 100% !important;
      text-align: center !important;
      padding: 20px 0px !important;
    }

    div.col3 img{
      float: none !important;
    }

    p {
      text-align: center !important;
    }
    
  }

  ${media.tablet}{
    width: 100% !important;
    margin: 0 auto !important;
    padding: 20px !important;

      section {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
  }

  div{
    float: left;
    display: block;
    width: 100%;
  }

  section{
    display: flex;
    width: 100%;
    box-sizing: border-box;
  }

  section div.col1{
    width: 380px;
  }

  section div.col2{
    width: 470px;
  }

  section div.col3{
    width: 360px;
  }

  section div.col3 img{
    float: right;
  }

  p{
    margin: 8px 0px;
    font-size: 0.85em;
    color: #868686;
  }

  div ul {
    list-style: none;
    width: auto;
    margin: 0;
    padding: 0;
    display: flex;
  }

  div ul li {
    padding: 0;
    margin: 0px 5px;
  }

  div ul li a{
    cursor: pointer;
  } 
`
