import { TextField, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PromoInput = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (value === "PROMO") {
      navigate("/activated");
    }
  }, [value, navigate]);

  return (
    <Box>
      <TextField
        label="Введите промокод"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default PromoInput;