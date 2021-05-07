import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/currentUserSlice';

export const UserStats: React.FC = () => {
  const user = useSelector(selectUser());

  return (
    <div className="card br-10 p-0 bg-white">
      <div className="p-30">
        <div className="row no-gutters heading-6 bold">Total Stars</div>
        <div
          className="row no-gutters mt-30 align-items-center wakanda-grey"
          style={{
            fontSize: 45,
            fontWeight: 'bold',
          }}
        >
          <img
            className="mr-10"
            style={{ height: '45px' }}
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/wakanda-star.svg"
          />
          {user.totalPoints}
        </div>
      </div>
      <div className="divider-h"></div>
      <div className="p-30 v-align-ba font-4 wakanda-grey">
        Get <strong>CB Goodies </strong>
        on <strong>1000</strong>
        <img
          className="ml-2"
          style={{ height: '20px' }}
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/wakanda-star.svg"
        />
      </div>
    </div>
  );
};

export default UserStats;
