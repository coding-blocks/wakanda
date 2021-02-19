import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectIsAuthenticated, selectIsNotCa } from '../store/currentUserSlice';

export const RedirectToLogin: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated());
  const isNotCa = useSelector(selectIsNotCa());

  return isAuthenticated && isNotCa ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="landing-page">
      <div className="landing-page__section">
        <div className="width-limiter">
          <div className="row no-gutters justify-content-between align-items-center">
            <div className="flex-1 t-align-lg-l t-align-c">
              <div className="heading-font stroke-font">BECOME A</div>
              <div className="heading-font">SUPERHERO</div>
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg" />

              <div className="my-30 d-lg-none d-block">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-main.png"
                  style={{ boxShadow: '7px 7px 15px 0px rgb(0 0 0 / 15%)' }}
                />
              </div>

              <div className="my-lg-50 my-30">
                <div className="text-grey heading-4 bold">Networking. Bonding. Learning</div>
              </div>

              <div className="row no-gutters align-items-center justify-content-lg-start justify-content-center">
                <div>
                  <button className="button-primary">Apply Now</button>
                  <div className="mt-10 d-lg-none d-block">
                    <div className="text-grey-light-1 heading-6">
                      Join our Campus Ambassador Program
                    </div>
                  </div>
                </div>
                <div className="flex-1 pl-25 text-grey-light-1 heading-6 d-lg-block d-none">
                  Join our Campus Ambassador Program
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-block d-none">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-main.png"
                style={{ boxShadow: '7px 7px 15px 0px rgb(0 0 0 / 15%)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="landing-page__section position-relative overflow-visible">
        <div className="width-limiter">
          <div className="row no-gutters justify-content-between align-items-center">
            <div className="col-lg-6 t-align-lg-l t-align-c">
              <div className="heading-1 bold">About the Programme</div>
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg" />
              <div className="heading-5 text-grey mt-lg-60 mt-30">
                The Campus Ambassador program at Coding Blocks is aimed at identifying energetic,
                passionate, brilliant, like minded College Superheroes (and this term Superhero
                includes all the Supermen &amp; Wonderwomen) who have the zeal to take initiative
                and make a mark. If you are a passionate individual with ambitious dreams and would
                like to work with talented and qualified individuals, then this could be the right
                place for you.
              </div>
            </div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-1.png"
              className="image-absolute-1 d-lg-block d-none"
            />
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-2.png"
              className="image-absolute-2 d-lg-block d-none"
            />
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-3.png"
              className="image-absolute-3 d-lg-block d-none"
              style={{ bottom: '-25px' }}
            />

            <div className="d-lg-none d-block mt-30 w-100">
              <div className="row no-gutters justify-content-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-1.png"
                  className="mb-30 mx-auto"
                  style={{ transform: 'translateX(-30px)' }}
                />
              </div>
              <div className="row no-gutters justify-content-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-2.png"
                  className="mb-30 mx-auto"
                  style={{ transform: 'translateX(10px)' }}
                />
              </div>
              <div className="row no-gutters justify-content-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-3.png"
                  className="mb-30 mx-auto"
                  style={{ transform: 'translateX(-10px)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-page__section landing-page__section--divided-section z-neg">
        <div className="width-limiter">
          <div className="row">
            <div className="col-lg-6 col-12 landing-page__section--divided-section__left-section">
              <div className="t-align-sm-l t-align-c">
                <div className="heading-1 bold">What you do?</div>
                <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg" />
                <div className="mt-60">
                  <div className="mb-40 heading-5 text-grey">
                    Organise and manage various Coding Blocks Event (online and offline)
                  </div>
                  <div className="mb-40 heading-5 text-grey">
                    Promote Coding Blocks among your peers
                  </div>
                  <div className="mb-40 heading-5 text-grey">Conduct Seminars</div>
                  <div className="heading-5 text-grey">
                    Inform peers about latest CB offers and help them learn new skills
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-h d-lg-none d-block my-50 bg-grey-light-1"></div>
            <div className="col-lg-6 col-12 landing-page__section--divided-section__right-section">
              <div className="t-align-sm-l t-align-c">
                <div className="heading-1 bold">What you get?</div>
                <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg" />
                <div className="mt-60">
                  <div className="mb-40 heading-5 text-grey">
                    Access to exclusive CB swags and goodies
                  </div>
                  <div className="mb-40 heading-5 text-grey">
                    Performance based financial incentives
                  </div>
                  <div className="mb-40 heading-5 text-grey">Letter of recommendation</div>
                  <div className="mb-40 heading-5 text-grey">
                    Internship and placement opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="card bg-gradient-blue">
              <div className="row no-gutters align-items-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/superhero-vector-wakanda.svg"
                  style={{ marginLeft: '-30px' }}
                />
                <div className="flex-1 white pl-30">
                  <div className="heading-1 bold">Apply Now!</div>
                  <div className="font-5 mt-15">
                    Provide us with your Email ID and we will get in touch with you!
                  </div>
                  <button className="button-primary button-primary--white mt-30">Apply Now</button>
                  <div className="mt-10 font-2">Note : You must be a college student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-page__section landing-page__section--footer">
        <div className="width-limiter">
          <div className="row no-gutters pb-50" style={{ borderBottom: '1px solid #cccccc' }}>
            <div className="col-lg-9 col-12 pr-lg-20 pb-lg-none pb-50 landing-page__section--footer__main-section">
              <div className="row no-gutters">
                <div className="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20">
                  <div className="flex-col justify-content-between h-100">
                    <div className="font-4 bold w-100">PRODUCTS</div>
                    <div className="w-100 mt-50">
                      <div className="mb-30 mx-auto">
                        <a href="https://online.codingblocks.com/" className="font-4">
                          Online Coding Blocks
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="https://hack.codingblocks.com/" className="font-4">
                          Hacker Blocks
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="https://hire.codingblocks.com/" className="font-4">
                          Hiring Blocks
                        </a>
                      </div>
                      <div>
                        <a href="https://ide.codingblocks.com/" className="font-4">
                          Online IDE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20">
                  <div className="flex-col justify-content-between h-100">
                    <div className="font-4 bold w-100">COMPANY</div>
                    <div className="w-100 mt-50">
                      <div className="mb-30 mx-auto">
                        <a href="https://codingblocks.com/about.html" className="font-4">
                          About Us
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="https://codingblocks.com/team.html" className="font-4">
                          Meet the Team
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="https://codingblocks.com/success-stories.html" className="font-4">
                          Success Stories
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="https://codingblocks.com/signup/job.html" className="font-4">
                          Become a TA/Mentor
                        </a>
                      </div>
                      <div>
                        <a href="https://blog.codingblocks.com/" className="font-4">
                          Blog
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20 mt-sm-none mt-50">
                  <div className="flex-col justify-content-between h-100">
                    <div className="font-4 bold w-100">RESOURCES</div>
                    <div className="w-100 mt-50">
                      <div className="mb-30 mx-auto">
                        <a
                          href="https://www.youtube.com/channel/UCICWIYEx2mo4wYZzLwJ7wVw"
                          className="font-4"
                        >
                          Watch Youtube Videos
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="https://blog.codingblocks.com/" className="font-4">
                          Blogs
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="#" className="font-4">
                          Telegram Channel
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="#" className="font-4">
                          Study Material
                        </a>
                      </div>
                      <div>
                        <a href="#" className="font-4">
                          Career Advice
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20 mt-sm-none mt-50">
                  <div className="flex-col justify-content-between h-100">
                    <div className="font-4 bold w-100">COMMUNITY</div>
                    <div className="w-100 mt-50">
                      <div className="mb-30 mx-auto">
                        <a
                          href="https://codingblocks.com/campus-ambassador-program.html"
                          className="font-4"
                        >
                          Campus Ambassador
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="https://codingblocks.com/events" className="font-4">
                          Events and Workshops
                        </a>
                      </div>
                      <div className="mb-30 mx-auto">
                        <a href="#" className="font-4">
                          BOSS 2021
                        </a>
                      </div>
                      <div>
                        <a href="https://ide.codingblocks.com/" className="font-4">
                          Online IDE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 mt-lg-none mt-50 pl-xl-70 pl-lg-50">
              <div className="row no-gutters">
                <div className="col-lg-12 col-sm-6 col-12 mb-lg-50">
                  <div className="bold font-4 mb-sm-40 mb-30 mx-auto">CONTACT</div>
                  <div className="font-4 mb-lg-30 mb-sm-20 mb-15">admissionscodingblocks.com</div>
                  <div className="font-4">1800 274 4504</div>
                </div>
                <div className="col-lg-12 col-sm-6 col-12 mt-sm-none mt-50">
                  <div className="bold font-4 mb-sm-40 mb-30 mx-auto">TECHNICAL SUPPORT</div>
                  <div className="font-4 mb-lg-30 mb-sm-20 mb-15">supportcodingblocks.com</div>
                  <div className="font-4">+91 964 333 9747</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters align-items-center justify-content-sm-between justify-content-center mt-50">
            <img
              src="https://codingblocks.com/assets/images/cb/cblogo.png"
              style={{ height: '85px' }}
            />
            <div className="flex-1 t-align-xl-c t-align-r pl-xl-none pl-20 d-sm-block d-none">
              <div className="font-4 mb-10">Privacy Policy | Terms of Service</div>
              <div className="font-4">Copyright 2020 - Coding Blocks Pvt. Ltd.</div>
            </div>
            <div className="col-12 t-align-c d-sm-none d-block mt-50">
              <div className="font-4 mb-10">Privacy Policy | Terms of Service</div>
              <div className="font-4">Copyright 2020 - Coding Blocks Pvt. Ltd.</div>
            </div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/socials.svg"
              className="d-xl-block d-none"
            />
          </div>
          <div className="mt-50 d-xl-none d-block t-align-c">
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/socials.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectToLogin;
