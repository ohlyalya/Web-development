import React, { useState, useEffect } from "react";
import { Button, Box, Typography, List, ListItem } from "@mui/material";

const Watch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let timer: any = null;

    if (running) {
      timer = setInterval(() => {
        setTime((t) => t + 1);
      }, speed);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running, speed]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, time]);
  };

  const faster = () => {
    if (speed > 500) {
      setSpeed(speed / 2);
    }
  };

  const slower = () => {
    if (speed < 2000) {
      setSpeed(speed * 2);
    }
  };

  return (
    <Box sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 2, mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Секундомер
      </Typography>

      <Typography variant="h4" sx={{ mb: 2 }}>
        {time} сек
      </Typography>

      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Button variant="contained" onClick={startStop}>
          {running ? "Стоп" : "Старт"}
        </Button>
        <Button variant="outlined" onClick={reset}>Сброс</Button>
        <Button variant="contained" onClick={addLap}>Круг</Button>
      </Box>

      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Button variant="outlined" onClick={faster}>x2 быстрее</Button>
        <Button variant="outlined" onClick={slower}>x2 медленнее</Button>
      </Box>

      <Typography variant="h6">Круги:</Typography>
      <List>
        {laps.map((l, i) => (
          <ListItem key={i}>Круг {i + 1}: {l} сек</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Watch;