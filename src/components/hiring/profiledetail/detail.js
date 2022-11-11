import {
  AppBar,
  Avatar,
  Card,
  Grid,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import LogoCircle from "../../../comman/uiElement/LogoCircle";
import { useStyles } from "./profiledetail.style";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PropTypes from "prop-types";
import Moment from 'moment';
import StarIcon from "@material-ui/icons/Star";
import Chip from "@material-ui/core/Chip";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Devider from "../../../comman/uiElement/Devider";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import { useNavigate } from "react-router-dom";
import star from '../../../assets/images/icon/light grey.jpeg';
import greenstar from '../../../assets/images/icon/green.png'
import image1 from "../../../assets/images/icon/contribution.png";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
const searchClient = instantMeiliSearch(
  "http://18.142.119.109:7700/",
  "ea10f4f06ef9ce49441fdff44b6181af8630fe355b99ff68f3a5d01e43a80dda"

);

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

const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// function StarRating({count, value, 
//   inactiveColor,
//   size,
//   activeColor, onChange}) {

// // short trick 
// // const stars = Array.from({length: count}, () => '🟊')
// // const stars = Array.from({length: count}, () => <span style={{fontSize:'100px'}}>*</span>)
// const stars = Array.from({length: count}, () => <img src={greenstar} width={30}/>)
// // const stars = <div style={{  width:'200px',
// //   height:'100px',
// //   background:'blue'}}></div>


// // Internal handle change function
// const handleChange = (value) => {
//   onChange(value + 1);
// }

// return (
//   <div>
//     {stars.map((s, index) => {
//       // <img src={greenstar}/>
//        let style = inactiveColor;
//       if (index < value) {
//         style=activeColor;
//         // <img src={greenstar}/>
//       }
//       return (
//         <span className={"star"}  
//           key={index}
//           style={{color: style, width:size, height:size, fontSize: size}}
//           onClick={()=>handleChange(index)}> 
//           {s}
//           {/* <img src={star} width={20}  style={{color: style, width:size, height:size, fontSize: size}}/> */}
//           </span>
        
//       )
//     })}
   
//   </div>
// )
// }


const Detail = ({ id, location, Tags, history, name, hour }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [myIndex, setMyIndex] = React.useState(0);

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ViewProfile = ["View Profile", "Load Organization", "All Work"];

  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [Award, setAward] = useState([]);
  const [userContracts, setUserContracts] = useState([]);
  const[pasthire,setPastHire] = useState([])

  useEffect(() => {
    fetch(
      "https://10acb4dfc9.execute-api.ap-southeast-1.amazonaws.com/dev/getdata",
      {
        method: "POST",
        redirect: "follow",
        headers: {
          "cache-control": "no-cache",
          "postman-token": "f15506df-16a7-8145-1dbc-994d6acf5fd0",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Action: "getTalentUserProfile",
          UserID: `${id}`,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setUser(res.User);
        setUserContracts(res.UserContracts)
        setPastHire(res.User.Past_Hires)
        setAward(res.User[0]?.Awards)
        console.log("resultpost", res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const Hit = ({ hit }) => {
    if (hit.Entity === "USER") {
      console.log("hitttt", hit);
      console.log(hit.Description);

      return (
        <>
          <div className="hit-name" style={{ display: "none" }}>
            <Highlight attribute="Description" hit={hit} />
          </div>
          <div
            hour={
              hit.Rates ? (
                <Highlight attribute="Rates" hit={hit} />
              ) : (
                "0.0$/hour"
              )
            }
            seeMoreClick={() =>
              navigate(`dashboard/telent/findwork/job-description/${hit.Jobpost_ID}`)
            }
            name={hit.Fname && hit.Lname ? hit.Fname + " " + hit.Lname : "name"}
            history={hit.Employment_History ? hit.Employment_History : []}
            // Jobpost_Title={hit.Jobpost_Title ? <Highlight attribute="Jobpost_Title" hit={hit} color="red"/>: "Developer"}
            Tags={hit.Languages ? hit.Languages : []}
            location={hit.Location ? hit.Location : "null"}
          />
        </>
      );
    }
  };
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

  // const [rating, setRating] = useState(0);

  // const handleChange = (value) => {
  //   setRating(value);

  return (
    <>
      <Card className={classes.cardStyle}>
        {user.map((row) => {
          return (
            <>
              <div className={classes.MainRoot}>
                <Badge
                  badgeContent=" "
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  className={classes.badgeRoot}
                >
                  <Avatar
                    className={classes.avatarRoot}
                    src={row.imageURL}
                  ></Avatar>
                </Badge>
                <div className={classes.contentRoot}>
                  <span className={classes.textHead}>{row.Fname}</span>
                  <span className={classes.TextData2}>{row.Location}</span>
                  <div className={classes.Progress}>
                    {row.Success_Percentage}
                    <LinearProgress variant="determinate" value={92} />
                    Job Success
                  </div>
                </div>
              </div>
              <div className={classes.MainRootProfile}>
                <div className={classes.ProfileRoot}>
                  <div className={classes.ViewProfile}>
                    {ViewProfile.map((vp, index) => {
                      return (
                        <span
                          className={
                            myIndex == index
                              ? classes.Active
                              : classes.Active_not
                          }
                          onClick={() => setMyIndex(index)}
                        >
                          {vp}
                          <NavigateNextIcon style={{ color: "white" }} />
                        </span>
                      );
                    })}
                  </div>
                  <div className={classes.PastHire}>
                    <h4>Past Hire</h4>
                    <div>
                      {row.Past_Hires === undefined ? "data not found": (<>
                        {row.Past_Hires.map((val) => {
                        return (
                          <span style={{ display: "flex", alignItems: "center" }}>
                            {val}

                          </span>
                        )
                      })} 
                      </>)}
                     
                     
            
                    </div>
                    {/* <p>
                      Use these examples of recruiting text messages to contact
                      candidates during your hiring process to confirm,
                      reschedule or follow up after an interview.
                    </p> */}
                  </div>
                  <div className={classes.countingData}>
                    <div>
                      <h3>{row.Total_Earning === undefined? "no data" : (<>{row.Total_Earning}</>)}</h3>
                      <span>Total Earning</span>
                    </div>
                    <div>
                      <h3>{row.Total_Jobs === undefined? "no data" : (<>{row.Total_Jobs}</>)}</h3>
                      <span>Total Jobs</span>
                    </div>
                    <div>
                    
                      <h3>{row.Total_Hours === undefined? "no data" : (<>{row.Total_Hours}</>)}</h3>
                      <span>Total Hours</span>
                    </div>
                  </div>
                  <div className={classes.EducationRoot}>
                    <div>
                      <h4>Hours Per Week</h4>
                      <span>{row.Hours_Per_Week}</span>
                    </div>
                    <div>
                      <h4>Languges</h4>
                      {row.Languages.map((val) => {
                        return (
                          <span style={{ display: "flex", alignItems: "center" }}>
                            {val}
                            <CheckCircleIcon
                              style={{
                                fontSize: 17,
                                color: "#3C58A7",
                                marginLeft: "0.2rem",
                              }}
                            />{" "}
                          </span>
                        )
                      })}

                    </div>
                    <div>
                      <h4>Education</h4>
                      {row.Education === undefined ? "data not found": (<>
                        {row.Education.map((val) => {
                        return (
                          <span style={{ display: "flex", alignItems: "center" }}>
                            {val}

                          </span>
                        )
                      })} 
                      </>)}
                    </div>
                  </div>
                  <Devider style={{ marginTop: "4.5%" }} />
                  <div className={classes.badgeroot}>
                    <h3>Awards</h3>

                    <div className={classes.stackroot}>
                      <Stack spacing={5} direction="row">

                        {Award ? Award.map((aw) => {
                          return (
                            <Badge color="secondary">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  rowGap: 4,
                                }}
                              >
                                <img src={image1} width={50} />

                                <span style={{ fontSize: '15px' }}>{aw}</span>
                              </div>
                            </Badge>
                          );
                        }) : null}
                      </Stack>
                    </div>
                  </div>
                </div>
                <div className={classes.DetailRoot}>
                  <div className={classes.dataroot}>
                    <div className={classes.ProfileTitle}>
                      <h2>{row.Title}</h2>
                      <div>
                        <h3>{row.Rates}</h3>
                        <LogoCircle>
                          <AllInclusiveIcon />
                        </LogoCircle>
                      </div>
                    </div>
                    <div>
                      <ul>
                        <li>{row.Description}</li>
                      </ul>
                      <div>
                        <span>Full Skills</span>
                        <p>none</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.WorkHistory}>
                    <div className="logoWrap">
                      <h3>Work History</h3>
                      <LogoCircle>
                        <MoreHorizIcon />
                      </LogoCircle>
                    </div>
                    <AppBar
                      position="static"
                      style={{ marginLeft: -7, marginTop: 10 }}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                      >
                        <Tab label="Completed Job(20)" {...a11yProps(0)} />
                      </Tabs>
                    </AppBar>
                  </div>
                  <div className={classes.workList}>
                   
                    <div className={classes.work}>
                      {row?.Saved_Jobposts?.map((val) => {
                        return (
                          <h3 style={{ paddingTop: "1rem" }}>
                            {val.Jobpost_Title}
                          </h3>
                        );
                      })}

                      <div className={classes.reviewData}>
                        <div>
            {/* {userContracts === []? (<div>hiii</div>): (<div>hello</div>)} */}
            {userContracts.length === 0 ? "data not found" : (
              <>
              {userContracts.map((val) =>{
                            console.log('length',userContracts.length);
                            console.log('ratelength',val.Rating);

                           return(<>
                            {/* {val.Rating === '3' ?   <img src={greenstar} width={40}/>: (<>
                              <img src={greenstar} width={40}/>
                              <img src={greenstar} width={40}/> 
                      </>)} */}
                      {val.Rating === "1" ? (<>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22}className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/></>
                    ) : val.Rating === "2" ? (
                      <>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/></>
                    ) : val.Rating === "3" ? (
                      <>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/></>
                    ) : val.Rating === "4" ? (
                      <>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/></>
                    ) : val.Rating === "5" ? (
                      <>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      <img src={greenstar} width={22} className={classes.star}/>
                      
                     </>
                    ) : (
                      <><img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/>
                      <img src={star} width={22} className={classes.star}/></>
                      
                    ) }
                            {/* <StarRating
                            count={5}
                            size={30}
                            // value={4}
                            value={val.Rating}
                            activeColor={'green'}
                            inactiveColor={'#ddd'}
                           /> */}
                           
                          {/* if(val.Rating === 1){
                            <img src={greenstar} width={40}/>
                          }
                          else if(val.Rating === 2){
                          <>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            </>
                          } 
                          else if(val.Rating === 3){
                          <>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            </>
                          } 
                          else if(val.Rating === 4){
                          <>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            </>
                          } 
                          else if(val.Rating === 5){
                          <>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            <img src={greenstar} width={40}/>
                            </>
                          } 
                          else{
                          <>
                            <img src={star} width={40}/>
                            
                            </>
                          }  */}
                          <br/><br/>
                           <span>{Moment(val.Start_Date).format('D MMM,YYYY')} - {Moment(val.End_Date).format('D MMM,YYYY')}</span>
                           <p style={{ marginTop: 12 }}>
                      {val.Description}
                      </p>
                           </>
                           )
                          }) }
              </>
            )}
                          

                          {/* <StarIcon style={{fill: 'disabled'}} />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon /> */}
                        
                        </div>
                       
                      </div>
                     
                      <div className={classes.HoursRoot}>
                        <h4>50,55.22</h4>
                        <h4>525.00/hr</h4>
                        <h4>2367/hours</h4>
                      </div>
                    </div>
                  </div>
                  {/* <div className={classes.SkillRoot}>
                    <h3>Skills</h3>

                    <div className={classes.chipWrap}>
                      {row.Skill_Set.map((d, i) => (
                        <Chip label={d} />
                      ))}
                    </div>
                  </div> */}
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
                          <Chip label={d} style={{ backgroundColor: '#3C58A7', color: 'white', marginLeft: 5 }} />
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
                </div>
              </div>
            </>
          );
        })}
      </Card>
      <Card className={classes.cardStyle} style={{ marginTop: "2rem" }}>
        {user.map((row) => {
          console.log("newrow", row);
          return (
            <>
              <div className={classes.MainRootProfile}>
                <div className={classes.ProfileRoot1}>
                  <h3>Number of Contribution</h3>
                  <div className={classes.tableroot}>
                    <div className={classes.lefttable}>
                      {
                        Object.entries(row?.Contributions[0])?.map(([key, value]) => {
                          return (
                            <div className={classes.DetailRootleft}>
                              <div>
                                <div className={classes.Progress2}>{key}</div>
                                <br />
                              </div>
                              <div className={classes.RatedRoot}>
                                <div className={classes.TopRated}>{value}</div>
                              </div>
                            </div>
                          )
                        })
                      }

                    </div>

                    {/* <div className={classes.lefttable}>
                    {
                        Object.entries(row?.Contributions[0])?.map(([key,value])=>{
                          return(
                            <div className={classes.DetailRootleft}>
                            <div>
                              <br />
                            </div>
                            <div className={classes.RatedRoot}>
                              <div className={classes.Progress2}>{key}</div>
                              <div className={classes.TopRated}>{value}</div>
                            </div>
                          </div>
                          )
                        })
                      }
                     
                     
                    </div> */}
                  </div>
                </div>
                <div className={classes.DetailRoot}>
                  <div className={classes.EMPhistory}>
                    <h3 style={{ paddingBttom: "2rem" }}>Employment history</h3>
                    {/* <div className={classes.EmployHistoryList}>
                  <div>
                    <h4 style={{ paddingBttom: "0.5rem" }}>
                      Member of Technical Staff | Infinite Computer Solution
                    </h4>
                    <p>September 2011 - November 2015</p>
                  </div>
                  <li>Have Lead Team And Softwere Engineer</li>
                </div> */}
                    <div className={classes.EmployHistoryList}>
                      {row.Employment_History.map((val) => {
                        return (
                          <>
                            <div>
                              <h4
                                style={{
                                  paddingTop: "2rem",
                                  paddingBottom: "1rem",
                                }}
                              >
                                {val.JobTitle}
                              </h4>
                              <p>{val.Duration}</p>
                            </div>
                            <li>{val.Description}</li>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {/* <div className={classes.EMPhistory}>
          <h3 style={{ paddingBttom: "2rem" }}>Employment history</h3>
          <div className={classes.EmployHistoryList}>
            <div>
              <h4 style={{ paddingBttom: "0.5rem" }}>
                Member of Technical Staff | Infinite Computer Solution
              </h4>
              <p>September 2011 - November 2015</p>
            </div>
            <li>Have Lead Team And Softwere Engineer</li>
          </div>
          <div className={classes.EmployHistoryList}>
            <div>
              <h4 style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
                Member of Technical Staff | Infinite Computer Solution
              </h4>
              <p>September 2011 - November 2015</p>
            </div>
            <li>Have Lead Team And Softwere Engineer</li>
          </div>
        </div> */}
      </Card>
    </>
  );
};
export default Detail;
