import React from 'react';

import './card.styles.css';
import InstagramEmbed from 'react-instagram-embed';

export const Card = props => (

  
    <div className='card-container'>
   
    <InstagramEmbed
    url={`${props.monster.url}`}
    maxWidth={320}
    hideCaption={true}
    containerTagName='div'
    protocol=''
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
  <h2> {props.monster.place}</h2>
    
    </div>
)