import { range } from './utils';


function Grid({ numRows, numCols }) {
  return (
    <div className='grid-container'>
      <div
      style={{
        display: 'grid',
        gap: '12px',
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
        
      }}
      className="grid"
    >
      {Array.from({ length: numRows * numCols }, (index) => {
        return <div key={index} className="grid-item"></div>;
      })}
    </div>
    </div>
  );
}

export default Grid;
