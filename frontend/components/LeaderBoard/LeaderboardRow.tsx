import React from 'react';
import { Leaderboard } from '../../types/leaderboard';

export default ({ row, i }: { row: Leaderboard; i: number }) => {
  return (
    <tr>
      <td className="py-3">{i}</td>
      <td className="py-3">
        <div className="img-desc align-items-center">
          <img className="round s-30x30" src={row.photo} alt="" />
          <div className="description ml-3">{row.name}</div>
        </div>
      </td>
      <td className="py-3 t-align-c">{row.totalPoints}</td>
    </tr>
  );
};
