import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Background from '../../images/background-min.jpg';
import ReactFileReader from 'react-file-reader';
import Dropzone from 'react-dropzone';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});




const tileData = [
  {
    img: Background,
    title: 'Image',
    author: 'author',
    id: '0',
  },{
    img: Background,
    title: 'Image',
    author: 'author',
    id: '1',
  },{
    img: Background,
    title: 'Image',
    author: 'author',
    id: '2',
  },{
    img: Background,
    title: 'Image',
    author: 'author',
    id: '3',
  },{
    img: Background,
    title: 'Image',
    author: 'author',
    id: '4',
  },{
    img: Background,
    title: 'Image',
    author: 'author',
    id: '5',
  },{
    img: Background,
    title: 'Image',
    author: 'author',
    id: '6',
  },{
    img: Background,
    title: 'Image',
    author: 'author',
    id: '7',
  },

];

class CarPhotos extends PureComponent {

  constructor() {
    super();
    this.state ={

      imagePreviewUrl: '',
    }

  }

  handleFiles = (event) => {
    // event.preventDefault();
    console.log(event);
    console.log(this.state.imagePreviewUrl);

    let reader = new FileReader();
    // let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        // fileName: file.name,
        imagePreviewUrl: reader.result
      });
    };

    // reader.readAsDataURL(file)
  };
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root} style={{cursor: 'pointer'}}>
        <Dropzone className={classes.root} accept="image/*" onDrop={this.handleFiles}>
          <GridList className={classes.gridList} cols={4}>
            {tileData.map(tile => (
              <GridListTile key={tile.id}>
                <img src={tile.img} alt={tile.title}/>
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  // actionIcon={
                  //   <IconButton>
                  //     <StarBorderIcon className={classes.title} />
                  //   </IconButton>
                  // }
                />
              </GridListTile>
            ))}
          </GridList>
        </Dropzone>
      </div>
    );
  }
}

CarPhotos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarPhotos);
