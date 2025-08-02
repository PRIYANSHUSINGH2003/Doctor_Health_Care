import React from 'react';
const AddressWithMore = ({ address }: { address: string }) => {
  const [showFull, setShowFull] = React.useState(false);
  const maxLen = 40;
  if (!address) return null;
  const isLong = address.length > maxLen;
  return (
    <span className="text-gray-400 text-[0.7rem]">
      {showFull || !isLong ? address : address.slice(0, maxLen) + "... "}
      {isLong && !showFull && (
        <button className="text-gray-500 underline ml-1 text-[0.7rem]" type="button" onClick={() => setShowFull(true)}>more</button>
      )}
      {isLong && showFull && (
        <button className="text-blue-500 underline ml-1 text-[0.7rem]" type="button" onClick={() => setShowFull(false)}>less</button>
      )}
    </span>
  );
};
export default AddressWithMore;
