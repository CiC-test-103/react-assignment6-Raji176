/** Component Imports */
import Example from './components/Example'
import Picture from './components/Picture'
import Text from './components/Text'
import drawersImg from '../images/drawers.jpg'
import avatarImg from '../images/avatar-michelle.jpg'
import shareImg from '../images/icon-share.svg'
import facebookImg from '../images/icon-facebook.svg'
import twitterImg from '../images/icon-twitter.svg'
import pinterestImg from '../images/icon-pinterest.svg'
import './style.css'
import { useState } from 'react'




/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */

const App = () => {
  const [isActive,setIsActive]= useState(false);
  return (

    <div className='overall'>
      <div className='drawersPicture'>
        <Picture
          classProp={"drawersStyle"}
          srcProp={drawersImg}
          altProp={"drawer Pic"}
          sizeProp={100}
        />
      </div>
      <div className='remaining'>
        <Text
          inputText={"Shift the overall look and feel by adding these wonderful touches to furniture in your home"}
          inputClass={"bold"}
        />

        <Text
          inputText={"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."}
          inputClass={"normal"}
        />

        <div className='avatarBox'>
          <div className='picAndName'>
            <Picture
              classProp={"avatarStyle"}
              srcProp={avatarImg}
              altProp={"avatar Pic"}
              sizeProp={45}
            />

            <section className='signature'>
              <Text
                inputText={"Michelle Appleton"}
                inputClass={"signatureBold"}
              />

              <Text
                inputText={"28 Jun 2020"}
                inputClass={"signatureNormal"}
              />
            </section>
          </div>
          <button className='shareButton' onClick={() => setIsActive(!isActive)}>
          <Picture
            classProp={"shareStyle"}
            srcProp={shareImg}
            altProp={"share Pic"}
            sizeProp={20}
          />
          </button>

          <div className= {isActive?'shareBox-selected':'shareBox-unselected'}>
            <p id="shareWord">SHARE</p>

            <Picture
              classProp={"facebookStyle"}
              srcProp={facebookImg}
              altProp={"facebook Pic"}
              sizeProp={10}
            />

            <Picture
              classProp={"twitterStyle"}
              srcProp={twitterImg}
              altProp={"facebook Pic"}
              sizeProp={10}
            />

            <Picture
              classProp={"pinterestStyle"}
              srcProp={pinterestImg}
              altProp={"facebook Pic"}
              sizeProp={10}
            />
          </div>

        </div>

      </div>
    </div>

  )
}

export default App