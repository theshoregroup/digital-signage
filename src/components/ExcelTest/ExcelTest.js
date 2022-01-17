import React, { Component } from "react";
import { Table, Button,  Row, Col, Upload } from "antd";
import { Icon } from "@ant-design/compatible";
import { ExcelRenderer, OutTable } from "react-excel-renderer";


export default class ExcelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: [],
      rows: [],
      errorMessage: null,
      columns: [
        {
          title: "DURATION",
          dataIndex: "duration",
          editable: true,
        },
        {
          title: "CLIENT NAME",
          dataIndex: "clientName",
          editable: true,
        },
        {
          title: "SITE NAME",
          dataIndex: "siteName",
          editable: true,
        },
        {
          title: "REQUIREMENT",
          dataIndex: "requirement",
          editable: true,
        },
      ],
    };
  }


  checkFile(file) {
    let errorMessage = "";
    if (!file || !file[0]) {
      return;
    }
    const isExcel =
      file[0].type === "application/vnd.ms-excel" ||
      file[0].type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (!isExcel) {
      errorMessage = "You can only upload Excel file!";
    }
    console.log("file", file[0].type);
    const isLt2M = file[0].size / 1024 / 1024 < 2;
    if (!isLt2M) {
      errorMessage = "File must be smaller than 2MB!";
    }
    console.log("errorMessage", errorMessage);
    return errorMessage;
  }

  fileHandler = (fileList) => {
    console.log("fileList", fileList);
    let fileObj = fileList;
    if (!fileObj) {
      this.setState({
        errorMessage: "No file uploaded!",
      });
      return false;
    }
    console.log("fileObj.type:", fileObj.type);
    if (
      !(
        fileObj.type === "application/vnd.ms-excel" ||
        fileObj.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
    ) {
      this.setState({
        errorMessage: "Unknown file format. Only Excel files are uploaded!",
      });
      return false;
    }
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let newRows = [];
        resp.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined") {
            newRows.push({
              key: index,
              duration: row[0],
              clientName: row[1],
              siteName: row[2],
              requirement: row[6],
              
            });
          }
        });
        if (newRows.length === 0) {
          this.setState({
            errorMessage: "No data found in file!",
          });
          return false;
        } else {
          this.setState({
            cols: resp.cols,
            rows: newRows,
            errorMessage: null,
          });
        }
      }
    });
    return false;
  };


 
  handleAdd = () => {
    const { count, rows } = this.state;
    const newData = {
      key: count,
      name: "User's name",
      age: "22",
      gender1: "Female",
    };
    this.setState({
      rows: [newData, ...rows],
      count: count + 1,
    });
  };

  render() {
    const columns = this.state.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({

          title: col.title,
        }),
      };
    });
    return (
      <>
    
        <div className="text-red-500">
          <Upload
            name="file"
            beforeUpload={this.fileHandler}
            onRemove={() => this.setState({ rows: [] })}
            multiple={false}
          >
            <Button>
              <Icon type="upload" />
            </Button>
          </Upload>
        </div>
        <Table className="text-4xl"
            dataSource={this.state.rows}
            columns={columns}
            Table/>

      </>
    );
  }
}
