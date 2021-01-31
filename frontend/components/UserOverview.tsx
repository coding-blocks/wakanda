import React from 'react';
import { useSelector } from 'react-redux';

export const Useroverview: React.FC = () => {
  const user = useSelector((state: any) => state.currentUser.user);

  return (
    <div>
      <div className="d-flex my-2 py-5 bg-white card br-10 justify-content-between">
        <div className="my-auto">
          <div className="d-flex">
            <img className="s-80X80 round my-auto mx-2" src={user.photo} />
            <div className="ml-4 my-auto">
              <h4 className="mx-auto extra-bold font-mdxl mb-2">{user.name}</h4>
              <span className="font-sm med-grey">Amity International College</span>
            </div>
          </div>
        </div>

        <div className="my-auto">
          <div className="">
            <div className="d-flex justify-content-end mb-2">
              <span className="align-self-end font-sm med-grey">CA code</span>
            </div>
            <h4 className="extra-bold font-mdxl">CBCA0097</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
