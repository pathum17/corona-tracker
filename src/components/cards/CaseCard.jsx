import React, { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import CountUp from "react-countup";

import "./CaseCard.css";

const CaseCard = ({ value, title, applyStyle }) => {
  const [val, setVal] = useState(undefined);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setVal(value);
    setIsLoading(false);
  }, [value]);

  useEffect(() => {
    setContent(title);
  }, [title]);

  const showLoading = () => {
    return (
      <div className="card-value" hidden={isLoading}>
        <CircularProgress />
      </div>
    );
  };

  return (
    <div className={`movie-card ${applyStyle}`}>
      <Typography className="card-header" color="textSecondary">
        {content}
      </Typography>

      {val === undefined ? (
        showLoading()
      ) : (
        <Typography className="card-value" color="textSecondary">
          <CountUp
            start={0}
            end={val ? val : 0}
            duration={1.5}
            separator=","
          ></CountUp>
        </Typography>
      )}
    </div>
  );
};

export default CaseCard;
