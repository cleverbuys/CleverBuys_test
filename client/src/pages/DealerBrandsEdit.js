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
import DealerBrandsActions from "../redux/actions/DealerBrandsActions";

// END IMPORT ACTIONS

/** APIs

* actionsDealerBrands.create
*	@description CRUD ACTION create
*
* actionsDealerBrands.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDealerBrands.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class DealerBrandsEdit extends Component {
  // Init dealerbrands
  constructor(props) {
    super(props);
    this.state = {
      dealerbrands: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDealerBrands.loadDealerBrands(this.props.match.params.id);
    }
    
  }

  // Insert props dealerbrands in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      dealerbrands: props.dealerbrands
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.dealerbrands._id) {
      this.props.actionsDealerBrands.saveDealerBrands(this.state.dealerbrands).then(data => {
        this.props.history.push("/dealerbrandses/");
      });
    } else {
      this.props.actionsDealerBrands.createDealerBrands(this.state.dealerbrands).then(data => {
        this.props.history.push("/dealerbrandses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>DealerBrands Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="brandID"
            label="BrandID"
            value={this.state.dealerbrands.brandID || ""}
            onChange={Utils.handleChange.bind(this, "dealerbrands")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.dealerbrands.brandID && this.state.dealerbrands.brandID === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="dealershipID"
            label="DealershipID"
            value={this.state.dealerbrands.dealershipID || ""}
            onChange={Utils.handleChange.bind(this, "dealerbrands")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.dealerbrands.dealershipID && this.state.dealerbrands.dealershipID === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/dealerbrandses/">Back to list</Link>

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
    actionsDealerBrands: bindActionCreators(DealerBrandsActions, dispatch),
  };
};

// Validate types
DealerBrandsEdit.propTypes = { 
  actionsDealerBrands: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    dealerbrands: state.DealerBrandsEditReducer.dealerbrands
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealerBrandsEdit);
