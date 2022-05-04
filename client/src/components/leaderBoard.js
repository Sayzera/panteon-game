import { Avatar } from '@mui/material';
import React from 'react';
import LeaderItem from './leaderItem';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';
function LeaderBoardComponent({ leaderBoard }) {
  return (
    <>
      <div className="leaderBoard">
        <div className="leaderboard-header">
          <h1 className="leaderBoardTitle">Leader Board</h1>

          <div className="top-3">
            <Link to={'/user-detail/' + leaderBoard[1].id}>
            <div className="header-leader-item user-2">
              <Avatar
                alt={leaderBoard[1].username}
                src={leaderBoard[1].picture}
                sx={{
                  width: '75px',
                  height: '75px',
                }}
              />
              <p>
                <img
                  src={require('../assets/img/second.png')}
                  className="medal"
                  alt=""
                />
              </p>
              <p>{leaderBoard[1].username}</p>
              <p className='country'>{leaderBoard[1].country}</p>
              <p><MonetizationOnIcon /> <span>{leaderBoard[1].money.toFixed(4)} </span></p>
              <p  style={{
                  color: leaderBoard[1].daily_earnings > 0 ? 'green' :
                  leaderBoard[1].daily_earnings == 0 ? 'yellow' : 'red',
                  fontWeight:'bold'
              }} >Daily Earnings: {leaderBoard[1].daily_earnings}
                {
                  leaderBoard[1].daily_earnings > 0 ? <ArrowUpwardIcon /> :
                  leaderBoard[1].daily_earnings == 0 ? <ArrowForwardIcon/> : <ArrowDownwardIcon />
                }
                </p>
            </div>
            </Link>

            <Link to={'/user-detail/' + leaderBoard[0].id}>
            <div className="header-leader-item user-1">
              <Avatar
                alt={leaderBoard[0].username}
                src={leaderBoard[0].picture}
                className="leader-avatar-1"
              />
              <p>
           
                <img
                  src={require('../assets/img/first.png')}
                  className="medal"
                  alt=""
                />
              </p>
              <p>{leaderBoard[0].username}</p>
              <p className='country'>{leaderBoard[0].country}</p>
              <p><MonetizationOnIcon /> <span>{leaderBoard[0].money.toFixed(4)} </span> </p>
              <p  style={{
                color: leaderBoard[0].daily_earnings > 0 ? 'green' :
                  leaderBoard[0].daily_earnings == 0 ? 'yellow' : 'red',
                  fontWeight:'bold'
              }} >Daily Earnings: {leaderBoard[0].daily_earnings} 
               {
                  leaderBoard[0].daily_earnings > 0 ? <ArrowUpwardIcon /> :
                  leaderBoard[0].daily_earnings == 0 ? <ArrowForwardIcon/> : <ArrowDownwardIcon />
                }
              </p>
            </div>
            </Link>
            <Link to={'/user-detail/' + leaderBoard[2].id}>
            <div className="header-leader-item user-3">
              <Avatar
                alt={leaderBoard[2].username}
                src={leaderBoard[2].picture}
                sx={{
                  width: '75px',
                  height: '75px',
                }}
              />
              <p>
                {' '}
                <img
                  src={require('../assets/img/third.png')}
                  className="medal"
                  alt=""
                />
              </p>
              <p>{leaderBoard[2].username}</p>
              <p className='country'>{leaderBoard[2].country}</p>

              <p><MonetizationOnIcon /> <span>{leaderBoard[2].money.toFixed(4)} </span></p>
              <p  style={{
                color: leaderBoard[2].daily_earnings > 0 ? 'green' :
                  leaderBoard[2].daily_earnings == 0 ? 'yellow' : 'red',
                  fontWeight:'bold'
              }} > Daily Earnings: {leaderBoard[2].daily_earnings}
               {
                  leaderBoard[2].daily_earnings > 0 ? <ArrowUpwardIcon /> :
                  leaderBoard[2].daily_earnings == 0 ? <ArrowForwardIcon/> : <ArrowDownwardIcon />
                }
              </p>
            </div>
            </Link>
          </div>

          <div className="otherLeaderList">
            {leaderBoard.slice(3, 100).map((data, index) => (
              <LeaderItem key={'lider' + index} data={data} i={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderBoardComponent;
