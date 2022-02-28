import React from 'react';
import clsImage from '../images/clarifier.svg'
import feedImage from '../images/Feed_01.svg'
import cfImage from '../images/Filters_01.svg'
import { useStoreState, useStoreActions } from 'react-flow-renderer';
import {Provider} from 'react-redux';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
//   const nodes = useStoreState((store) => store.nodes);
//   const transform = useStoreState((store) => store.transform);
//   const setSelectedElements = useStoreActions((actions) => actions.setSelectedElements);
//   const selectAll = () => {
//     setSelectedElements(nodes.map((node) => ({ id: node.id, type: node.type })));
//   };


  return (
    <div style={{height: '70px', position: 'absolute', background: 'whitesmoke', width: '100%'}}>
        
      {/* <div className="description">You can drag these nodes to the pane on the right.</div> */}
      <div className="dndnode input" style={{marginTop:'10px',marginLeft:'100px',width:'50px',height:'45px'}} onDragStart={(event) => onDragStart(event, 'customnode_feed')} draggable>
      {/* <p>Filters</p> */}
      <input className="nodrag" type="image" src={feedImage} width="48" height="40" disabled={true} />          
      </div>
      <div className="dndnode" style={{marginTop:'-65px',marginLeft:'200px',width:'50px',height:'45px'}} onDragStart={(event) => onDragStart(event, 'customnode_cf')} draggable>
      {/* Stripper */}
      <input className="nodrag" type="image" src={cfImage} width="48" height="40" disabled={true} />
      </div>
      <div className="dndnode output" style={{marginTop:'-65px',marginLeft:'300px',width:'50px',height:'45px'}} onDragStart={(event) => onDragStart(event, 'customnode_productOut')} draggable>
      {/* Clarifier */}
      <input className="nodrag" type="image" src={clsImage} width="48" height="40" disabled={true} />
      </div>
      
    </div>
  );
};