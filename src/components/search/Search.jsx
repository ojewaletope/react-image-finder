import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

import ImageResults from "../image-results/ImageResults";
class Search extends React.Component {
  state = {
    searchText: "",
    limit: 15,
    category: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "9208622-b2b20436071ca34db719a7335",
    images: []
  };
  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.limit}&categogory=${
              this.state.category
            }&safe_search=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };
  onSelectChange = (e, index, value) => {
    this.setState({ limit: value });
    console.log(e.target.value);
  };
  onCategoryChange = (e, index, value) => {
    this.setState({ category: value });
  };

  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={e => this.onTextChange(e)}
          floatLabelText="Search for images"
          fullWidth={true}
        />
        <div>
          <SelectField
            name="Limit"
            floatingLabelText="Limit"
            value={this.state.limit}
            onChange={this.onSelectChange}
          >
            <MenuItem value={5} primaryText="5" />
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={15} primaryText="15" />
            <MenuItem value={20} primaryText="20" />
            <MenuItem value={50} primaryText="50" />
          </SelectField>
          <br />
          <SelectField
            name="category"
            value={this.state.category}
            floatingLabelText="Category"
            onChange={this.onCategoryChange}
          >
            <MenuItem value={"background"} primaryText="background" />
            <MenuItem value={"computer"} primaryText="computer" />
            <MenuItem value={"fashion"} primaryText="fashion" />
            <MenuItem value={"nature"} primaryText="nature" />
            <MenuItem value={"people"} primaryText="people" />
            <MenuItem value={"sport"} primaryText="sport" />
          </SelectField>
          <br />
          {this.state.images.length > 0 ? (
            <ImageResults images={this.state.images} />
          ) : (
            <div>No image found</div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
