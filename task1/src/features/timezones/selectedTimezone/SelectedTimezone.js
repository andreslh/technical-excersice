import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { ZONE_BASE_URL } from '../../../app/constants';
import { selectSelected } from '../timezonesSlice';

const REFRESH_CURRENT_TIME_INTERVAL = 5000;

const SelectedTimezone = () => {
  const selected = useSelector(selectSelected);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    if (selected) {
      function updateTime() {
        axios.get(`${ZONE_BASE_URL}${selected}`).then((response) => {
          setCurrentTime(response.data.formatted);
        });
      }
      updateTime();

      const interval = setInterval(() => {
        updateTime();
      }, REFRESH_CURRENT_TIME_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [selected]);

  return <p data-testid="current-time">Current time: {currentTime}</p>;
};

export default SelectedTimezone;
