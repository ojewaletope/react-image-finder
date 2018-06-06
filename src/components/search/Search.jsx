import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class Search extends React.Component {
  state = {
    searchText: "",
    limit: 15,
    apiUrl: "pixabay.com/api",
    apiKey: "9208622-b2b20436071ca34db719a7335",
    image: []
  };
  render() {
    return <div>
        <TextField name="searchText" value={this.state.searchText} onChange={this.onTextChange} floatLabelText="Search for images" fullWidth={true} />
        <div>
          <SelectField name="Limit" floatingLabelText="Limit" value={this.state.limit} onChange={this.handleChange} >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={50} primaryText="50" />
          </SelectField>
        </div>
      </div>;
  }
}

export default Search;
