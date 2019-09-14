import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Theaters from "@material-ui/icons/Theaters";
import Movie from "@material-ui/icons/Movie";
import Poll from "@material-ui/icons/Poll";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
  <div>
    <ListSubheader inset>Movies</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <Theaters />
      </ListItemIcon>
      <ListItemText primary="Latest" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Movie />
      </ListItemIcon>
      <ListItemText primary="Now Playing" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Poll />
      </ListItemIcon>
      <ListItemText primary="Popular" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Upcoming" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Televisions</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Latest" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="On Air" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Top Rated" />
    </ListItem>
  </div>
);
