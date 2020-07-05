// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import DealerBrandsActions from "../redux/actions/DealerBrandsActions";

// END IMPORT ACTIONS

/** APIs

* actionsDealerBrands.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsDealerBrands.list
*	@description CRUD ACTION list
*

**/


class DealerBrandsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsDealerBrands.loadDealerBrandsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsDealerBrands.deleteDealerBrands(this.state.idDelete).then(data => {
      this.props.actionsDealerBrands.loadDealerBrandsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "brandID",
        type: "number",
        label: "BrandID"
      }, 
      {
        id: "dealershipID",
        type: "number",
        label: "DealershipID"
      },
    ];
    const link = "/dealerbrandses/";

    return (
      <div>
        <h1>DealerBrands List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">BrandID</TableCell>
              <TableCell align="right">DealershipID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/dealerbrandses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.brandID }</TableCell>
                <TableCell align="right">{ row.dealershipID }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/dealerbrandses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsDealerBrands: bindActionCreators(DealerBrandsActions, dispatch),
  };
};

// Validate types
DealerBrandsList.propTypes = { 
  actionsDealerBrands: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.DealerBrandsListReducer.listDealerBrands
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealerBrandsList);
