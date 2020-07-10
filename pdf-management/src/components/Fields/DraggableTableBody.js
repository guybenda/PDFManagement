import React from "react";

import { TableBody, TableRow, TableCell } from "@material-ui/core";
import {
  DragHandle as DragHandleIcon,
  Delete as DeleteIcon
} from "@material-ui/icons";

import { FIELDS_COMPONENTS } from "../../constants";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";

const SortableTable = sortableContainer(({ children }) => {
  return <TableBody>{children}</TableBody>;
});

const DragHandle = sortableHandle(({ IconsClassName }) => {
  return (
    <TableCell className={IconsClassName}>
      <DragHandleIcon />
    </TableCell>
  );
});

const SortableRow = sortableElement(
  ({ children, handleDelete, IconsClassName }) => {
    return (
      <TableRow>
        <DragHandle IconsClassName={IconsClassName} />
        <TableCell className={IconsClassName} onClick={handleDelete}>
          <DeleteIcon />
        </TableCell>
        {children}
      </TableRow>
    );
  }
);

class DraggableTableBody extends React.Component {
  handleRowDrag = ({ oldIndex, newIndex }) => {
    this.props.handleChange(arrayMove(this.props.rows, oldIndex, newIndex));
  };

  handleDelete = (rowIndex) => {
    this.props.rows.splice(rowIndex, 1);
    this.props.handleChange(this.props.rows);
  };

  render() {
    // if (!this.props.rows || this.props.rows.length === 0) return null;
    return (
      <SortableTable useDragHandle onSortEnd={this.handleRowDrag}>
        {
          // for each row
          this.props.rows.map((row, rowIndex) => {
            // for each column
            return (
              <SortableRow
                disabled={this.props.disabled}
                IconsClassName={
                  this.props.disabled
                    ? "table-row-disabled-icon"
                    : "table-row-icon"
                }
                key={rowIndex}
                index={rowIndex}
                handleDelete={() => this.handleDelete(rowIndex)}
              >
                {this.props.columns.map((column) => {
                  const handleCellChange = (cellVal) => {
                    // make sure the order of array changes with drag n drop
                    this.props.rows[rowIndex][column.id] = cellVal;
                    // send the new rows in the table
                    this.props.handleChange(this.props.rows);
                  };

                  let FieldComp = FIELDS_COMPONENTS[column.type];
                  return (
                    <TableCell>
                      <FieldComp
                        noMargin
                        disabled={this.props.disabled}
                        value={row[column.id]}
                        values={column.values} // for select field
                        handleChange={handleCellChange}
                      />
                    </TableCell>
                  );
                })}
              </SortableRow>
            );
          })
        }
      </SortableTable>
    );
  }
}

export default DraggableTableBody;
