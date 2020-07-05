// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import BrandsActions from "../redux/actions/BrandsActions";
import DealershipActions from "../redux/actions/DealershipActions";

// END IMPORT ACTIONS

/** APIs

* actionsBrands.create
*	@description CRUD ACTION create
*
* actionsBrands.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBrands.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDealership.findBybrands
*	@description CRUD ACTION findBybrands
*	@param Objectid key - Id of model to search for
*

**/

class BrandsEdit extends Component {
  // Init brands
  constructor(props) {
    super(props);
    this.state = {
      brands: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsBrands.loadBrands(this.props.match.params.id);
      this.props.actionsDealership.findBybrands(this.props.match.params.id);
    }
    
  }

  // Insert props brands in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      brands: props.brands
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.brands._id) {
      this.props.actionsBrands.saveBrands(this.state.brands).then(data => {
        this.props.history.push("/brandses/");
      });
    } else {
      this.props.actionsBrands.createBrands(this.state.brands).then(data => {
        this.props.history.push("/brandses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Brands Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.brands.name || ""}
            onChange={Utils.handleChange.bind(this, "brands")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.brands.name && this.state.brands.name === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with dealership */}
          
          <h3>Dealership</h3>
          {(!this.props.listDealership || this.props.listDealership.length === 0) && 
            <div>No Dealership associated</div>
          }
          {this.props.listDealership &&
            this.props.listDealership.map((item, i) => {
              return (
                <Link to={"/dealerships/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/brandses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsBrands: bindActionCreators(BrandsActions, dispatch),
    actionsDealership: bindActionCreators(DealershipActions, dispatch),
  };
};

// Validate types
BrandsEdit.propTypes = { 
  actionsBrands: PropTypes.object.isRequired,
  actionsDealership: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    brands: state.BrandsEditReducer.brands,
    listDealership: state.BrandsEditReducer.listDealership
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandsEdit);
