import { render } from '@testing-library/react';
import React, { Component, useState, useRef, useCallback, useEffect } from 'react';
// import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';
import InputForm from './InputForm'
import ReactFlow, { removeElements, addEdge, Handle, ReactFlowProvider, Controls, MiniMap, Background, Position, getOutgoers, getIncomers } from 'react-flow-renderer';
import axios from 'axios';
import RegistrationForm from './index';
import CustomizedDialogs from './dialog';
import Modal from 'react-modal';
import AnimeList from './AnimeList';
import Table_mui from './Table_mui'
import BasicSelect from './Dropdown';

import './validation.css';
import Sidebar from './Sidebar';

import './dnd.css';
import { Icon } from '@material-ui/core';
//import myImage from '../images/COLDIN.png'
import clsImage from '../images/clarifier.svg'
import feedImage from '../images/Feed_01.svg'
import cfImage from '../images/Filters_01.svg'

import localforage from 'localforage';
import './save.css';
// import myData from "C:\Users\GL5729\Flask_React_project\pythonFlask\files\sample1.json";
import mydata from './sample2.json';


let id = 0;
var edge1=[];
var node1=[];
var flow1 = mydata
console.log(flow1);
function Flow() {
  
  localforage.config({
    name: 'react-flow-docs',
    storeName: 'flows',
  });

  const initialElements = [
    // { id: '0', type: 'custominput', position: { x: 0, y: 150 }, style: { border: '1px solid red', padding: 0, width: 60 } },
    // { id: 'A', type: 'customnode', position: { x: 250, y: 0 },style: { border: '1px solid red', padding: 0, width: 60 } },
    // { id: 'B', type: 'customnode', position: { x: 250, y: 150 },style: { border: '1px solid red', padding: 0, width: 60 } },
    // { id: 'C', type: 'customnode', position: { x: 250, y: 300 },style: { border: '1px solid red', padding: 0, width: 60 } },

    // { id: "e1-2", source: "0", target: "A", type: "step" },
    // { id: "e2-3", source: "0", target: "B", type: "step" },
    // { id: "e1-3", source: "0", target: "C", type: "step" }
    
  ];


  // const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
  var pos;
  // const isValidConnection = (connection) =>
  // {
  //   //connection.target === 'B';
  //   // if(connection.target === 'dndnode_12')
  //   // { 
  //   //   console.log(pos);
  //   //   pos = "top"
  //   //   //$('dndnode_12').css('position','top')
  //   // }
  //   // else{
  //   //   //console.log('1',pos);
  //   //   pos = "left"
  //   //   //$('dndnode_12').css('position','left')
  //   // }
  //   connection.target == 'dndnode_1'
  //   console.log('connection: ',connection)
  //   };
  const onConnectStart = (event, { nodeId, handleType, type }) =>
    // {id: "e1-2", source: "0", target: "A", type: "step"} 
    console.log('on connect start', { nodeId, handleType, type });
    {

    }
  const onConnectStop = (event) => {//console.log('on connect stop', event)
  };
  const onConnectEnd = (event) => {console.log('on connect end', event)
  };

  const customNodeStyles = {
    // background: '#9CA8B3',
    // color: 'orange',
    // padding: 10,
    // width: '20px'

  };

  //const getId = () => `dndnode_${id++}`;
  
  const CustomInput = () => (
    <div style={customNodeStyles}>
      {/* <input className="nodrag"
        type="color"></input> */}
      
      {/* <div>Feed
        <input className="nodrag" type="image" src={myImage} width="48" height="40" disabled={true} />
      </div>
      <Handle type="source" position="right" isValidConnection={isValidConnection} /> */}
    </div>
  );

  const CustomNode = ( {id} ) => {
    
    if(id.replace(/[\d_]+/g, '') == 'feed')
    { 
      return(
      <div>
       {/* isValidConnection={isValidConnection} */}
      <Handle id='a' type="target" position="left" />
      <Handle id='b' type="target" position="left" style={{ marginTop: 10 }}/>
      <div>{id}</div>
      <input className="nodrag" type="image" src={feedImage} width="48" height="40" disabled={true} />
      <Handle id='c' type="source" position="right" />
      <Handle id='d' type="source" position="right" style={{ marginTop: 10 }}/>
      {/* <Handle id={id+'3'} type="source" position="bottom"/> */}
      {/* <Handle id={id+'1'} type="source" style={{ left: 20, marginTop: 65}}/>
      <Handle id={id+'3'} type="source" style={{ left: 40, marginTop: 65 }}/> */}
    </div>
      );
    }

    else if(id.replace(/[\d_]+/g, '') == 'cls')
    { 
      return(
      <div>
       {/* isValidConnection={isValidConnection} */}
      <Handle id='a' type="target" position="left" />
      <div style={{fontSize:9.29}}>Product Out</div>
      <input className="nodrag" type="image" src={clsImage} width="48" height="40" disabled={true} />
    </div>
      );
    }
    else if(id.replace(/[\d_]+/g, '') == 'cf')
    { 
      return(
      <div>
       {/* isValidConnection={isValidConnection} */}
      
      <div style={{marginTop:-5}}>{id}</div>
      <input className="nodrag" type="image" src={cfImage} width="48" height="40" disabled={true} />
      <Handle id={'a'} type="target" position="left" />
      <Handle id={'b'} type="target" position="left" style={{ marginTop: 10 }}/>
      <Handle id={'e'} type="target" position="top" />
      <Handle id={'f'} type="target" position="top" style={{ marginLeft: 10 }}/>
      <Handle id={'c'} type="source" position="right" />
      <Handle id={'d'} type="source" position="right" style={{ marginTop: 10 }}/>
      <Handle id={'g'} type="source" position="bottom" />
      <Handle id={'h'} type="source" position="bottom" style={{ marginLeft: 10 }}/>

      
      {/* <Handle id={id+'3'} type="source" position="bottom"/> */}
      {/* <Handle id={id+'1'} type="source" style={{ left: 20, marginTop: 65}}/>
      <Handle id={id+'3'} type="source" style={{ left: 40, marginTop: 65 }}/> */}
    </div>
      );
    }
    
  };

  const nodeTypes = {
    // custominput: CustomInput,
    //customnode: CustomNode,
    customnode_feed: CustomNode,
    customnode_cf: CustomNode,
    customnode_productOut: CustomNode,
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'linear-gradient(white, silver)',
      width: '700px'

      //'#DAF7A6'

    },
  };

  
  const flowKey = 'example-flow';
  const reactFlowWrapper = useRef(null);
  const inputFile = useRef(null)
  //const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [rfInstance, setRfInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [nodes, setNodes] = useState(null);
  const [edges, setEdges] = useState(null);
  
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  
  
  
  // const ongetOutgoers = (outgoingConn) =>
  //   setElements((els) => getOutgoers(outgoingConn, els));
  
    // const ongetOutgoers = getOutgoers(outgoingConn, els)
  
  // const onConnect = (params) => {
  //   console.log('on connect', params);
  //   setElements((els) => addEdge(params, els));
  // };
  const onConnect = (params) => setElements((els) => {
    var targetHandle_cf;
    var sourceHandle_cf;
    // if (params.target.replace(/[\d_]+/g, '') == 'cf')
    // {
      
      if (params.sourceHandle == 'c')
      {
        targetHandle_cf = 'a'
        sourceHandle_cf = 'c'
      }
      if (params.sourceHandle == 'd')
      {
        targetHandle_cf = 'b'
        sourceHandle_cf = 'd'
      }
      if (params.sourceHandle == 'g')
      {
        targetHandle_cf = 'e'
        sourceHandle_cf = 'g'
      }
      if (params.sourceHandle == 'h')
      {
        targetHandle_cf = 'f'
        sourceHandle_cf = 'h'
      }
    // }
    const edge = {
      // id: getId(),
      source: params.source ?? '',
      target: params.target ?? '',
      // arrowHeadType: ArrowHeadType.ArrowClosed, smoothstep
      type: "smoothstep",
      arrowHeadType: 'arrowclosed',
      style: { stroke: 'lightblue',strokeWidth: 2 },
      //targetHandle: 'a,b', //params.target,
      // animated: true,
      sourceHandle: sourceHandle_cf,//(params.targetHandle == 'a')?"c":"d",
      targetHandle: targetHandle_cf //(params.sourceHandle == 'c')?"a":"b",
      
      //#f6ab6c
    };
    edge1.push(edge)
    return addEdge(edge, els);
  });
  
  const onElementClick = (event, object) => {
    const graphElements = [object.id];
    GetOutgoingConnection(object.id, elements)
    
    
    // setElements((els) => {
    //   // setEdges((edge1) =>
    //   // edge1.sort((a, b) => {
    //   //     if (a.source < b.source) return -1;
    //   //     if (a.source > b.source) return 1;
    //   //     return 0;
    //   //   })
    //   // );
    //   edge1.forEach((els) => {
    //     if (graphElements.includes(els.source)) {
    //       graphElements.push(els.target);
    //       els.animated = true;
    //     } else {
    //       els.animated = false;
    //     }
    //   });
    //   return [...els, els];
    // });

  };

  // const getAllIncomers = (node, elements) => {
  //   return getIncomers(node, elements).reduce<Node>(
  //     (memo, incomer) => [...memo, incomer, ...getAllIncomers(incomer, elements)],
  //     []
  //   )
  // }
  
  // const getAllOutgoers = (node, elements) => {
  //   return getOutgoers(node, elements).reduce<Node>(
  //     (memo, outgoer) => [...memo, outgoer, ...getAllOutgoers(outgoer, elements)],
  //     []
  //   )
  // }
  // const allOutgoers = getAllOutgoers(CustomNode, elements)
  var sourceArr=[];
  // const GetOutgoingConnection=(ob,elms)=>
  // { 
  //   for(var i=0; i<elms.length; i++){
  //   if (elms[i].source != undefined && elms[i].source == ob)
  //   { 
  //     elms[i].animated = true;
  //     //setElements(els[i]);
  //     //sourceArr.push(els[i].source)
  //   }
  // }
  //   return elms
  
  // }


  const GetOutgoingConnection = (ob, elms) => setElements((els) => {
    for (var i = 0; i < elms.length; i++) {
      if (elms[i].source != undefined && elms[i].source == ob) {
        elms[i].animated = true;
        //setElements(els[i]);
        //sourceArr.push(els[i].source)
      }
    }
    return [...elms, els]

  });

  
  
  
  // useEffect(() => {
  //   // POST request using axios inside useEffect React hook
  //   const article = { title: 'React Hooks POST Request Example' };
  //   axios.post('https://reqres.in/api/articles', article)
  //     .then(response => setArticleId(response.data.id));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  // const allIncomers = getAllIncomers(node, elements)
  

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      //localforage.setItem(flowKey, JSON.stringify(flow));
      
      // axios.post(`http://localhost:5000/add`, JSON.stringify(flow))
      //   .then(response => 'Success');
      
      axios.post(`http://localhost:5000/`,flow)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
      }
  }, [rfInstance]);

  const [post, setPost] = useState(null);
  const onOpen = () => {
    // `current` points to the mounted file input element
   //inputFile.current.click();
   //onsole.log(inputFile);
  
  
  axios.post(`http://localhost:5000/f`,{filename: 'sample1.json'})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {  
        console.log(error); 
      });
  
    //   setTimeout(() => {  axios.get(`http://localhost:5000/post`,{filename: 'sample1.json'}).then((response) => {
    //     console.log(response.data);
    //     setPost(response.data);
    // }); }, 2000);
   
    
    // useEffect(() => {
    //   axios.get(`http://localhost:5000/post`).then((response) => {
    //     setPost(response.data);
    //   });
    // }, []);
    // if (!post) return null;
  };

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = await localforage.getItem(flowKey);

      if (flow1) {
        const [x = 0, y = 0] = flow1.position;
        setElements(flow1.elements || []);
        //transform({ x, y, zoom: flow.zoom || 0 });
      }
    };

    restoreFlow();
  }, [setElements]);

  // Model Dialog
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true)
  }
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false)
  }

  // const reactFlowWrapper = useRef(null);
  // const [reactFlowInstance, setReactFlowInstance] = useState(null);
  // const [elements, setElements] = useState(initialElements);
  // const onConnect = (params) => setElements((els) => addEdge(params, els));
  // const onElementsRemove = (elementsToRemove) =>
  //   setElements((els) => removeElements(elementsToRemove, els));


  const onLoad = (_reactFlowInstance) =>
    setRfInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };


  

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = rfInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    if (type == 'customnode_feed')
    {
      const newNode0 = {
        id: `feed_${id++}`, //getId(),
        type: type,
        position,
        // {type} node 
        data: { label: <div><input className="nodrag" type="image" src='../images/Feed_01.svg' width="48" height="40" disabled={true} /></div>},
        style: {width:'50px',height:'45px'},
        //sourceHandle: 'a'+id,
      };
      node1.push(newNode0)
      console.log('node details: ',newNode0);
      setElements((es) => es.concat(newNode0));
    }
    else if (type == 'customnode_productOut')
    {
      const newNode1 = {
        id: `cls_${id++}`, //getId(),
        type: type,
        position,
        // {type} node 
        data: { label: <div><input className="nodrag2" type="image" src={clsImage} width="48" height="40" disabled={true} /></div>},
        style: {width:'50px',height:'45px'},
        //sourceHandle: 'a'+id,
      };
      node1.push(newNode1)
      console.log('node details: ',newNode1);
      setElements((es) => es.concat(newNode1));
    }
    else if (type == 'customnode_cf')
    {
      const newNode2 = {
        id: `cf_${id++}`, //getId(),
        type: type,
        position,
        // {type} node 
        data: { label: <div><input className="nodrag3" type="image" src={cfImage} width="48" height="40" disabled={true} /></div>},
        style: {width:'50px',height:'45px'},
        //sourceHandle: 'a'+id,
      };
      node1.push(newNode2)
      console.log('node details: ',newNode2);
      setElements((es) => es.concat(newNode2));
    }
    
    
    
  };

  return (
    <div className="dndflow" style={{ height: 500 }}>
      {/* <Modal isOpen={modalIsOpen} style={customStyles}>
        <button onClick={setModalIsOpenToFalse} style={{ marginLeft: '95%' }}>x</button>
         <BasicSelect/> commented
        <Table/>  commented
        <AnimeList />
      </Modal> */}
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            deleteKeyCode={46}
            selectNodesOnDrag={false}
            //onLoad={onLoad}
            
            //onLoad={setRfInstance}
            className="validationflow"
            nodeTypes={nodeTypes}
            onConnectStart={onConnectStart}
            onConnectStop={onConnectStop}
            onConnectEnd={onConnectEnd}
            //onElementClick={setModalIsOpenToTrue}
            onElementClick={onElementClick}
            connectionLineType='step'
            style={{marginTop: '75px'}}
            
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onLoad={setRfInstance}
            
          // style = {{stroke: '#ff6060',strokeWidth: 5}}
          >

            {/* <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return '#fff';
        }}
        nodeBorderRadius={2}
      /> */}

            <Controls />
            <Background color="#aaa" gap={16} />
            {/* <div className="save__controls">
          <button onClick={onSave}>save</button>
          </div> */}
          </ReactFlow>
          
        </div>
        
        {/* <div style={{width:900, height:50}}><Sidebar /></div>  onOpen */  }
        <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
        <div className="save__controls">
          <button onClick={onSave}>save</button>
          <button onClick={onRestore}>open</button> 
          </div>
      </ReactFlowProvider>
      <Sidebar />
    </div>

    // <div className="dndflow" style={{ height: 500, width: 1000 }}>
    //    <ReactFlowProvider>
    //      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
    //        <ReactFlow
    //          elements={elements}
    //          onConnect={onConnect}
    //          onElementsRemove={onElementsRemove}
    //         onLoad={onLoad}
    //          onDrop={onDrop}
    //          onDragOver={onDragOver}
    //        >
    //          <Controls />
    //        </ReactFlow>
    //      </div>
    //      <Sidebar />
    //    </ReactFlowProvider>
    //  </div>

  );


}
export default Flow;






// function Flow()
// { 
//   const elements_init = [
//     {
//       id: '1',
//       type: 'input', // input node
//       data: {label: 'Input Node' },
//       position: { x: 250, y: 25 },
//     },
//     // default node
//     {
//       id: '2',
//       // you can also pass a React component as a label
//       data: { label: <div onClick={InputForm}>Default Node</div> },
//       position: { x: 100, y: 125 },
//     },
//     {
//       id: '3',
//       type: 'output', // output node
//       data: { label: 'Output Node' },
//       position: { x: 250, y: 250 },
//     },
//     // animated edge
//     { id: 'e1-2', source: '1', target: '2', animated: true },
//     { id: 'e2-3', source: '2', target: '3' },
//   ];

//   const [elements, setElements] = useState(elements_init);
//   const onElementsRemove = (elementsToRemove) =>
//   setElements((els) => removeElements(elementsToRemove, els));
//   const onConnect = (params) => setElements((els) => addEdge(params, els));
//   return(
//     <div style={{ height: 500, width: 2000 }}>
//       <ReactFlow
//         elements={elements}
//         onElementsRemove={onElementsRemove}
//         onConnect={onConnect}
//         deleteKeyCode={46} /* 'delete'-key */
//         // onElementClick= {InputForm}
//         // onClick={InputForm}
//       />
//     </div>

//   );
// }

// export default Flow;

// // export default () => (
// //   <div style={{ height: 300 }}>
// //     <ReactFlow elements={elements} />
// //   </div>
// // );















// import React, { useState, useRef } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   removeElements,
//   Controls,
// } from 'react-flow-renderer';

// import Sidebar from './Sidebar';

// import './dnd.css';

// const initialElements = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'input node' },
//     position: { x: 250, y: 5 },
//   },
// ];

// let id = 0;
// const getId = () => `dndnode_${id++}`;

// const DnDFlow = () => {
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);
//   const [elements, setElements] = useState(initialElements);
//   const onConnect = (params) => setElements((els) => addEdge(params, els));
//   const onElementsRemove = (elementsToRemove) =>
//     setElements((els) => removeElements(elementsToRemove, els));

//   const onLoad = (_reactFlowInstance) =>
//     setReactFlowInstance(_reactFlowInstance);

//   const onDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   };

//   const onDrop = (event) => {
//     event.preventDefault();

//     const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//     const type = event.dataTransfer.getData('application/reactflow');
//     const position = reactFlowInstance.project({
//       x: event.clientX - reactFlowBounds.left,
//       y: event.clientY - reactFlowBounds.top,
//     });
//     const newNode = {
//       id: getId(),
//       type,
//       position,
//       data: { label: `${type} node` },
//     };

//     setElements((es) => es.concat(newNode));
//   };

//   return (
//     <div className="dndflow" style={{ height: 500, width: 1000 }}>
//       <ReactFlowProvider>
//         {/* <div className="reactflow-wrapper" ref={reactFlowWrapper}>
//           <ReactFlow
//             elements={elements}
//             onConnect={onConnect}
//             onElementsRemove={onElementsRemove}
//             onLoad={onLoad}
//             onDrop={onDrop}
//             onDragOver={onDragOver}
//           >
//             <Controls />
//           </ReactFlow>
//         </div> */}
//         <Sidebar />
//       </ReactFlowProvider>
//     </div>
//   );
// };

// export default DnDFlow;