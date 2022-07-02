import React, { useEffect } from 'react';
import { Grid } from '../js/grid.js';
import { preloadImages } from '../js/utils';
import { useNavigate } from 'react-router-dom';
import '../products.css';
const Products = () => {
  const history = useNavigate();

  useEffect(() => {
    preloadImages('.column__item-img').then(() => {
      document.body.classList.remove('loading');

      // Initialize the grid

      new Grid(document.querySelector('.columns'));
    });
  }, []);
  return (
    <html>
      <body className="loading body" id="bod">
        <main className="main">
          <div className="columns" data-scroll-container>
            <div className="column-wrap column-wrap--height">
              <div className="column">
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="2">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/1.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Cyber Blue</span>
                    <span>2011</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="5">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/2.jpg)' }}
                      onClick={() => {
                        new Grid(document.querySelector('.columns')).destroy();
                        history('/product/1');
                      }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Gnostic Will</span>
                    <span>2012</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="8">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/3.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>French Kiss</span>
                    <span>2013</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="11">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/4.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Half Life</span>
                    <span>2014</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="14">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/5.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Love Boat</span>
                    <span>2015</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="17">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/6.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Golden Ray</span>
                    <span>2016</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="20">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/7.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Blame Game</span>
                    <span>2017</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="23">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/8.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Lone Dust</span>
                    <span>2018</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="column-wrap">
              <div className="column" data-scroll-section>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="1">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/9.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Lucky Wood</span>
                    <span>2019</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="4">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/10.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Good Earth</span>
                    <span>2020</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="7">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/11.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Empty Words</span>
                    <span>2021</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="10">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/12.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Nonage Line</span>
                    <span>2009</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="13">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/13.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Blue Hell</span>
                    <span>2010</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="16">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/14.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Cold Blood</span>
                    <span>2011</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="19">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/15.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Tulip Heat</span>
                    <span>2012</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="22">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/16.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Red Wrath</span>
                    <span>2013</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="column-wrap column-wrap--height">
              <div className="column">
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="3">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/17.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Bold Human</span>
                    <span>2014</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="6">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/18.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Loyal Royal</span>
                    <span>2015</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="9">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/19.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Lone Cone</span>
                    <span>2016</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="12">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/20.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Dutch Green</span>
                    <span>2017</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="15">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/21.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Valley Hill</span>
                    <span>2018</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="18">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/22.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Kale Hale</span>
                    <span>2019</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="21">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/23.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Fake Cake</span>
                    <span>2020</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="24">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: 'url(img/24.jpg)' }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Book Belly</span>
                    <span>2021</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="content">
            {/* <div className="content__item">
                <h2 className="content__item-title">Lucky Wood</h2>
                <div className="content__item-text">
                  <span>
                    Faith, youre driving me away You do it every day You dont mean
                    it But it hurts like hell
                  </span>
                  <span>2019</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Cyber Blue</h2>
                <div className="content__item-text">
                  <span>
                    My brain says Im receiving pain A lack of oxygen From my life
                    support My iron lung
                  </span>
                  <span>2011</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Bold Human</h2>
                <div className="content__item-text">
                  <span>
                    Were too young to fall asleep Too cynical to speak We are
                    losing it Cant you tell?
                  </span>
                  <span>2014</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Good Earth</h2>
                <div className="content__item-text">
                  <span>
                    We scratch our eternal itch A twentieth century bitch And we
                    are grateful for Our iron lung
                  </span>
                  <span>2020</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Gnostic Will</h2>
                <div className="content__item-text">
                  <span>
                    The head shrinkers They want everything My Uncle Bill My
                    Belisha beacon
                  </span>
                  <span>2012</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Loyal Royal</h2>
                <div className="content__item-text">
                  <span>
                    The head shrinkers They want everything My Uncle Bill My
                    Belisha beacon
                  </span>
                  <span>2015</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Empty Words</h2>
                <div className="content__item-text">
                  <span>
                    Suck, suck your teenage thumb Toilet trained and dumb When the
                    power runs out Well just hum
                  </span>
                  <span>2021</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">French Kiss</h2>
                <div className="content__item-text">
                  <span>
                    This, this is our new song Just like the last one A total
                    waste of time My iron lung
                  </span>
                  <span>2013</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Lone Cone</h2>
                <div className="content__item-text">
                  <span>
                    And if youre frightened You can be frightened You can be, its
                    OK
                  </span>
                  <span>2016</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Nonage Line</h2>
                <div className="content__item-text">
                  <span>
                    Lost in the mountain Rust in my brain The air is sacred here
                    In spite of your claim
                  </span>
                  <span>2009</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Half Life</h2>
                <div className="content__item-text">
                  <span>
                    Up on the rooftops Out of reach Trickster is meaningless
                    Trickster is weak
                  </span>
                  <span>2014</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Dutch Green</h2>
                <div className="content__item-text">
                  <span>Hes talking out the world Talking out the world</span>
                  <span>2017</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Blue Hell</h2>
                <div className="content__item-text">
                  <span>
                    Hey, hey, hey This is only halfway Hey, hey, hey This is only
                    halfway
                  </span>
                  <span>2010</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Love Boat</h2>
                <div className="content__item-text">
                  <span>
                    I wanted you so bad That I couldnt say All these things fall
                    apart
                  </span>
                  <span>2015</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Valley Hill</h2>
                <div className="content__item-text">
                  <span>
                    We wanted out so bad We couldnt say These things fall apart
                  </span>
                  <span>2018</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Cold Blood</h2>
                <div className="content__item-text">
                  <span>
                    Truant kids A can of brick dust worms Who do not want to climb
                    down from Their chestnut tree
                  </span>
                  <span>2011</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Golden Ray</h2>
                <div className="content__item-text">
                  <span>
                    Long white gloves Police tread carefully Escaped from the zoo
                    The perfect child facsimile is
                  </span>
                  <span>2016</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Kale Hale</h2>
                <div className="content__item-text">
                  <span>
                    Please could you stop the noise? Im trying to get some rest
                    From all the unborn chicken voices in my head
                  </span>
                  <span>2019</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Tulip Heat</h2>
                <div className="content__item-text">
                  <span>Whats that? I may be paranoid, but not an android</span>
                  <span>2012</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Blame Game</h2>
                <div className="content__item-text">
                  <span>
                    When I am king you will be first against the wall With your
                    opinion which is of no consequence at all
                  </span>
                  <span>2017</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Fake Cake</h2>
                <div className="content__item-text">
                  <span>
                    Ambition makes you look pretty ugly Kicking and squealing,
                    Gucci little piggy
                  </span>
                  <span>2017</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Red Wrath</h2>
                <div className="content__item-text">
                  <span>
                    You dont remember, you dont remember Why dont you remember my
                    name?
                  </span>
                  <span>2013</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Lone Dust</h2>
                <div className="content__item-text">
                  <span>
                    Off with his head, man, off with his head, man Why dont you
                    remember my name? I guess he does
                  </span>
                  <span>2018</span>
                </div>
              </div>
              <div className="content__item">
                <h2 className="content__item-title">Book Belly</h2>
                <div className="content__item-text">
                  <span>
                    Rain down, rain down Come on, rain down on me From a great
                    height From a great height, height
                  </span>
                  <span>2021</span>
                </div>
              </div> */}
            {/* <nav className="content__nav">
              <div className="content__nav-wrap">
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/25.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/26.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/27.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/28.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/29.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: 'url(img/30.jpg)' }}
                ></div>
              </div>
            </nav> */}
            {/* <button className="unbutton button-back">
              <svg viewBox="0 0 50 9" width="100%">
                <path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77"></path>
              </svg>
            </button> */}
          </div>
        </main>
        {/* <script type="module" src="js/index.js"></script> */}
      </body>
    </html>
  );
};

export default Products;
