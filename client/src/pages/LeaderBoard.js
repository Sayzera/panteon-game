import React,{useEffect} from 'react'
import LeaderBoardComponent from '../components/leaderBoard'
import {useDispatch, useSelector} from 'react-redux'
import {fetchLeaderBoard} from '../redux/leaderBoardSlice'
function LeaderBoard() {
  
  const dispatch = useDispatch()

  const leaderBoard = useSelector((state) => state.leaderBoard.leaderBoard)
  const error = useSelector((state) => state.leaderBoard);

  useEffect(() => { 
    dispatch(fetchLeaderBoard())

  },[]);
  return (
    <>
    <div className='leaderboard-page'>
      
      {
        leaderBoard?.length > 0 ? <LeaderBoardComponent leaderBoard={leaderBoard}/> : <div>Loading...</div>
      }
    </div>
     
    </>
  )
}

export default LeaderBoard