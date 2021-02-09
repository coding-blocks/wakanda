import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/currentUserSlice';

export const UserStats: React.FC = () => {
  const user = useSelector(selectUser());

  return (
    <div className="card br-10 p-0 bg-white">
      <div className="p-4">
        <div className="d-flex font-md bold"> Total Stars </div>
        <div
          className="d-flex justify-content-center mt-4"
          style={{
            fontSize: 45,
          }}
        >
          <div className="position-relative">
            <img
              className="position-absolute"
              style={{ right: '3rem', height: '100%' }}
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
            />
            {user.totalPoints}
          </div>
        </div>
      </div>
      <div className="divider-h"></div>
      <div className="p-4">
        Collect more stars to win exciting <strong>Goodies</strong>
      </div>
    </div>
  );
};

export default UserStats;
