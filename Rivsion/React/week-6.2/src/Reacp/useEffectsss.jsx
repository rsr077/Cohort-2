import React, { useEffect, useState } from 'react';

export const Solutin = () => {
  const [exchagg2Data, setExchagg2Data] = useState({});
  const [exchaggData, setExchaggData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchaggData({
        returns: 100
      });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchagg2Data({
        returns: 100
      });
    }, 1000);
  }, []);

  const cryptreturns = (exchaggData.returns || 0) + (exchagg2Data.returns || 0);
  const ans = (cryptreturns + (bankData.income || 0)) * 0.3;

  const isLoading =
    exchaggData.returns === undefined ||
    exchagg2Data.returns === undefined ||
    bankData.income === undefined;

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>ans: {ans}</div>
      )}
    </div>
  );
};
