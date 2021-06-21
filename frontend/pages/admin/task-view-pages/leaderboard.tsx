import React from 'react';
import { useParams } from 'react-router-dom';
import { LeaderBoard } from '../../../components/LeaderBoard';

export default () => {
  const { id } = useParams();

  return (
    <div>
      <LeaderBoard task_id={id} url={`leaderboard/${id}`}></LeaderBoard>
    </div>
  );
};
