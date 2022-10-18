// React
import * as React from 'react';

// Pages
import Navigation from '../components/Navigation';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'


function ExperiencePage() {
    return (
        <>
            <Navigation />
            <Grid container direction='column' alignItems='center' style={{ paddingTop: '10vh' }}>
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant='h2' >
                        My Experience
                    </Typography>
                </Box>
            </Grid>
            <Grid container direction='column' alignItems='center' style={{ paddingTop: '5vh' }}>
                <Box sx={{ width: '100%', maxWidth: '85%' }}>
                    <Typography variant='body1' textAlign='center' alignItems='center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit sit amet leo non dictum. Donec ac elit eget purus fringilla suscipit. Phasellus luctus porta massa, nec fringilla tortor mattis vel. Integer sagittis augue eu suscipit elementum. Donec lacinia venenatis mauris vel dapibus. Fusce egestas egestas sem, eget vestibulum mi blandit et. Nullam nec sem vel nulla pellentesque tristique et vel magna. Aliquam ut feugiat tellus, nec faucibus metus.

                        Suspendisse efficitur auctor nisi, at faucibus nisi placerat eu. Phasellus sit amet lobortis dui. Proin at turpis dapibus elit viverra pellentesque a facilisis neque. Duis mauris urna, egestas at ultricies a, ullamcorper fermentum arcu. Integer dapibus enim ut orci pellentesque mollis. Nam tincidunt scelerisque volutpat. Sed condimentum, ex sed pulvinar cursus, nulla quam tempus mi, sit amet porttitor magna nibh quis ante. Nulla sed nibh purus.

                        Cras eu diam suscipit est congue cursus. Quisque id sem a dui iaculis ornare ut et sapien. Curabitur id dictum orci, non ultrices mauris. Nullam id ultricies nunc. Vivamus in elementum nunc, ut fringilla turpis. Phasellus sapien ligula, eleifend at volutpat vitae, elementum ut massa. Sed eget accumsan velit. Aenean placerat sed magna quis molestie. Pellentesque et maximus lacus. Suspendisse vitae augue eget turpis ornare malesuada et eu leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Vivamus faucibus rhoncus augue eget pharetra. Donec mollis lacus vel magna blandit, in tincidunt leo eleifend. Quisque purus est, sollicitudin rutrum scelerisque vestibulum, vulputate vel nulla. Nullam dapibus nisi tellus, at volutpat turpis fermentum in.

                        Donec nulla est, egestas sit amet enim id, pulvinar elementum neque. Suspendisse vel mi ultrices, tincidunt erat a, blandit sem. Quisque vel mi molestie, aliquam sem sit amet, aliquam lacus. Pellentesque tempor enim semper nulla facilisis, in faucibus massa condimentum. Donec in mi sit amet lacus porta vulputate. Nam sodales neque eget metus bibendum, pulvinar vulputate lorem commodo. Etiam lacus tortor, laoreet eu arcu sed, ornare tempus enim. Aenean feugiat pellentesque mi et tincidunt.

                        Nullam nisl erat, blandit sit amet feugiat eu, semper vitae lorem. Curabitur sollicitudin, urna at volutpat auctor, nisl neque auctor nibh, ut mattis risus ligula sit amet magna. Maecenas non malesuada ex. Etiam eros diam, euismod non enim eu, tempor rhoncus enim. Aenean justo urna, molestie vel lorem vel, porta aliquet justo. Nulla cursus ornare purus, vitae porttitor sem iaculis at. Pellentesque nibh libero, cursus malesuada euismod non, sollicitudin ut neque. Cras non posuere lacus, sit amet ullamcorper tortor.
                    </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default ExperiencePage;