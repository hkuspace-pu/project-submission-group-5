import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
    title: 'Natural Science Survey System',
    description:
        "The Natural Science Survey System is developing a comprehensive and consistent approach to surveying species records.",
    image: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/541589401/2400',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'March eBirder of the Month Challenge',
        date: 'By Team eBird February 28, 2023',
        description:
            'This month’s eBirder of the Month challenge, sponsored by Carl Zeiss Sports Optics, focuses on the importance of counting birds. The eBirder of the Month will be drawn from eBirders who submit 31 complete checklists during March...',
        image: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/475690461/640',
        imageLabel: 'Image Text',
    },
    {
        title: 'Win a free spot in the Cornell Lab’s bird behavior course',
        date: 'By Team eBird February 28, 2023',
        description:
            'Do you want to learn more about bird behavior and get an insider’s perspective on the lives of birds? We’ve partnered with the Cornell Lab’s Bird Academy to offer a bird-centered perspective that will transform your outdoor experiences.',
        image: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/425668201/480',
        imageLabel: 'Image Text',
    },
];

const posts = [post1, post2, post3];

const sidebar = {
    title: 'About',
    description:
        <>Dennis, KO LAP FUNG <br />Leo, Hung Shing Hoi<br />Yau, Nicholas Heng Wah</>,
    archives: [
        { title: '2022-10-20', url: '#' },
        { title: '2022-11-09', url: '#' },
        { title: '2022-12-07', url: '#' },
        { title: '2022-12-29', url: '#' },
        { title: '2023-01-11', url: '#' },
        { title: '2023-01-19', url: '#' },
        { title: '2023-01-26', url: '#' },
        { title: '2023-02-08', url: '#' },
        { title: '2023-03-08', url: '#' },
        { title: '2023-03-22', url: '#' },
        { title: '2023-04-19', url: '#' },
        { title: '2023-05-03', url: '#' },
        { title: '2023-05-24', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/hkuspace-pu/project-submission-group-5' },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

const theme = createTheme();

export default function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ padding: '64px' }} />
            <Container maxWidth="lg">
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Main title="About Natural Science Survey System" posts={posts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <div style={{ padding: '32px' }} />
        </ThemeProvider>
    );
}
