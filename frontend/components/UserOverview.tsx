import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export const Useroverview: React.FC = () => {
  const user = useSelector((state: any) => state.currentUser.user);

  const copyCaCode = () => {
    const range = document.createRange();
    range.selectNode(document.getElementById('ca-code'));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // to deselect
  };

  return (
    <div>
      <div className="row no-gutters bg-white card justify-content-between align-items-center">
        <div className="col-sm-8 col-12 mb-sm-none mb-20">
          <div className="row no-gutters align-items-center">
            <img className="s-80X80 round my-auto mx-2" src={user.photo} />
            <div className="ml-25 flex-1">
              <h4 className="bold heading-3 mb-10">{user.name}</h4>
              <span className="font-4 med-grey">{user.college}</span>
            </div>
          </div>
        </div>
        {!!user.caCode && (
          <div className="flex-1">
            <div className="row no-gutters align-items-center justify-content-end">
              <div>
                <div className="t-align-r mb-10">
                  <span className="font-4 med-grey">CA Code</span>
                </div>
                <div className="row no-gutters justify-content-between align-items-center">
                  <div className="pointer" onClick={() => copyCaCode()}>
                    <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/copycacode.svg" />
                    {/* <FontAwesomeIcon icon={faCopy} size="lg" /> */}
                  </div>
                  <h4 className="bold heading-4 ml-25" id="ca-code">
                    {user.caCode}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
