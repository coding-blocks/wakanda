import React from 'react';
import { Pagination } from '../../types/pagination';
import { Leaderboard } from '../../types/leaderboard';
import api from '../../services/api';
import LeaderboardRow from './LeaderboardRow';
import PaginationPills from '../common/Pagination';

export const LeaderBoard = () => {
  const [loading, setLoading] = React.useState(true);
  const [leaderboard, setLeaderboard] = React.useState<Leaderboard[]>([]);
  const [pagination, setPagination] = React.useState<Pagination>(null);
  const [activePage, setActivePage] = React.useState(1);

  const fetchLeaderboard = async () => {
    setLoading(true);
    const limit = 10;

    const response = await api.get('leaderboard', {
      params: {
        offset: (activePage - 1) * limit,
      },
    });
    setLeaderboard(response.data.data);
    setPagination(response.data.meta.pagination);

    setLoading(false);
    return response.data;
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  React.useEffect(() => {
    (async () => {
      const leaderboardData = await fetchLeaderboard();
      // setLeaderboard(leaderboardData.data);
      // setPagination(leaderboardData.meta.pagination);
    })();
  }, [activePage]);

  return (
    <div className="card br-10 p-0 bg-white">
      <div className="p-4">
        <div className="heading-6 bold orange mb-4">Leaderboard</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="">
            <table className="w-100">
              <thead className="font-sm bold">
                <tr>
                  <th className="pb-3">Rank</th>
                  <th className="pb-3">User</th>
                  <th className="pb-3">Star</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((row, i) => (
                  <LeaderboardRow row={row} i={i} key={i} />
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <PaginationPills meta={pagination} onChange={handlePageChange} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
