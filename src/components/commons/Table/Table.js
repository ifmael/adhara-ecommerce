import React from "react";
import { array } from "prop-types";
import "./styles.scss";

const propTypes = {
  columns: array,
  data: array,
};

const defaultProps = {
  columns: [],
  data: [],
};

const Table = ({ columns, data }) => {
  return (
    <div className="my-table">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => {
              return <th key={`th-${index}`}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((element, indexTr) => {
            const dataColumn = Object.keys(element).filter(
              (key) => key !== "id"
            );

            return (
              <tr key={`tr-${indexTr}`}>
                {dataColumn.map((name, indexTD) => (
                  <td key={`td-${indexTD}`} data-column={name}>
                    {element[name]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
