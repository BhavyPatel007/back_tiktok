import { Box, Button, Card, IconButton, Typography } from "@material-ui/core";
import React,{useEffect,useState,useRef} from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PinDropIcon from "@material-ui/icons/PinDrop";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import Moment from 'moment';
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import { useStyles } from "./JobDescription.style";
function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Detail = (id) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [myIndex, setMyIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ViewProfile = ["View Profile", "Load Organization", "All Work"];

  
  const[user,setUser]= useState([]);
  const[Proposal_Question,setProposal_Question]=useState([]);
  const[organisation,setOrganization]= useState([]);

  useEffect(()=>{

    fetch('https://10acb4dfc9.execute-api.ap-southeast-1.amazonaws.com/dev/getdata',{
      method: 'POST',
      redirect: 'follow',
      headers: {
        'cache-control':'no-cache',
        'postman-token': 'f15506df-16a7-8145-1dbc-994d6acf5fd0',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "Action": "getJobPostForTalent",
        "JobpostID": "JOBPOST-20220608-10"  
      })
    })
       .then((res) => res.json())
       .then((res) => {
           setUser(res.JobPost);
           setOrganization(res.Organisation);
           setProposal_Question(res.JobPost[0]?.Proposal_Questions)
          //  setUserContracts(res.UserContracts);
          console.log('result',res.Organisation);
       })
       .catch((err) => {
          console.log(err.message);
       });
      },[])

      const [scrollX, setscrollX] = useState(0);
      let scrl = useRef(null);
    
      const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
    
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
      };
      const [scrolEnd, setscrolEnd] = useState(false);
      const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
      };

  return (
    <>
  {user.map((row) =>{ return(
      <Card className={classes.cardStyle}>
        <div className={classes.MainRootProfile}>
      
          <div className={classes.ProfileRoot}>
            <div className={classes.dataroot}>
              <div className={classes.ProfileTitle}>
                <h2>Looking for a Project Manager</h2>
              </div>
              <div className="div-title">
                <p className="title">{row.Jobpost_Title}</p>
                <p className="time-line">Posted 1 hour Ago</p>
              </div>
              <div className="location">
                <PinDropIcon />
                {row.Location}
              </div>
              <div className="tag-line">
              {row.Description}
              </div>
            </div>
            <div className={classes.countingData}>
              <div>
                <h3>$100</h3>
                <span>Fixed Price</span>
              </div>
              <div>
                <h3>Intermediate</h3>
                <span>I am Loofing for mix experience</span>
              </div>
            </div>
            <div className={classes.PastHire}>
              <h4>Project Type:</h4>
              <p>{row.Project_Type}</p>
            </div>
    
              
                            <div className={classes.SkillRoot}>
                    <h3>Skills</h3>
                   <div className={classes.sliderContent} style={{ paddingLeft: 0 }}>
          {row.Skill_Set.length > 4
            ? scrollX !== 0 && (
                <button
                  className="prev"
                  onClick={() => slide(-50)}
                  // onMouseEnter={(e) => anim(e)}
                  // onMouseLeave={(e) => anim2(e)}
                >
                  <ArrowBackIosSharpIcon />
                </button>
              )
            : null}

          <ul className="sliderParent" ref={scrl} onScroll={scrollCheck}>
            {row.Skill_Set.map((d, i) => (
                    <Chip label={d} style={{backgroundColor: '#3C58A7',color:'white',marginLeft: 5}}/>
            ))}
          </ul>
          {row.Skill_Set.length > 4
            ? !scrolEnd && (
                <button
                  className="next"
                  onClick={() => slide(+50)}
                  // onMouseEnter={(e) => anim(e)}
                  // onMouseLeave={(e) => anim2(e)}
                >
                  <ArrowForwardIosSharpIcon />
                </button>
              )
            : null}
         
        </div>
        </div>
            <div
              className={classes.EducationRoot}
              style={{ borderBottom: "none" }}
            >
              <h3>Activity On this Job</h3>
              <div>
                <b>Proposals:</b><br/>
                {Proposal_Question?Proposal_Question.map((aw) => {
                          return (
                           <div>{aw}</div>
                          );
                        }):null}
               
              </div>
              <div>
                <span>Interviewing:</span>
                <span>0</span>
              </div>
              <div>
                <span>Invites Sent:</span>
                <span>0</span>
              </div>
              <div>
                <span>Unanswered Invites:</span>
                <span>0</span>
              </div>
            </div>
          </div>
      
        
          {organisation.map((val) =>{
            return(
              <>
                <div className={classes.DetailRoot}>
            
            <div className={classes.dataroot}>
              <div className={classes.buttonWrap}>
                <Button className={classes.SaveButton}>Submit Proposals</Button>
                <Button className={classes.SaveJobButton}>
                  <FavoriteBorderIcon />
                  &nbsp;&nbsp;Save Jobs
                </Button>
              </div>
              <div className={classes.flagRoot}>
                <p className="flag">
                  <ContactSupportIcon />
                  Flag as inappropriate
                </p>
                <p className="data">Send a proposal for : {val.Active_Hires} contects</p>
                <p className="data">Available contects : {val.Total_Hires}</p>
              </div>
            </div>
            <div className={classes.About}>
              <h3>About The Client</h3>
              <div>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon style={{ color: "#3c58a7", fontSize: 18 }} />{" "}
                  Payment method verified{val.Payment_Method_Verified}
                </span>
               { console.log('payment',val.Payment_Method_Verified)}
              </div>
              <div>
                <div>
                  <StarIcon style={{ color: "green", fontSize: 18 }} />
                  <StarIcon style={{ color: "green", fontSize: 18 }} />
                  <StarIcon style={{ color: "green", fontSize: 18 }} />
                  <StarIcon style={{ color: "green", fontSize: 18 }} />
                  <StarIcon style={{ color: "green", fontSize: 18 }} />
                </div>
                <span>4.93 of 85 reviews</span>
              </div>
              <div>
                <h3>United State</h3>
                <span>{val.Organization_Name} 11:55pm</span>
              </div>
              <div>
                <h3>{val.No_Of_Jobs_Posted} jobs posted</h3>
                <span>
                  {val.Hire_Rate}
                 hire rate, {val.No_Of_Jobs_Open} open jobs</span>
              </div>
              <div>
                <h3>{val.Average_Hourly_Paid}/hr avg hourly rate paid</h3>
                <span>{row.Rates}</span>
              </div>
              <div>
                <h3>Intermediate</h3>
                <span>I am Loofing for mix experience</span>
              </div>
              <div>
                <span>Member since {Moment(val.Created_Date).format('D MMM,YYYY')}</span>
              </div>
            </div>
            <div className={classes.About} style={{ borderBottom: "none" }}>
              <h3>Job Link</h3>

              <div className={classes.textRoot}>
                <TextField
                  value="www.test.com"
                  variant="outlined"
                  size="small"
                  disabled
                  style={{ background: "#e0e0e0", borderRadius: 17 }}
                  className={classes.textField}
                />
                <span className="copylink">Copy Link</span>
              </div>
            </div>
          </div>
              </>
            )
          })}
        </div>
      </Card>
    )})}
      <Card className={classes.cardStyle} style={{ marginTop: "2rem" }}>
        <div className={classes.EMPhistory}>
          <h3 style={{ paddingBttom: "2rem" }}>Client Recent history(50)</h3>

          <div className={classes.EmployHistoryList}>
            <Accordion>
              <AccordionSummary
                expandIcon={<IconButton className={classes.iconRoot}><ExpandMoreIcon /></IconButton>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Job in Progress
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    rowGap: 22,
                  }}
                >
                  <div className={classes.Detailhistory}>
                    <div className="title-work">
                      <p>Looking For a KG Teacher</p>
                      <span>No feedback given</span>
                    </div>
                    <div className="time-work">
                      <p>Mar 2022 - Aug 2022</p>
                      <p>80 hrs @ $20.00/hr</p>
                      <p>Billed:$1,594.00</p>
                    </div>
                  </div>
                  <div className={classes.root2}>
                    <span>To Freelancer:&nbsp;</span>
                    <span>
                      <b style={{ color: "#3c58a7" }}>Sharma.S</b> No given
                      feedback
                    </span>
                  </div>
                  <div className={classes.Detailhistory}>
                    <div style={{ width: "1176px" }}>
                      <h4 style={{ marginBottom: 8 }}>
                        I would like someone to create my website
                      </h4>
                      <span className="text-site">
                        <StarIcon style={{ color: "green", fontSize: 14 }} />
                        <StarIcon style={{ color: "green", fontSize: 14 }} />
                        <StarIcon style={{ color: "green", fontSize: 14 }} />
                        <StarIcon style={{ color: "green", fontSize: 14 }} />
                        <StarIcon style={{ color: "green", fontSize: 14 }} />
                        &nbsp; Amazing experience I am glad we meet and very
                        excited to work together, always to be happy to
                        communicate and work together. Amazing experience I am
                        glad we meet and very excited to work together, always
                        to be happy to communicate and work together.
                      </span>
                    </div>
                    <div className="time-work">
                      <p>Mar 2022 - Aug 2022</p>
                      <p>Fixed-Price $122.00</p>
                    </div>
                  </div>
                  <div style={{ fontSize: 14 }}>
                    To Freeancer <b style={{ color: "#3c58a7" }}>Sharma.S</b>
                    &nbsp;
                    <StarIcon style={{ color: "green", fontSize: 14 }} />
                    <StarIcon style={{ color: "green", fontSize: 14 }} />
                    <StarIcon style={{ color: "green", fontSize: 14 }} />
                    <StarIcon style={{ color: "green", fontSize: 14 }} />
                    <StarIcon style={{ color: "green", fontSize: 14 }} />
                    &nbsp; Amazing experience I am glad we meet and very excited
                    to work together, always to be happy to communicate and work
                    together. Amazing experience I am glad we meet and very
                    excited to work together, always to be happy to communicate
                    and work together.
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={classes.ViewMore}>
          <b style={{ color: "#3c58a7" }}>View More</b>&nbsp;(44)
        </div>
      </Card>
      <Card className={classes.cardStyle} style={{ marginTop: "2rem" }}>
        <div className={classes.EMPhistory}>
          <h3 style={{ paddingBttom: "2rem" }}>
            Other open jobs by this Client(4)
          </h3>
          <div className={classes.Root3}>
            <span>
              <b style={{ color: "#3c58a7" }}>Aws Expert wanted</b> Fixed Prce
            </span>
            <span>
              <b style={{ color: "#3c58a7" }}>Looking for a hardhat Expert</b>{" "}
              Fixed Prce
            </span>
            <span>
              <b style={{ color: "#3c58a7" }}>Russian to English translator</b>{" "}
              Fixed Prce
            </span>
            <span>
              <b style={{ color: "#3c58a7" }}>System Administrator</b> Fixed
              Prce
            </span>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Detail;
