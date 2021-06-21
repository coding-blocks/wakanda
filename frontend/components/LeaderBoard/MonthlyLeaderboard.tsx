import React from 'react';
import { Leaderboard } from '../../types/leaderboard';
import api from '../../services/api';
import LeaderboardRow from './LeaderboardRow';

export const LeaderBoard = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [leaderboard, setLeaderboard] = React.useState<Leaderboard[]>([]);
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const { url } = props;

  const fetchLeaderboard = async () => {
    setLoading(true);
    const response = await api.get(url);
    setLeaderboard(response.data.data);
    setMonth(m[Number(response.data.month)]);
    setYear(response.data.year);
    setLoading(false);
    return response;
  };

  React.useEffect(() => {
    (async () => {
      const leaderboardData = await fetchLeaderboard();
    })();
  }, []);

  return (
    <div className="card br-10 p-0 bg-white">
      <div className="p-30">
        <div className="heading-6 bold mb-30">
          Monthly Leaderboard : {month} - {year}
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="">
            <table className="w-100">
              <thead className="font-4 mb-30">
                <tr className="med-grey">
                  <th className="pb-4 t-align-l">RANK</th>
                  <th className="pb-4 t-align-c">NAME</th>
                  <th className="pb-4">STAR</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((row, i) => (
                  <LeaderboardRow row={row} i={i + 1} key={i} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
