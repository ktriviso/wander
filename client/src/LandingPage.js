import React, { Component } from 'react';
import './App.css';

export default class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    return (
      <div className="App">

        <header>
          <div></div>
          <ul>
            <li>How it works</li>
            <li>Desinations</li>
            <li>Become a local</li>
            <li>Blog</li>
            <li>Sign in</li>
            <li className="button"><span>Get Started</span></li>
          </ul>
        </header>

        <section id="carousel">
          <h1>Carefully Curated Activities Planned by Locals
          <br/>
          <br/>
          Make your trip special with recommendations you wont find anywhere else</h1>
        </section>

        <section id="about">
          <h1 className="title">We want you to visit the place you like</h1>
          <h1>and that starts with knowing where you want to go and how you want to get there</h1>
          <ul>
            <li>1. fill out a questionaire</li>
            <li>2. choose a custom daily travel plan</li>
            <li>3. see the secret places our locals would go to</li>
          </ul>
          <div></div>
        </section>

        <section id="blog">
          <h1 className="title">Recent Blog Posts</h1>
          <div>
            <div className="post">
              <div></div>
              <h3>Wander Icelands Food Trucks</h3>
            </div>
            <div className="post">
              <div></div>
              <h3>Puruvian Street Food Crash Course</h3>
            </div>
          </div>
          <button className="button">read more</button>
        </section>

        <section>
          <h1 className="title">What Our travellers say...</h1>
          <div id="customers-container">
            <div className="testimonial one">
              <div></div>
              <p>"Wander was a life saver! They took out all the planning for our honeymoon and siggested amazing lavendar farms in the South of France" <br/><br/> <span>- Diego C</span></p>
            </div>
            <div className="testimonial two">
              <div></div>
              <p>"Wander had great fun facts about Barcelona. Their step by step guide helped us to see more and learn more." <br/><br/> <span>- Harry K</span></p>
            </div>
            <div className="testimonial three">
              <div></div>
              <p>"We are busy people and while we would love to plan, we dont have the time. Wander allowed us to see and experience a lot more than we would have planned on our own." <br/><br/> <span>- Maria A</span></p>
            </div>
          </div>
        </section>

        <div id="search-bar">
          <h1 className="title">Ready to make your trip unique?</h1>
          <input type="text" name="desination" placeholder="Destination"/>
          <input type="text" name="date" placeholder="Start Date"/>
          <input type="text" name="drop" placeholder="Dropdown"/>
          <button className="button">Go</button>
        </div>

        <section id="locals">
          <h1 className="title">Customized recommendations for travellers from like-minded locals</h1>
          <div id="locals-container">
            <div className="locals-blurb four">
              <div></div>
              <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <h1>Stefano, 28</h1>
              <h2>Writer and Editor</h2>
              <h3>Interests: </h3>
              <p><i className="fab fa-pagelines"></i>Outdoors<i className="fas fa-utensils"></i> Food & Dining</p>
            </div>
            <div className="locals-blurb five">
              <div></div>
              <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <h1>Claudia, 30</h1>
              <h2>Graphic Designer</h2>
              <h3>Interests: </h3>
              <p><i className="fab fa-pagelines"></i>Outdoors<i className="fas fa-swimmer"></i>Beach</p>
            </div>
            <div className="locals-blurb six">
              <div></div>
              <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
              <h1>Clemence, 25</h1>
              <h2>Creative Stratgist</h2>
              <h3>Interests: </h3>
              <p><i className="fas fa-cocktail"></i>Nightlife<i className="fas fa-hotel"></i>Art & Culture</p>
            </div>
          </div>
        </section>

        <section id="destination">
          <div></div>
          <button className="button">Browse</button>
        </section>

        <footer>
          <div>
            <h1>Get inspired to explore the world</h1>
            <input type="text" name="email" placeholder="Enter email to stay informed"/>
            <button>Sign Up</button>
          </div>
          <div>
            <h1>About Lauren</h1>
            <h1>Contact Us</h1>
            <ul>
              <li><i className="fab fa-facebook-f"></i></li>
              <li><i className="fab fa-instagram"></i></li>
              <li><i className="fab fa-vimeo-v"></i></li>
            </ul>
          </div>
        </footer>

      </div>
    );
  }
}
