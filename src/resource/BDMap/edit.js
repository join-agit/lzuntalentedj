import React from 'react';
import PropTypes from 'prop-types';
import BDMap from './BDMap';

export default function BDMapEdit(props) {
  const { defaultAttrs, ...others } = props;
  const styleProps = Object.assign({ }, defaultAttrs, others);
  return (
    <BDMap
      style={{
        minHeight: '320px',
      }}
      {...styleProps}
    />
  );
}

BDMapEdit.prototype.propTypes = {
  defaultAttrs: PropTypes.object.isRequired,
};
