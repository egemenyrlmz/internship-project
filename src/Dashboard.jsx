import React from "react"
import "./Dashboard.css"
import { Card,CardContent,CardMedia,Typography,CardActionArea,Grid,Box} from "@mui/material"
import Navbar from "./Navbar.js"
import Component from "./component.js"
import Component2 from "./component2.js"
import Component3 from "./component3.js"


const Dashboard = () => {     
    return(
        <div>
        <header>
            <Grid py={2}>
            <Navbar></Navbar> 
            </Grid>
            
        </header>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3  }}  className="Box2">
      
        <Grid container  direction="row" justifyContent="flex-start" alignItems="center" columns={16} columnSpacing={2}>

        <Grid xs={3}>
            <Card sx={{ maxWidth: 250 }}  className="cards">
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="https://cdn.fordhamram.com/wp-content/uploads/economics-750x375.jpg"
            alt="ECON305"
            />
            <CardContent className="cardContent">
            <Typography gutterBottom variant="h6" component="div">
                ECON305
            </Typography>
            <Typography variant="body2">
                Comparative Economic Systems
            </Typography>
            </CardContent>
        </CardActionArea>
            </Card>
        </Grid>

        <Grid xs={3}>
            <Card sx={{ maxWidth: 250 }} className="cards">
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="https://imageio.forbes.com/specials-images/dam/imageserve/913219882/0x0.jpg?format=jpg&width=1200"
            alt="ECON307"
            />
            <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div">
                ECON307
            </Typography>
            <Typography variant="body2">
                Game Theory
            </Typography>
            </CardContent>
        </CardActionArea>
            </Card>
        </Grid>

        <Grid xs={3}>
            <Card sx={{ maxWidth: 250 }} className="cards">
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="https://online.stat.psu.edu/statprogram/sites/statprogram/files/2018-08/statistics-review.jpg"
            alt="MATH202"
            />
            <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div">
                MATH202
            </Typography>
            <Typography variant="body2">
                Statistics for Social Sciences
            </Typography>
            </CardContent>
        </CardActionArea>
            </Card>
        </Grid>

        <Grid xs={5.4} className="Component2">
            <Component2 ></Component2>
        </Grid>

        </Grid>

        

        </Box>


        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 6, py:0 }}>

        <Grid container direction="row" justifyContent="flex-start" alignItems="center" columns={16} columnSpacing={2}>

        <Grid xs={6} className="Component">
            <Component></Component>
        </Grid>

        <Grid xs={6} className="Component3">
            <Component3></Component3>
        </Grid>

        </Grid>

        </Box>
        
        

        </div>
    )
}


export default Dashboard