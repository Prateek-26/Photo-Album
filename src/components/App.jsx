import React from "react";
import {AppBar, Button, Container, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import "../css/style.css";

const cards = [1 ,2, 3, 4, 5, 6, 7, 8, 9];

function App(){
    // const classes = useStyles();
    return(
        <>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
            <PhotoCamera className="heading-icon"/>
            <Typography variant="h6" className="heading-h6">
                Photo Album
            </Typography>
        </Toolbar>
        </AppBar>
        <main>
            <div className="main-div">
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom
                    >PhotoAlbum</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nam sint eaque eligendi dolores ratione tempora labore quibusdam? Asperiores, a?</Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" className="btn" color="primary" style={{marginTop:"2rem"}}>See My Photos</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" className="btn" color="primary" style={{marginTop:"2rem"}}>Secondary Options</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Container className="card-grid" maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((element, index)=>(
                    <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardMedia className="card-media" image="https://source.unsplash.com/random" title="image title"/>
                        <CardContent className="card-content">
                            <Typography variant="h5" gutterBottom>
                                Heading
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum animi provident adipisci accusantium natus nam recusandae. Totam sequi asperiores quae?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
        <footer className="footer">
            <Typography variant="h6" align="center" gutterBottom>©️ 2 0 2 3</Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">Designed by Pratt & Co.</Typography>
        </footer>
        </>
    )
}

export default App;