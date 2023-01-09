import App from "views/App"
import LoginPage from "views/LoginPage";
import RegisterPage from "views/RegisterPage";
import SearchPage from "views/SearchPage";
import ItemPage from "views/ItemPage";
import CreatePage from "views/CreatePage";
import MySurveyPage from "views/MySurveyPage";
import ProfilePage from "views/ProfilePage";
import UserPermissionPage from "views/UserPermissionPage";
import SettingPage from "views/SettingPage";
import PreferencesPage from "views/PreferencesPage";
import ReviewPage from "views/ReviewPage";
import PageviewIcon from '@mui/icons-material/Pageview';
import PublishIcon from '@mui/icons-material/Publish';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import PersonIcon from '@mui/icons-material/Person';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { ADMINISTRATOR, EXPERT_SURVEYOR, MODERATOR, SURVEYOR, GUEST } from "variables/common"

const pagesRoutes = [
    {
        path: "/home",
        name: "Home",
        component: App,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage
    },
    {
        path: "/survey/search",
        name: "Search",
        group: 1,
        icon: <PageviewIcon />,
        permission: [ADMINISTRATOR, EXPERT_SURVEYOR, MODERATOR, SURVEYOR, GUEST],
        component: SearchPage

    },
    {
        path: "/survey/item",
        name: "Item",
        component: ItemPage,
    },
    {
        path: "/survey/submit",
        name: "Create",
        group: 1,
        icon: <PublishIcon />,
        permission: [EXPERT_SURVEYOR, SURVEYOR],
        component: CreatePage

    },
    {
        path: "/survey/mysurvey",
        name: "My Survey",
        group: 1,
        icon: <VideoStableIcon />,
        permission: [EXPERT_SURVEYOR, SURVEYOR],
        component: MySurveyPage

    },
    {
        path: "/survey/review",
        name: "Review",
        group: 1,
        icon: <VideoStableIcon />,
        permission: [MODERATOR],
        component: ReviewPage

    },
    {
        path: "/survey/profile",
        name: "Profile",
        group: 2,
        icon: <PersonIcon />,
        permission: [ADMINISTRATOR, EXPERT_SURVEYOR, MODERATOR, SURVEYOR],
        component: ProfilePage

    },
    {
        path: "/survey/users",
        name: "Users",
        group: 2,
        icon: <PersonIcon />,
        permission: [ADMINISTRATOR],
        component: UserPermissionPage

    },
    {
        path: "/survey/setting",
        name: "Setting",
        group: 2,
        icon: <SettingsAccessibilityIcon />,
        permission: [ADMINISTRATOR],
        component: SettingPage
    },
    {
        path: "/survey/preferences",
        name: "Preferences",
        group: 2,
        icon: <SettingsAccessibilityIcon />,
        permission: [ADMINISTRATOR, EXPERT_SURVEYOR, MODERATOR, SURVEYOR],
        component: PreferencesPage

    },
    {
        redirect: true,
        path: "/",
        pathTo: "/home",
        name: "Home"
    },
];

export default pagesRoutes;
