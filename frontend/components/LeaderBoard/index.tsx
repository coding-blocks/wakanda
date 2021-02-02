import React from 'react';
import { Pagination } from '../../types/pagination';
import { Leaderboard } from '../../types/leaderboard';
import api from '../../services/api';
import LeaderboardRow from './LeaderboardRow';

export const LeaderBoard = () => {
  const [loading, setLoading] = React.useState(true);
  const [leaderboard, setLeaderboard] = React.useState<Leaderboard[]>([]);
  const [pagination, setPagination] = React.useState<Pagination>(null);

  const fetchLeaderboard = async () => {
    setLoading(true);

    const response = await api.get('leaderboard', {
      params: {
        offset: pagination?.nextOffset || pagination?.currentOffset || 0,
      },
    });

    setLoading(false);
    return response.data;
  };

  React.useEffect(() => {
    (async () => {
      const leaderboardData = await fetchLeaderboard();
      setLeaderboard(leaderboardData.data);
      setPagination(leaderboardData.meta.pagination);
    })();
  }, []);

  return (
    <div className="card br-10 p-0 bg-white">
      <div className="p-4">
        <div className="font-md bold orange mb-4">Leaderboard</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="w-100">
            <thead className="font-sm bold">
              <td className="pb-3">Rank</td>
              <td className="pb-3">User</td>
              <td className="pb-3">Star</td>
            </thead>
            <tbody>
              {leaderboard.map((row, i) => (
                <LeaderboardRow row={row} i={i} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
