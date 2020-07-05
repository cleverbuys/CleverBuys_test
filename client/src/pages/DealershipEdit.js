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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import DealershipActions from "../redux/actions/DealershipActions";
import BrandsActions from "../redux/actions/BrandsActions";

// END IMPORT ACTIONS

/** APIs

* actionsDealership.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id dealership
*	@returns dealership
*
* actionsDealership.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id dealership
*	@returns dealership
*
* actionsDealership.create
*	@description CRUD ACTION create
*	@param dealership obj - Object to insert
*
* actionsBrands.list
*	@description CRUD ACTION list
*

**/

class DealershipEdit extends Component {
  // Init dealership
  constructor(props) {
    super(props);
    this.state = {
      dealership: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDealership.loadDealership(this.props.match.params.id);
    }
    
    this.props.actionsBrands.loadBrandsList();
  }

  // Insert props dealership in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      dealership: props.dealership
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.dealership._id) {
      this.props.actionsDealership.saveDealership(this.state.dealership).then(data => {
        this.props.history.push("/");
      });
    } else {
      this.props.actionsDealership.createDealership(this.state.dealership).then(data => {
        this.props.history.push("/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Dealership Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="email"
            label="Email"
            value={this.state.dealership.email || ""}
            onChange={Utils.handleChange.bind(this, "dealership")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.dealership.email && this.state.dealership.email === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.dealership.name || ""}
            onChange={Utils.handleChange.bind(this, "dealership")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.dealership.name && this.state.dealership.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="telephone"
            label="Telephone"
            value={this.state.dealership.telephone || ""}
            onChange={Utils.handleChange.bind(this, "dealership")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="town"
            label="Town"
            value={this.state.dealership.town || ""}
            onChange={Utils.handleChange.bind(this, "dealership")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.dealership.town && this.state.dealership.town === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="website"
            label="Website"
            value={this.state.dealership.website || ""}
            onChange={Utils.handleChange.bind(this, "dealership")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m brands with brands */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="brands">
              Brands
            </InputLabel>
            <Select
              value={this.state.dealership.brands || ""}
              onChange={Utils.handleChangeSelect.bind(this, "dealership")}
              inputProps={{
                id: "brands",
                name: "brands"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listBrands && this.props.listBrands.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/">Back to list</Link>

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
    actionsDealership: bindActionCreators(DealershipActions, dispatch),
    actionsBrands: bindActionCreators(BrandsActions, dispatch),
  };
};

// Validate types
DealershipEdit.propTypes = { 
  actionsDealership: PropTypes.object.isRequired,
  actionsBrands: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    dealership: state.DealershipEditReducer.dealership,
    listBrands: state.DealershipEditReducer.listBrands
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealershipEdit);
