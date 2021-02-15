import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const RedirectToLogin: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.currentUser.isAuthenticated);

  return isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="landing-page">
      <div className="landing-page__section">
        <div className="width-limiter">
          <div className="row no-gutters justify-content-between align-items-center">
            <div className="flex-1">
              <div className="heading-font stroke-font">BECOME A</div>
              <div className="heading-font">SUPERHERO</div>
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg" />

              <div className="my-50">
                <div className="text-grey heading-4 bold">Networking. Bonding. Learning</div>
              </div>

              <div className="row no-gutters align-items-center">
                <button className="button-primary">Apply Now</button>
                <div className="flex-1 pl-25 text-grey-light-1 heading-6">
                  Join our Campus Ambassador Program
                </div>
              </div>
            </div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-main.png"
              style={{ boxShadow: '7px 7px 15px 0px rgb(0 0 0 / 15%)' }}
            />
          </div>
        </div>
      </div>

      <div className="landing-page__section">
        <div className="width-limiter">
          <div className="row no-gutters justify-content-between align-items-center">
            <div className="col-6">
              <div className="heading-1 bold">About the Programme</div>
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg" />
              <div className="heading-5 text-grey mt-60">
                The Campus Ambassador program at Coding Blocks is aimed at identifying energetic,
                passionate, brilliant, like minded College Superheroes (and this term Superhero
                includes all the Supermen &amp; Wonderwomen) who have the zeal to take initiative
                and make a mark. If you are a passionate individual with ambitious dreams and would
                like to work with talented and qualified individuals, then this could be the right
                place for you.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-page__section landing-page__section--divided-section">
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
                  <div className="mb-40 heading-5 text-grey">
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
    </div>
  );
};

export default RedirectToLogin;
