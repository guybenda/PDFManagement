import React from "react";

import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Button
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import DraggableTableBody from "./DraggableTableBody";
import "../ReportForm.css";
import Label from "./Label";

import { connect } from "react-redux";
import { addTableRow } from "../../actions";

class DynamicTable extends React.Component {
  onAddRow = () => {

    this.props.addTableRow(this.props.sectionId, this.props.id);
  };

  renderTable = () => {
    return (
      <>
        <div>
          <Label name={this.props.name} />
          <Button
            disabled={this.props.disabled}
            onClick={this.onAddRow}
            style={{
              visibility: this.props.disabled ? "hidden" : "visible",
              width: "9rem"
            }}
            variant='contained'
            color='primary'
            startIcon={<Add />}
          >
            הוסף שורה
          </Button>
        </div>
        <TableContainer
          style={{ overflowX: "auto", width: "100%", height: "fit-content" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>גרירה</TableCell>
                <TableCell>מחיקה</TableCell>
                {this.props.columns.map((field) => (
                  <TableCell>{field.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <DraggableTableBody
              disabled={this.props.disabled}
              columns={this.props.columns}
              rows={this.props.value || []}
              handleChange={this.props.handleChange}
            />
          </Table>
        </TableContainer>
      </>
    );
  };

  render() {
    return this.renderTable();
  }
}

export default connect(null, { addTableRow })(DynamicTable);
