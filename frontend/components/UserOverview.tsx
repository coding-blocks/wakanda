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
        <div>
          <div className="row n-gutters">
            <img className="s-80X80 round my-auto mx-2" src={user.photo} />
            <div className="ml-4 my-auto flex-1">
              <h4 className="mx-auto extra-bold heading-3 mb-2">{user.name}</h4>
              <span className="font-sm med-grey">{user.college}</span>
            </div>
          </div>
        </div>
        {!!user.caCode && (
          <div>
            <div className="">
              <div className="row n-gutters justify-content-end mb-2">
                <span className="align-self-end font-sm med-grey">CA code</span>
              </div>
              <div className="row n-gutters justify-content-between align-items-center">
                <h4 className="extra-bold heading-3 mr-3" id="ca-code">
                  {user.caCode}
                </h4>
                <div className="pointer" onClick={() => copyCaCode()}>
                  <FontAwesomeIcon icon={faCopy} size="lg" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
