import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/currentUserSlice';

export const UserStats: React.FC = () => {
  const user = useSelector(selectUser());

  return (
    <div className="card br-10 p-0 bg-white">
      <div className="p-4">
        <div className="d-flex heading-6 bold"> Total Stars </div>
        <div
          className="d-flex mt-4 align-items-center"
          style={{
            fontSize: 45,
            fontWeight: 'bold',
          }}
        >
          <img
            className="mx-2"
            style={{ height: '50px' }}
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/wakanda-star.svg"
          />
          {user.totalPoints}
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
