import React from 'react';
import logo from './logo.svg';
import QNightclub from './media/QNightclub.jpg';
import BlackPink_NWA from './media/BlackPink_NWA.jpg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faFacebookMessenger, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import Masonry from 'react-masonry-css';
import InstagramEmbed from 'react-instagram-embed';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h1>FABRICATOR MUSIC</h1> */}


      <header>
        <div className="neon-pink">
          <h1>FABRICATOR</h1>
          {/* <br /><br /><br /><br /><br /> */}

          <div className="space"></div>
        </div>
      </header>


      <br />

      <div class="neon-orange animated">
        <h1>TOP TRACKS</h1>
      </div>

      <br /><br /><br />


      <iframe width="25%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328639369&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      {/* 
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328639369&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}

      <iframe width="25%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185420013&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <iframe width="25%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132749763&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

      <br /><br /><br />

      <a href="https://soundcloud.com/fabricatormusic" target="_blank">
        <FontAwesomeIcon icon={faSoundcloud} size="4x" />
      </a>

      <a href="mailto:FabricatorMusic@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} size="4x" />
      </a>

      <a href="https://www.facebook.com/FabricatorMusic/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>

      <a href="https://messenger.com/brentlabasan" target="_blank">
        <FontAwesomeIcon icon={faFacebookMessenger} size="4x" />
      </a>


      {/* <FontAwesomeIcon icon={faFacebook} size="4x" />
      <FontAwesomeIcon icon={faInstagram} size="4x" /> */}

      <p>Fabricator is Brent Labasan. I was born and raised in Hawaii, and I now reside in Seattle, Washington. I like making music of all genres, and am open to collabaration!</p>

      {/* <img src={QNightclub} className="" alt="" style={{ width: '640px' }} /> */}

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {/* array of JSX items */}

        {/* <div style={{width: '1920px'}} > */}

        < InstagramEmbed
          url='https://www.instagram.com/p/Bvc-ts_ldJD/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />

        < InstagramEmbed
          url='https://www.instagram.com/p/B10yQSYAXfO/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />

        < InstagramEmbed
          url='https://www.instagram.com/p/B3TU5u3AINJ/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />

        < InstagramEmbed
          url='https://www.instagram.com/p/B4WJ2xcgIma/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />

        < InstagramEmbed
          url='https://www.instagram.com/p/B3uQ4-qASF4/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />





        < InstagramEmbed
          url='https://www.instagram.com/p/BtXamQtFw0l/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />


< InstagramEmbed
          url='https://www.instagram.com/p/BryHEWkFsw8/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />

< InstagramEmbed
          url='https://www.instagram.com/p/BtbKQiwlL4Q/'
          maxWidth={640}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />

        {/* </div> */}




      </Masonry>








    </div >
  );
}

export default App;
