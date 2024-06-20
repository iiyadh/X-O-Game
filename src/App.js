import { useEffect, useState,useCallback } from 'react';
import './App.css';


function App() {
  const [Xturn,setXturn] = useState(false);
  const [grid,setGrid] = useState(Array(9).fill("-"));
  const handleClear=()=>{setGrid(Array(9).fill("-"));}

  const checkWinner = useCallback(() => {
    const winn = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < winn.length; i++) {
      if (grid[winn[i][0]] !== "-" && grid[winn[i][0]] === grid[winn[i][1]] && grid[winn[i][0]] === grid[winn[i][2]]) {
        alert((Xturn) ? "O wins!" : "X wins!");
        handleClear();
        return true;
      }
    }
    return false;
  }, [grid, Xturn]);
  const handleDraw = useCallback(()=>{
    let draw = 0;
    grid.forEach((ele)=>{if(ele==='-')draw++});
    if(draw===0){
      alert("draw");
      handleClear();
    }
  },[grid])

  useEffect(()=>{
    let t = checkWinner();
    if(!t)handleDraw();
  },[grid,checkWinner,handleDraw]);

  const handleClick = (ind)=>{
    let temp = [...grid];
    if(temp[ind] !== "-")return false;
    temp[ind]=(Xturn)? 'X':'O';
    setXturn(!Xturn);
    setGrid(temp);
  }


  return (
    <div className="App">
      <div className='row'>
        <button className="btns" onClick={()=>handleClick(0)}>{grid[0]}</button>
        <button className="btns" onClick={()=>handleClick(1)}>{grid[1]}</button>
        <button className="btns" onClick={()=>handleClick(2)}>{grid[2]}</button>
      </div>
      <div className='row'>
        <button className="btns" onClick={()=>handleClick(3)}>{grid[3]}</button>
        <button className="btns" onClick={()=>handleClick(4)}>{grid[4]}</button>
        <button className="btns" onClick={()=>handleClick(5)}>{grid[5]}</button>
      </div>
      <div className='row'>
        <button className="btns" onClick={()=>handleClick(6)}>{grid[6]}</button>
        <button className="btns" onClick={()=>handleClick(7)}>{grid[7]}</button>
        <button className="btns" onClick={()=>handleClick(8)}>{grid[8]}</button>
      </div>
    </div>
  );
}

export default App;
