import React from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageResults extends React.Component {
  state = {
    open: false,
    currentImg: ''
  }
  handleOpen = (img) => {
    this.setState({open:true, currentImg:img})
  }
  handleClose = () => {
    this.setState({open:false})
  }
  render() {
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(image => (
            <GridTile
              title={image.tags}
              key={image.id}
              subtitle={
                <span>
                  Owned By: <strong>{image.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color="white" onClick={()=> this.handleOpen(image.webformatURL)} />
                </IconButton>
              }
            >
              <img src={image.webformatURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose}/>
    ]
    return <div>
      <Dialog
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose ={this.handleClose}
      >
      <img src={this.state.currentImg} alt="" style={{width:"100%"}}/>

      </Dialog>
    {imageListContent}
    </div>;
  }
}
ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageResults;
