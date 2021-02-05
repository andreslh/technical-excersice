import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { BASE_URL } from '../../app/constants';

import {
  selectSelected,
  selectZones,
  setSelected,
  setZones,
} from './timezonesSlice';
import SelectedTimezone from './selectedTimezone';

const Timezones = () => {
  const zones = useSelector(selectZones);
  const selected = useSelector(selectSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${BASE_URL}Europe/*`).then((response) => {
      dispatch(setZones(response.data.zones));
    });
  }, [dispatch]);

  const options = [];
  zones.forEach((zone) =>
    options.push(
      <option value={zone.zoneName} key={zone.zoneName}>
        {zone.zoneName}
      </option>
    )
  );

  const handleChange = (e) => {
    dispatch(setSelected(e.currentTarget.value));
  };

  return (
    <div>
      <label id="zones-label" htmlFor="zones">
        Select a zone:
      </label>
      <select
        aria-labelledby="zones-label"
        name="zones"
        onChange={handleChange}
        defaultValue={selected}
      >
        <option disabled value=""></option>
        {options}
      </select>

      {selected && <SelectedTimezone />}
    </div>
  );
};

export default Timezones;
