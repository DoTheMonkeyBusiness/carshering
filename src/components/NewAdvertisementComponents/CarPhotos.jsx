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
import DropzoneComponent from 'react-dropzone-component';


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


  }
  componentWillReceiveProps(prewProps, nextProps){
    (prewProps.carPhotos === nextProps.carPhotos)
  }


  render() {
    const {classes} = this.props;
    const carPhotos = this.props.carPhotos;
    console.log(carPhotos);
    console.log(tileData);
    return (
      <div className={classes.root} style={{cursor: 'pointer'}}>
        <Dropzone className={classes.root} accept="image/*" onDrop={this.props.handleFiles}>
        <GridList className={classes.gridList} cols={6}>
        {carPhotos.map(tile => (
        <GridListTile key={tile.id}>
        {console.log('!!!!!!!!!!!!1',tile.img)}
        {(tile.img !== '')?
        <img src={tile.img} alt={tile.title}/>:
        <img src={Background} alt={tile.title}/>
        }
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
        {/*<DropzoneComponent config={componentConfig}*/}
                           {/*eventHandlers={eventHandlers}*/}
                           {/*djsConfig={djsConfig} />*/}
      </div>
    );
  }
}

CarPhotos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarPhotos);
