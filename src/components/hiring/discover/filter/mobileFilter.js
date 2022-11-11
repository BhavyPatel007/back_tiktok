import { Card, Grid, Radio, TextField } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Checkbox from "@material-ui/core/Checkbox";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@material-ui/icons/Help";
import VideocamIcon from "@material-ui/icons/Videocam";
import React, { useState } from "react";
import { useStyles } from "./filter.style";
const MobileFilter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState();
  const [rate, setRate] = useState();
  const [job, setjob] = useState();
  const [Earnd, setEarnd] = useState();
  const [bill, setBill] = useState();
  const [level, setLevel] = useState();
  const OnChnageVAlue = (event) => {
    setValue(event.target.value);
  };
  const OnchageRate = (event) => {
    setRate(event.target.value);
  };
  const onChnageJob = (event) => {
    setjob(event.target.value);
  };
  const OnChangeEarnd = (event) => {
    setEarnd(event.target.value);
  };
  const OnChangeBill = (event) => {
    setBill(event.target.value);
  };
  const onChangeLevel = (event) => {
    setLevel(event.target.value);
  };

  return (
    <Grid className={classes.root} item md={3} xs={12} style={{width:'100%',borderRadius:0}}>
          <Card className={classes.cardOne}>
            <div >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Talent services
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.titleDiv}>
                      <Checkbox color="primary" />
                      <div
                        className={classes.titleData}
                        
                      >
                        <VideocamIcon
                          style={{ color: "#3c58a7", fontSize: 18 }}
                        />
                        Offer Confirmation
                      </div>
                      &nbsp;
                      <HelpIcon style={{ color: "grey", fontSize: 18 }} />
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Talent Quality
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.titleDiv}>
                      <Checkbox color="primary" />
                      <div className={classes.titleData}>
                        <BeenhereIcon style={{ color: "pink", fontSize: 18 }} />
                        Top Rated Plus
                      </div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Checkbox color="primary" />
                      <div className={classes.titleData}>
                        <BeenhereIcon
                          style={{ color: "#0000ff8a", fontSize: 18 }}
                        />
                        Top Rated
                      </div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Checkbox color="primary" />
                      <div className={classes.titleData}>
                        <BeenhereIcon
                          style={{ color: "#008000a8", fontSize: 18 }}
                        />
                        Rising Telent
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.CategoryRoot}>
                      <span style={{ color: "#3C58A7" }}>All Category</span>
                      <span>Accounting & Consulting</span>
                      <span>Admin Support</span>
                      <span>Customer Service</span>
                      <span>Data Secience & Analytics</span>
                      <span>Design & Creative</span>
                      <span>Engineering & Architecture</span>
                      <span>It & Networking</span>
                      <span>Legal</span>
                      <span>Sales & Mareketing</span>
                      <span>Translation</span>
                      <span>Web,Mobile & Software Dev</span>
                      <span>Writing</span>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ width: "100%" }}>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Location"
                      fullWidth
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Talent Type
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={1}
                        onChange={OnChnageVAlue}
                        checked={value == 1}
                      />
                      <div className={classes.titleData}>
                        Freelancer & Agencies
                      </div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={2}
                        onChange={OnChnageVAlue}
                        checked={value == 2}
                      />
                      <div className={classes.titleData}>Freelancer</div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={3}
                        onChange={OnChnageVAlue}
                        checked={value == 3}
                      />
                      <div className={classes.titleData}>Agencies</div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Hourly rate
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={1}
                          onChange={OnchageRate}
                          checked={rate == 1}
                        />
                        <div className={classes.titleData}>Any Hourly Rate</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={2}
                          onChange={OnchageRate}
                          checked={rate == 2}
                        />
                        <div className={classes.titleData}>$10 and below</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={3}
                          onChange={OnchageRate}
                          checked={rate == 3}
                        />
                        <div className={classes.titleData}>$10 - $30</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={4}
                          onChange={OnchageRate}
                          checked={rate == 4}
                        />
                        <div className={classes.titleData}>$30 - $60</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={5}
                          onChange={OnchageRate}
                          checked={rate == 5}
                        />
                        <div className={classes.titleData}>$60 & abve</div>
                      </div>
                    </Typography>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Job success
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={1}
                        onChange={onChnageJob}
                        checked={job == 1}
                      />
                      <div className={classes.titleData}>Any job success</div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={2}
                        onChange={onChnageJob}
                        checked={job == 2}
                      />
                      <div className={classes.titleData}>80% & up</div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={3}
                        onChange={onChnageJob}
                        checked={job == 3}
                      />
                      <div className={classes.titleData}>90% & up</div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Earned amount
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={1}
                          onChange={OnChangeEarnd}
                          checked={Earnd == 1}
                        />
                        <div className={classes.titleData}>
                          Any Amount Earned
                        </div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={2}
                          onChange={OnChangeEarnd}
                          checked={Earnd == 2}
                        />
                        <div className={classes.titleData}>$1+ Earned</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={3}
                          onChange={OnChangeEarnd}
                          checked={Earnd == 3}
                        />
                        <div className={classes.titleData}>$1k Earned</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={4}
                          onChange={OnChangeEarnd}
                          checked={Earnd == 4}
                        />
                        <div className={classes.titleData}>$100k Earned</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={5}
                          onChange={OnChangeEarnd}
                          checked={Earnd == 5}
                        />
                        <div className={classes.titleData}>$1000k Earned</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={6}
                          onChange={OnChangeEarnd}
                          checked={Earnd == 6}
                        />
                        <div className={classes.titleData}>No earnigs yet</div>
                      </div>
                    </Typography>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Hours billed
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={1}
                        onChange={OnChangeBill}
                        checked={bill == 1}
                      />
                      <div className={classes.titleData}>Any hours</div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={2}
                        onChange={OnChangeBill}
                        checked={bill == 2}
                      />
                      <div className={classes.titleData}>$1+ hours billed</div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={3}
                        onChange={OnChangeBill}
                        checked={bill == 3}
                      />
                      <div className={classes.titleData}>
                        $100+ hours billed
                      </div>
                    </div>
                    <div className={classes.titleDiv}>
                      <Radio
                        color="primary"
                        value={4}
                        onChange={OnChangeBill}
                        checked={bill == 4}
                      />
                      <div className={classes.titleData}>
                        $1000+ hours billed
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    English level
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={1}
                          onChange={onChangeLevel}
                          checked={level == 1}
                        />
                        <div className={classes.titleData}>Any Level</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={2}
                          onChange={onChangeLevel}
                          checked={level == 2}
                        />
                        <div className={classes.titleData}>Basic</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={3}
                          onChange={onChangeLevel}
                          checked={level == 3}
                        />
                        <div className={classes.titleData}>Conversational</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={4}
                          onChange={onChangeLevel}
                          checked={level == 4}
                        />
                        <div className={classes.titleData}>Fluent</div>
                      </div>
                      <div className={classes.titleDiv}>
                        <Radio
                          color="primary"
                          value={5}
                          onChange={onChangeLevel}
                          checked={level == 4}
                        />
                        <div className={classes.titleData}>
                          Native or bilingual
                        </div>
                      </div>
                    </Typography>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Other languages
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ width: "100%" }}>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Other languages"
                      fullWidth
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Advance Search
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ width: "100%" }}>
                    <div>
                      <b style={{ fontSize: 14, color: "#000000a3" }}>
                        All of these words
                      </b>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Other languages"
                        fullWidth
                        style={{ marginTop: "0.5rem" }}
                      />
                    </div>
                    <div style={{marginTop:'0.8rem'}}>
                      <b style={{ fontSize: 14, color: "#000000a3" }}>
                        Any of these words
                      </b>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Other languages"
                        fullWidth
                        style={{ marginTop: "0.5rem" }}
                      />
                    </div>
                    <div style={{marginTop:'0.8rem'}}>
                      <b style={{ fontSize: 14, color: "#000000a3" }}>
                        None of these words
                      </b>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Other languages"
                        fullWidth
                        style={{ marginTop: "0.5rem" }}
                      />
                    </div>
                    <div style={{marginTop:'0.8rem'}}>
                      <b style={{ fontSize: 14, color: "#000000a3" }}>
                        The exact phrase
                      </b>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Other languages"
                        fullWidth
                        style={{ marginTop: "0.5rem" }}
                      />
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Card>
        </Grid>
  );
};
export default MobileFilter;
