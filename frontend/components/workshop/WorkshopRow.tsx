import React from 'react';
import Button from '../common/Button';
import api from '../../services/api';
import moment from 'moment';

export interface Workshop {
  id: number;
  collegeName: number;
  collegeAddress: string;
  topic: string;
  startDate: Date;
  endDate: Date;
  monetary: string;
  accomodation: string;
  request: string;
  mobile: string;
}

export interface WorkshopRowProps {
  workshop: Workshop;
}

export default ({ workshop }: WorkshopRowProps) => {
  return (
    <div className="py-4 border-bottom">
      <div className="row no-gutters justify-content-between align-items-center">
        <div className="font-sm">
          <span className="bold mr-2">{workshop.collegeName}</span>
        </div>
      </div>
    </div>
  );
};
