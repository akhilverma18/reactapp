import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components';
import CustomizedDialogs from './components/dialog';

import Flow from './components/Flow' 
import UpdateNode from './components/UpdateNode';
import InputForm from'./components/InputForm'
import HorizontalFlow from'./components/Validation'
import Table_mui from './components/Table_mui'
// import Sidebar from './components/Sidebar';
// import './components/dnd.css';
import SaveRestore from './components/SaveRestore' 

import './components/save.css';

function App() {
  return (
    <div className="App">
      <Flow />
      {/* <SaveRestore /> */}
      {/* <Sidebar/> */}
      {/* <Table /> */}
      {/* <CustomizedDialogs title="Register Here">
      <RegistrationForm />
        </CustomizedDialogs> */}
      {/* <InputForm /> */}
      {/* <HorizontalFlow /> */}
      {/* <UpdateNode /> */}
    </div>
  );
} 
export default App;




// // import "./styles.css";

// import React, { useEffect, useState } from "react";

// import ReactFlow from "react-flow-renderer";

// const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

// const initialNodes = [
//   {
//     id: "1",
//     elementType: "node",
//     sourcePosition: "right",
//     type: "input", // input node
//     data: { label: "D1" },
//     position: { x: 50, y: 25 }
//   },
//   {
//     id: "2",
//     elementType: "node",
//     sourcePosition: "right",
//     type: "input", // input node
//     data: { label: "D2" },
//     position: { x: 50, y: 125 }
//   },
//   {
//     id: "3",
//     elementType: "node",
//     sourcePosition: "right",
//     type: "input", // input node
//     data: { label: "D3" },
//     position: { x: 50, y: 225 }
//   },

//   {
//     id: "4",
//     elementType: "node",
//     sourcePosition: "right",
//     targetPosition: "left",
//     data: { label: "C1" },
//     position: { x: 350, y: 25 }
//   },
//   {
//     id: "5",
//     elementType: "node",
//     sourcePosition: "right",
//     targetPosition: "left",
//     data: { label: "C2" },
//     position: { x: 350, y: 125 }
//   },
//   {
//     id: "6",
//     elementType: "node",
//     sourcePosition: "right",
//     targetPosition: "left",
//     data: { label: "C3" },
//     position: { x: 350, y: 225 }
//   },

//   {
//     id: "7",
//     elementType: "node",
//     sourcePosition: "right",
//     targetPosition: "left",
//     data: { label: "I1" },
//     position: { x: 650, y: 25 }
//   },
//   {
//     id: "8",
//     elementType: "node",
//     sourcePosition: "right",
//     targetPosition: "left",
//     data: { label: "I2" },
//     position: { x: 650, y: 125 }
//   },

//   {
//     id: "9",
//     elementType: "node",
//     targetPosition: "left",
//     type: "output", // output node
//     data: { label: "K1" },
//     position: { x: 950, y: 25 }
//   },
//   {
//     id: "10",
//     elementType: "node",
//     targetPosition: "left",
//     type: "output", // output node
//     data: { label: "K2" },
//     position: { x: 950, y: 125 }
//   }
// ];

// const initialEdges = [
//   {
//     id: "d1-c1",
//     //elementType: "edge",
//     source: "1",
//     target: "4",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "d1-c2",
//     //elementType: "edge",
//     source: "1",
//     target: "5",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "d2-c1",
//     //elementType: "edge",
//     source: "2",
//     target: "4",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "d2-c2",
//     //elementType: "edge",
//     source: "2",
//     target: "5",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "d2-c3",
//     //elementType: "edge",
//     source: "2",
//     target: "6",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "d3-c2",
//     //elementType: "edge",
//     source: "3",
//     target: "5",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },

//   {
//     id: "c1-I1",
//     //elementType: "edge",
//     source: "4",
//     target: "7",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "c1-I2",
//     //elementType: "edge",
//     source: "4",
//     target: "8",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "c2-I1",
//     //elementType: "edge",
//     source: "5",
//     target: "7",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "c2-I2",
//     //elementType: "edge",
//     source: "5",
//     target: "8",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "c3-I1",
//     //elementType: "edge",
//     source: "6",
//     target: "7",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },

//   {
//     id: "i1-k2",
//     //elementType: "edge",
//     source: "7",
//     target: "10",
//     arrowHeadType: "arrow",
//     type: "straight"
//   },
//   {
//     id: "i2-k1",
//     //elementType: "edge",
//     source: "8",
//     target: "9",
//     arrowHeadType: "arrow",
//     type: "straight"
//   }
// ];

// const initialElements = [...initialNodes, ...initialEdges];

// export default () => {
//   const [elements, setElements] = useState(initialElements);
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const onElementClick = (event, object) => {
//     const graphElements = [object.id];

//     setElements((els) => {
//       setEdges((edges) =>
//         edges.sort((a, b) => {
//           if (a.source < b.source) return -1;
//           if (a.source > b.source) return 1;
//           return 0;
//         })
//       );
//       edges.forEach((el) => {
//         if (graphElements.includes(el.source)) {
//           graphElements.push(el.target);
//           el.animated = true;
//         } else {
//           el.animated = false;
//         }
//       });
//       return [...nodes, ...edges];
//     });

//     // setElements((els) =>
//     //   els.map((el) => {
//     //     if (graphElements.includes(el.source)) {
//     //       graphElements.push(el.target);
//     //       el.animated = true;
//     //     } else {
//     //       el.animated = false;
//     //     }

//     //     return el;
//     //   })
//     // );
//   };

//   const addChange = (el) => {
//     const newChangeNode = {
//       id: nodes.length + 1,
//       elementType: "node",
//       sourcePosition: "right",
//       targetPosition: "left",
//       data: { label: "C4" },
//       position: { x: 350, y: 325 }
//     };

//     setNodes((nodes) => {
//       return [...nodes, newChangeNode];
//     });
//     console.log(nodes);
//     setElements((els) => [...nodes, ...edges]);
//     console.log(newChangeNode);
//   };

//   return (
//     <div style={{ height: 450 }}>
//       <button onClick={addChange}>Add Change</button>
//       <ReactFlow
//         elements={elements}
//         //onLoad={onLoad}
//         onElementClick={onElementClick}
//       />
//     </div>
//   );
// };






// import React, { useState, useCallback } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   removeElements,
//   addEdge,
//   useZoomPanHelper,
// } from 'react-flow-renderer';
// import localforage from 'localforage';

// import './components/save.css';

// localforage.config({
//   name: 'react-flow-docs',
//   storeName: 'flows',
// });

// const flowKey = 'example-flow';

// const getNodeId = () => `randomnode_${+new Date()}`;

// const initialElements = [
//   { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
//   { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
//   { id: 'e1-2', source: '1', target: '2' },
// ];

// const SaveRestore = () => {
//   const [rfInstance, setRfInstance] = useState(null);
//   const [elements, setElements] = useState(initialElements);
//   const onElementsRemove = (elementsToRemove) =>
//     setElements((els) => removeElements(elementsToRemove, els));
//   const onConnect = (params) => setElements((els) => addEdge(params, els));

//   // const  {transform}  = useZoomPanHelper();

//   const onSave = useCallback(() => {
//     if (rfInstance) {
//       const flow = rfInstance.toObject();
//       localforage.setItem(flowKey, flow);
//     }
//   }, [rfInstance]);

//   const onRestore = useCallback(() => {
//     const restoreFlow = async () => {
//       const flow = await localforage.getItem(flowKey);

//       if (flow) {
//         const [x = 0, y = 0] = flow.position;
//         setElements(flow.elements || []);
//         //transform({ x, y, zoom: flow.zoom || 0 });
//       }
//     };

//     restoreFlow();
//   }, [setElements]);

//   const onAdd = useCallback(() => {
//     const newNode = {
//       id: getNodeId(),
//       data: { label: 'Added node' },
//       position: {
//         x: Math.random() * window.innerWidth - 100,
//         y: Math.random() * window.innerHeight,
//       },
//     };
//     setElements((els) => els.concat(newNode));
//   }, [setElements]);

//   return (
//     <div style={{ height: 500 }}>
//     <ReactFlowProvider>
//       <ReactFlow
//         elements={elements}
//         onElementsRemove={onElementsRemove}
//         onConnect={onConnect}
//         onLoad={setRfInstance}
//       >
//         <div className="save__controls">
//           <button onClick={onSave}>save</button>
//           <button onClick={onRestore}>restore</button>
//           <button onClick={onAdd}>add node</button>
//         </div>
//       </ReactFlow>
//     </ReactFlowProvider>
//     </div>
//   );
// };

// export default SaveRestore;


 



// // const initialElements = [
// //   {
// //     id: '1',
// //     type: 'input',
// //     data: { label: 'Source' },
// //     position: { x: 250, y: 25 },
// //   },
// //   {
// //     id: '2',
// //     data: { label: 'Target' },
// //     position: { x: 100, y: 125 },
// //   },
// //   { id: "e1-2", source: "1", target: "2", type: "step" },
// // ];

// // export default () => {
// //   const [elements, setElements] = useState(initialElements);
// //   const onElementsRemove = (elementsToRemove) =>
// //     setElements((els) => removeElements(elementsToRemove, els));
// //   const onConnect = (params) => setElements((els) => addEdge(params, els));

// //   return (
// //     <div style={{ height: 1000 }}>
// //       <ReactFlow
// //         elements={elements}
// //         onElementsRemove={onElementsRemove}
// //         onConnect={onConnect}
// //         deleteKeyCode={46} /* 'delete'-key */
// //       />
// //     </div>
// //   );
// // };


// import React, { useState } from 'react';
// import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

// const initialElements = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Source' },
//     position: { x: 250, y: 25 },
//   },
//   {
//     id: '2',
//     data: { label: 'Target' },
//     position: { x: 100, y: 125 },
    
//   },
// ];



// const onElementClick = (event, element)  => alert('clicked '+element.data.label) //formOpenOnclick(); <FormOpenOnclick/> 
// export default () => {
//   const [elements, setElements] = useState(initialElements);
//   const onElementsRemove = (elementsToRemove) =>
//     setElements((els) => removeElements(elementsToRemove, els));
//   const onConnect = (params) => setElements((els) => addEdge(params, els));

//   return (
//     <div style={{ height: 1300, width: 2500 }}>
      
//       <ReactFlow
//         elements={elements}
//         onElementsRemove={onElementsRemove}
//         onConnect={onConnect}
//         deleteKeyCode={46} /* 'delete'-key */
//         onElementClick={onElementClick}
//         // onChange={onChange}
        
//       />
//       {/* <FormOpenOnclick/> */}
//     </div>
//   );
// };



// import React from 'react';
// import ReactFlow, { Handle } from 'react-flow-renderer';

// const elements = [
//   {
//     id: '2',
//     type: 'special',
//     position: { x: 100, y: 100 },
//     data: { text: 'A custom node' },
//   },
// ];

// const customNodeStyles = {
//   background: '#9CA8B3',
//   color: '#FFF',
//   padding: 10,
// };


// function formOpenOnclick() {
//   alert('clicked!')
//   return(
//     <div className="wrapper">
//       <h1>How About Them Apples</h1>
//       <form>
//       <fieldset>
//          <label>
//            <p>Name</p>
//            <input name="name" />
//          </label>
//        </fieldset> 
//        <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// const onElementClick = (event, element) => formOpenOnclick(); //alert('clicked!')
// const CustomNodeComponent = ({ data }) => {
//   return (
//     <div style={customNodeStyles}>
//       <Handle type="target" position="left" style={{ borderRadius: 0 }} />
//       <div>{data.text}</div>
//       <Handle
//         type="source"
//         position="right"
//         id="a"
//         style={{ top: '30%', borderRadius: 0 }}
//       />
//       <Handle
//         type="source"
//         position="right"
//         id="b"
//         style={{ top: '70%', borderRadius: 0 }}
//       />
//     </div>
//   );
// };

// const nodeTypes = {
//   special: CustomNodeComponent,
// };

// const CustomNodeExample = () => {
//   return (
//     <div style={{ height: 300 }}>
//       <ReactFlow elements={elements} nodeTypes={nodeTypes} onElementClick={onElementClick}/>
//     </div>
//   );
// };

// export default CustomNodeExample;







// import React, { useState } from 'react';

// import ReactFlow, { removeElements, addEdge, Handle, StepEdge } from 'react-flow-renderer';

// import './validation.css';


// const initialElements = [
//   { id: '0', type: 'custominput', position: { x: 0, y: 150 },style:{border: '1px solid green', padding: 10, width: 50}},
//   { id: 'A', type: 'customnode', position: { x: 250, y: 0 }},
//   { id: 'B', type: 'customnode', position: { x: 250, y: 150 }},
//   { id: 'C', type: 'customnode', position: { x: 250, y: 300 } },

//   // { id: "e1-2", source: "0", target: "A", type: "step" },
//   // { id: "e2-3", source: "0", target: "B", type: "step" },
//   // { id: "e1-3", source: "0", target: "C", type: "step" }
// ];


// const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
// const isValidConnection = (connection) => 
// connection.target === 'B' || connection.target === 'A';
// const onConnectStart = (event, { nodeId, handleType, type}) => 
// // {id: "e1-2", source: "0", target: "A", type: "step"} 
// console.log('on connect start', { nodeId, handleType, type });
// const onConnectStop = (event) => console.log('on connect stop', event);
// const onConnectEnd = (event) => console.log('on connect end', event);

// const customNodeStyles = {
//   // background: '#9CA8B3',
//   // color: 'orange',
//   // padding: 10,
//   width: 50
  
// };


// const CustomInput = () => (
//   <div style={customNodeStyles}>
//     <div>Source</div>
//     <Handle type="source" position="right" isValidConnection={isValidConnection}/>
//   </div>
// );

// const CustomNode = ({ id }) => (
//   <>
//     <Handle type="target" position="left" isValidConnection={isValidConnection} />
//     <div>{id}</div>
//     <Handle type="source" position="right" isValidConnection={isValidConnection} />
//   </>
// );

// const nodeTypes = {
//   custominput: CustomInput,
//   customnode: CustomNode,
// };



// const HorizontalFlow = () => {
//   const [elements, setElements] = useState(initialElements);
//   const onElementsRemove = (elementsToRemove) =>
//   setElements((els) => removeElements(elementsToRemove, els));
//   // const onConnect = (params) => {
//   //   console.log('on connect', params);
//   //   setElements((els) => addEdge(params, els));
//   // };
//   const onConnect = (params) => setElements((els) => {
//     var edge = {
//       // id: getId(),
//       source: params.source ?? '',
//       target: params.target ?? '',
//       // arrowHeadType: ArrowHeadType.ArrowClosed,
//       type:"smoothstep",
//       arrowHeadType: 'arrowclosed',
//       style: { stroke: '#f6ab6c' },
//       // animated: true
//     };
//     return addEdge(edge, els);
//   });

//   return (
//     <div style={{ height: 500 }}>
//     <ReactFlow
//       elements={elements}
//       onElementsRemove={onElementsRemove}
//       onConnect={onConnect}
//       deleteKeyCode={46} 
//       selectNodesOnDrag={false}
//       onLoad={onLoad}
//       className="validationflow"
//       nodeTypes={nodeTypes}
//       onConnectStart={onConnectStart}
//       onConnectStop={onConnectStop}
//       onConnectEnd={onConnectEnd}
//       connectionLineType = 'step'
//       // style = {{stroke: '#ff6060',strokeWidth: 5}}
       
//     />
//     </div>
//   );
// };

// export default HorizontalFlow;




// import React, { useEffect, useState } from 'react';
// import ReactFlow from 'react-flow-renderer';

// import './updatenode.css';

// const initialElements = [
//   { id: '1', data: { label: '-' }, position: { x: 100, y: 100 } },
//   { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
//   { id: 'e1-2', source: '1', target: '2' },
// ];

// const UpdateNode = () => {
//   const [elements, setElements] = useState(initialElements);
//   const [nodeName, setNodeName] = useState('Node 1');
//   const [nodeBg, setNodeBg] = useState('#eee');
//   const [nodeHidden, setNodeHidden] = useState(false);

//   useEffect(() => {
//     setElements((els) =>
//       els.map((el) => {
//         if (el.id === '1') {
//           // it's important that you create a new object here
//           // in order to notify react flow about the change
//           el.data = {
//             ...el.data,
//             label: nodeName,
//           };
//         }

//         return el;
//       })
//     );
//   }, [nodeName, setElements]);

//   useEffect(() => {
//     setElements((els) =>
//       els.map((el) => {
//         if (el.id === '1') {
//           // it's important that you create a new object here
//           // in order to notify react flow about the change
//           el.style = { ...el.style, backgroundColor: nodeBg };
//         }

//         return el;
//       })
//     );
//   }, [nodeBg, setElements]);

//   useEffect(() => {
//     setElements((els) =>
//       els.map((el) => {
//         if (el.id === '1' || el.id === 'e1-2') {
//           // when you update a simple type you can just update the value
//           el.isHidden = nodeHidden;
//         }

//         return el;
//       })
//     );
//   }, [nodeHidden, setElements]);

//   return (
//     <div style={{ height: 1000 }}>
//     <ReactFlow elements={elements} defaultZoom={1.5} minZoom={0.2} maxZoom={4}>
//       <div className="updatenode__controls">
//         <label>label:</label>
//         <input
//           value={nodeName}
//           onChange={(evt) => setNodeName(evt.target.value)}
//         />

//         <label className="updatenode__bglabel">background:</label>
//         <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />

//         <div className="updatenode__checkboxwrapper">
//           <label>hidden:</label>
//           <input
//             type="checkbox"
//             checked={nodeHidden}
//             onChange={(evt) => setNodeHidden(evt.target.checked)}
//           />
//         </div>
//       </div>
//     </ReactFlow>
//     </div>
//   );
// };

// export default UpdateNode;








