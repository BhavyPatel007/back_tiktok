import React, { useState, useRef } from "react";
import { useStyles } from "./TabContent_Discover.style";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import LogoCircle from "../../../comman/uiElement/LogoCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { Chip } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import Tag from "../../../comman/Tag";
import Data from "../../../GlobalData/data.json";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const PersonDes = ({ seeMoreClick,text,hour,name,status,Jobpost_Title,Tags,skillSet,location,imgurl}) => {
  const data=[]
  const classes = useStyles();
  let scrl = useRef(null);
  let scrl2 = useRef(null);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const [scrollX2, setscrollX2] = useState(0);
  const [scrolEnd2, setscrolEnd2] = useState(false);
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  //Slide click
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
  //Slide click2
  const slide2 = (shift) => {
    scrl2.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl2.current.scrollWidth - scrl2.current.scrollLeft) <=
      scrl2.current.offsetWidth
    ) {
      setscrolEnd2(true);
    } else {
      setscrolEnd2(false);
    }
  };

  const scrollCheck2 = () => {
    setscrollX2(scrl2.current.scrollLeft);
    if (
      Math.floor(scrl2.current.scrollWidth - scrl2.current.scrollLeft) <=
      scrl2.current.offsetWidth
    ) {
      setscrolEnd2(true);
    } else {
      setscrolEnd2(false);
    }
  };

  return (
    <div className={classes.PersonDesRoot}>
      <div className={classes.HeadeRoot}>
        <div className={classes.MainRoot} onClick={seeMoreClick}>
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
              src="https://v4.mui.com/static/images/avatar/1.jpg"
            ></Avatar>
          </Badge>
          <div className={classes.contentRoot}>
            <span className={classes.textHead} onClick={seeMoreClick}>
              {name}
             
            </span>
            <span className={classes.TextData}>
              {Jobpost_Title}
            </span>
            <span className={classes.TextData2}>{location}</span>
          </div>
        </div>
        <div className={classes.FavRoot}>
          <LogoCircle>
            <FavoriteBorderIcon />
          </LogoCircle>
          {mobile ? null : (
            <Chip
              className={classes.ChipRoot}
              label="Invite to job"
              onClick={() => {}}
            />
          )}
        </div>
      </div>
      <Chip
        icon={<FlashOnIcon style={{ fontSize: "19px", color: "#3c58a7" }} />}
        label={status}
        onClick={() => {}}
        variant="outlined"
        className={classes.chip2}
      />
      <div className={classes.DetailRoot}>
        <div>
          <b>{hour}</b>
        </div>
        <div className={classes.RatedRoot}>
          <div className={classes.Progress}>
            92% Job Success
            <LinearProgress variant="determinate" value={92} />
          </div>
          <div className={classes.TopRated}>
            <BeenhereIcon style={{ color: "pink", fontSize: 20 }} />
            Top Rated Plus
          </div>
        </div>
      </div>
      <div className={classes.DetailRootData}>
        {text}
        {/* <ShowMoreLess text={text}/> */}
      </div>
      <br />
      <div>
        {" "}
        <b>Suggestion because they worked on</b>{" "}
        <span style={{ color: "blue" }}>jobs found that match yor search</span>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <span className={classes.SliderSpan}>
          Website Builders & CMS Platforms
        </span>

        <div className={classes.sliderContent} style={{ paddingLeft: 0 }}>
          {Tags.length > 10
            ? scrollX2 !== 0 && (<>
              <Chip label="HTML" />
              <Chip label="CSS" />
              <Chip label="Python" />
              <Chip label="Java" />
              <Chip label="JavaScript" />
              <Chip label="Swift" />
              <Chip label="C++" />
              <Chip label="C#" />
              <Chip label="Golang" />
              <Chip label="PHP" />
              <Chip label="TypeScript" />
              <Chip label="Visual Basic .NET" />
              <Chip label="Ruby" />
              <Chip label="SQL" />
                <button
                  className="prev"
                  onClick={() => slide2(-50)}
                  // onMouseEnter={(e) => anim(e)}
                  // onMouseLeave={(e) => anim2(e)}
                >
                  <ArrowBackIosSharpIcon />
                </button>
                </>
              )
            : null}

          <ul className="sliderParent" ref={scrl2} onScroll={scrollCheck2}>
            {
              Tags?
              Tags.map((d, i) => (
                <Tag data={d} key={i} />
              ))
              :"not found"
            }
          </ul>
          {Tags.length > 10
            ? !scrolEnd2 && (
                <button
                  className="next"
                  onClick={() => slide2(+50)}
                  // onMouseEnter={(e) => anim(e)}
                  // onMouseLeave={(e) => anim2(e)}
                >
                  <ArrowForwardIosSharpIcon />
                </button>
              )
            : null}
        </div>
      </div>
      <div style={{marginTop:'0.7rem'}}>
        <span className={classes.SliderSpan}>UX/UI Design Softwere</span>
        
        <div className={classes.sliderContent} style={{ paddingLeft: 0 }}>
          {skillSet.length > 10
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
            {skillSet.map((d, i) => (
              <Tag data={d} key={i} />
            ))}
          </ul>
          {skillSet.length > 10
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
          {/* {
              !scrolEnd && (
                <button
                  className="next"
                  onClick={() => slide(+50)}
                  // onMouseEnter={(e) => anim(e)}
                  // onMouseLeave={(e) => anim2(e)}
                >
                  <ArrowForwardIosSharpIcon />
                </button>
              )
             } */}
        </div>
      </div>
    
      {mobile ? (
        <Chip
          className={classes.ChipRoot}
          label="Invite to job"
          onClick={() => {}}
        />
      ) : null}
    </div>
  );
};
export default PersonDes;


// import React from 'react';

// import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';


// import {
//   InstantSearch,
//   Hits,
//   SortBy,
//   SearchBox,
//   Pagination,
//   Highlight,
//   ClearRefinements,
//   RefinementList,
//   Configure,
//   Snippet
// } from "react-instantsearch-dom";
// const searchClient = instantMeiliSearch(
//   "http://18.142.119.109:7700",
//   "ea10f4f06ef9ce49441fdff44b6181af8630fe355b99ff68f3a5d01e43a80dda"
// );
// const usertags = ['HTML', 'CSS']
// const page = 'JOBPOST'
// const PersonDes = () => (
  
//   <div className="ais-InstantSearch">
//     <h1>Gurucool Search</h1>
//     <h2>
//       Search for jobs, companies, people and more{" "}
//       <span role="img" aria-label="emoji">
//         🏢👨‍🏭🌐
//       </span>
//     </h2>
//     <p>
//       To begin, start typing what you want to search below
//     </p>
//     <InstantSearch indexName="gurucool_dev:Recommended_for:desc" searchClient={searchClient}>
//       <div className="left-panel">
//         <ClearRefinements />
//         <h2>Countries</h2>
//         <RefinementList attribute="Location" operator="or" />
//         <Configure
//             hitsPerPage={10}
//             attributesToSnippet={["description:50"]}
//             snippetEllipsisText={"..."}
//             filters='Entity="JOBPOST"'
//           />
//       </div>
//       <div className="right-panel">
//         <SearchBox />
//         <Hits hitComponent={Hit} />
//         <Pagination showLast={true} />
//       </div>
//     </InstantSearch>
//   </div>
// );

// const Hit = ({ hit }) => (
//   <div key={hit.id}>
//     <div className="hitname">
//       <Highlight attribute="Entity" hit={hit} />
//     </div>

//     <div>
//       {(() => {
//         // if (hit.Entity ===  "JOBCONTRACT" ) {
//         //   return (

//         //     <div>
//         //       <div className="hit-info">Jobpost ID: <Highlight attribute="Jobpost_ID" hit={hit} /></div>
//         //       <div className="hit-info">Company: <Highlight attribute="Organization_Name" hit={hit} /></div>
//         //       <div className="hit-info">Contract Term: <Highlight attribute="Contract_Term" hit={hit} /></div>
//         //     </div>
//         //   )
//         // }
//         if (hit.Entity ===  "JOBPOST" ) {

//           console.log('jobpost',hit.Jobpost_ID)
//           console.log('userid',hit.User_ID);
//           console.log('hitnew',hit);
//           //console.log(hit.Recommended_for)
//           //console.log(usertags)
//           var intersections = usertags.filter(e => hit.Recommended_for.indexOf(e) !== -1);
//           console.log('1111111',intersections.length)

//           return (

//             <div>


              
//               <div className="hit-info">Jobpost ID: <Highlight attribute="Jobpost_ID" hit={hit} /></div>
//               <div className="hit-info">Company: <Highlight attribute="Organization_Name" hit={hit} /></div>
//               <div className="hit-info">Description: <Highlight attribute="Description" hit={hit} /></div>
//               <div className="hit-info">Rates: <Highlight attribute="Rates" hit={hit} /></div>
//               <div className="hit-info">Experience: <Highlight attribute="Experience" hit={hit} /></div>
//               <div className="hit-info">Languages:
              
//                 {Array.isArray(hit.Languages)
//                   ? hit.Languages.map((_cat, i) => {
//                       return <ul><li key={i}><Highlight attribute={`Skill_Set[${i}]`} hit={hit} /></li></ul>
//                     })
//                 : null}
          
//               </div>
//               {(() => {
//                   if (intersections.length/hit.Recommended_for.length>0.5) {
//                     return (
//                       <div className="hit-recommended">Best Matched </div>
//                     )
//                   }
//               })()}

//             </div>
//           )
//         }
//         // else if (hit.Entity ===  "USER" ) {
//         //   return (

//         //     <div>
//         //       <div className="hit-info">Name: <Highlight attribute="Fname" hit={hit} /> <Highlight attribute="Lname" hit={hit} />, Email: <Highlight attribute="Email" hit={hit} /></div>
//         //       <div className="hit-info">Location: <Highlight attribute="Location" hit={hit} /> , Experience: <Highlight attribute="Experience" hit={hit} /></div>
//         //       <div className="hit-info">Employment History: <Highlight attribute="Employment_History" hit={hit} /></div>
//         //       <div className="hit-rates">Rates: <Highlight attribute="Rates" hit={hit} /></div>
//         //       <div className="hit-info">
              
//         //         {Array.isArray(hit.Languages)
//         //           ? hit.Languages.map((_cat, i) => {
//         //               return <div class="hit-tag" key={i}><Highlight attribute={`Languages[${i}]`} hit={hit} /></div>
//         //             })
//         //         : null}
          
//         //       </div>
//         // </div>
//         //   )
//         // } 
//         // else if (hit.Entity ===  "ORGANIZATION" ) {
//         //   return (

//         //     <div>
//         //       <div className="hit-info">Org ID: <Highlight attribute="Organization_ID" hit={hit} /></div>
//         //       <div className="hit-info">Org Name: <Highlight attribute="Organization_Name" hit={hit} /></div>
//         //       <div className="hit-info">Location: <Highlight attribute="Location" hit={hit} /></div>
//         //     </div>
//         //   )
//         // } 
//       })()}
//     </div>
    
//   </div>
// );

// export default PersonDes
