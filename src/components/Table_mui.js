import React from "react";
import MaterialTable from "material-table";
// import { Icon } from "@material-ui/core";
import { alpha } from '@material-ui/core/styles';
import { Grid, Paper, Button, Typography, Table, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTableCell-sizeSmall": {
      padding: 3
    },
    "& .MuiTypography-h6":
    {
      fontSize: '0.75rem'
    },
    
  }
}));

const Table_mui = ()=>{
    const btnStyle = { marginTop: 10 }
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);

    const [data, setData] = useState([
        {Ion: 'Calcium (Ca)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
        {Ion: 'Magnesuim (Mg)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
        {Ion: 'Sodium (Na)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
        {Ion: 'Iron (Fe)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
        {Ion: 'Barium (Ba)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
        {Ion: 'Sulphate (SO4)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
        {Ion: 'Chloride (Cl)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
        {Ion: 'Bromide (Br)',MgL: 0.000, Meq: 0.000, ppmAsCaCO3: 0},
    ]);
    const [columns, setColumns] = useState([
        {title:'Ion',field:'Ion',editable: 'never', backgroundColor: '#01579b'},
        {title:'MgL',field:'MgL'},
        {title:'Meq',field:'Meq'},
        {title:'ppmAsCaCO3',field:'ppmAsCaCO3',
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
          width:0,
          maxWidth: 0
        },
      }
    ]);
    // const [data, setData] = useState([data1]);
    // const [columns, setColumns] = useState([columns1])
    
    // const [columns, setColumns] = useState([
    //     { title: 'Name', field: 'name' },
    //     { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
    //     { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    //     {
    //       title: 'Birth Place',
    //       field: 'birthCity',
    //       lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //     },
    //   ]);
    
    //   const [data, setData] = useState([
    //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    //   ]);
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <MaterialTable title="Feed"
                data={data}
                columns={columns}
                onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                options={{
                    search: false, 
                    paging: false,
                    // filtering: true,
                    exportButton: true,
                    exportAllData: true,
                    tableLayout: "fixed",
                    maxBodyHeight: 400,
                    actionsColumnIndex: -1,
                    rowStyle:(rowData,index) => 
                    index%2 == 0?{background: 'linear-gradient(white, silver)',fontSize: 9}:{fontSize: 9},
                    
                    // rowStyle: (rowData,index) => {
                    //   return {
                    //     fontFamily: "sans-serif",
                    //     fontSize: 9,
                    //     // backgroundColor: rowBackgroundColors[rowData.priority] ?? "#fff",
                    //   };
                    // },
                      // backgroundColor: (selectedRow === rowData.tableData.id) ? '#DAF7A6' : '#FFF',    
                    
                      // rowStyle: {
                    //     fontSize: 8,
                    //     // height: 0
                    // },
                    padding: "dense",
                    headerStyle: {
                        background: '#01579b',
                        color: '#FFF',
                        width:100,
                        maxWidth: 100
                      },
                    // cellStyle: {
                    //     width: 20,
                    //     maxWidth: 20
                    //   },
                }}

                editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          setData([...data, newData]);
                          
                          resolve();
                        }, 1000)
                      }),
                    onBulkUpdate: changes =>
                     new Promise((resolve, reject) => {
                      setTimeout(() => {
                        resolve();
                      }, 1000);
                    }),
                    // onRowUpdate: (newData, oldData) =>
                    //   new Promise((resolve, reject) => {
                    //     setTimeout(() => {
                    //       const dataUpdate = [...data];
                    //       const index = oldData.tableData.id;
                    //       dataUpdate[index] = newData;
                    //       setData([...dataUpdate]);
            
                    //       resolve();
                    //     }, 1000)
                    //   }),
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataDelete = [...data];
                          const index = oldData.tableData.id;
                          dataDelete.splice(index, 1);
                          setData([...dataDelete]);
                          
                          resolve()
                        }, 1000)
                      }),
                  }}

                // editable={{
                //   onBulkUpdate: changes =>
                //     new Promise((resolve, reject) => {
                //       setTimeout(() => {
                //         resolve();
                //       }, 1000);
                //     }),     
                //   onRowDelete: oldData =>
                //     new Promise((resolve, reject) => {
                //       setTimeout(() => {
                //         resolve();
                //       }, 1000);
                //     }),     
                // }}


                // cellEditable={{
                //     onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                //         return new Promise((resolve, reject) => {
                //             console.log('newValue: ' + newValue);
                //             console.log('oldValue: ' + oldValue);
                //             setTimeout(() => {
                //                 let isMounted = true;
                //                 const clonedData = [ ...data ]
                //                 const index = oldData.tableData.id;
                //                 clonedData[index] = newData;
                //                 //setData([...dataUpdate]);
                //                 //clonedData[rowData.tableData.id][columnDef.field] = newValue
                //                 console.log('rowData.tableData.id: ' + oldData.tableData.id);
                //                 console.log('columnDef.field: ' + columnDef.field);
                //                 console.log('clonedData[rowData.tableData.id][columnDef.field] ' + clonedData[oldData.tableData.id][columnDef.field]);
                               
                //                 setData([...clonedData]);
                //                 // this.setData([...clonedData]);
            
                //                 resolve();
                //             }, 1000);
                //             //setTimeout(resolve, 1000);
                //         });
                //     }
                // }}
            />
            <Button type='submit' style={btnStyle} variant='contained' color='primary'>Submit</Button>
                                
        </div>
    )
}

export default Table_mui;