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
      <div className="p-30">
        <div className="heading-6 bold mb-4">Leaderboard</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="">
            <table className="w-100">
              <thead className="font-4 mb-30">
                <tr className="med-grey">
                  <th className="pb-4 t-align-l">RANK</th>
                  <th className="pb-4 t-align-l">NAME</th>
                  <th className="pb-4">STAR</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((row, i) => (
                  <LeaderboardRow row={row} i={i + 1} key={i} />
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
