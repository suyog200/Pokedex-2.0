import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { lightColors } from "../../util/LightColors";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabComponent({ selectedPokemon }) {
  const [value, setValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(selectedPokemon.cries.latest));

  const handleAudioPlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Extract stat names and values from selectedPokemon.stats
  const statLabels = ["Hp", "Attack", "Def", "Sp.Atk", "Sp.Def", "Speed"];
  const statValues = selectedPokemon
    ? selectedPokemon.stats.map((stat) => stat.base_stat)
    : [];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} id="customTab-p0">
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons="auto"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Base Stats" {...a11yProps(1)} />
          <Tab label="Evolution" {...a11yProps(2)} />
          <Tab label="Moves" {...a11yProps(3)} />
        </Tabs>
      </Box>
      {/* about section */}
      <CustomTabPanel value={value} index={0}>
        {selectedPokemon ? (
          <>
            <div className="about-context">
              <div className="about-context--left">
                <p>Height</p>
                <p>Weight</p>
                <p>Abilities</p>
              </div>
              <div className="about-context--right">
                <p>{selectedPokemon.height} cm</p>
                <p>{selectedPokemon.weight} Kg</p>
                <div className="ability-div">
                  {selectedPokemon.abilities.map((ability, index) => (
                    <p key={index}>{ability.ability.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="about-context">
              <div className="about-context--left">
                <p>Base Experience</p>
                <p>Cries</p>
              </div>
              <div className="about-context-right">
                <p>{selectedPokemon.base_experience !== null ? selectedPokemon.base_experience : 'No base experience available'}</p>
                <div className="audio-div" onClick={handleAudioPlayPause}>
                  {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </div>  
              </div>
            </div>
          </>
        ) : (
          <p>No data available</p>
        )}
      </CustomTabPanel>
      {/* base stats */}
      <CustomTabPanel value={value} index={1}>
        {selectedPokemon ? (
          <div className="chart-container">
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: statLabels,
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: statValues,
                },
              ]}
              height={300}
            />
          </div>
        ) : (
          <p>No data available</p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {selectedPokemon ? (
          <div>
            <h3>Evolution</h3>
            <p>{selectedPokemon.evolution}</p>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {selectedPokemon ? (
          <div>
            <div>
              <div className="moves-grid">
                {selectedPokemon.moves.map((move, index) => (
                  <div
                  className="moves-grid--item"
                    key={index}
                    style={{backgroundColor: lightColors[Math.floor(Math.random() * lightColors.length)]}}
                  >
                    {move.move.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </CustomTabPanel>
    </Box>
  );
}
