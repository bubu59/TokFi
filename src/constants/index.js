import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

export const navLinks = [
    {
        id: "overview",
        title: "Overview"
    },
    {
        id: "mission",
        title: "Our Mission"
    },
    {
        id: "customers",
        title: "Customers"
    },
    {
        id: "pricing",
        title: "Pricing"
    },
];

export const dashboardLinks = [
    {
        id: "for you",
        title: "For you",
        icon: <HomeRoundedIcon/>,
        name: "For you"

    },
    {
        id: "analytics",
        title: "Following",
        icon: <PeopleOutlineIcon/>,
        name: "Following"
    },
    {
        id: "clients",
        title: "Explore",
        icon: <ExploreOutlinedIcon/>,
        name: "Clients"
    },
    {
        id: "live",
        title: "LIVE",
        icon: <AccountCircleOutlinedIcon/>,
        name: "Live"
    },
]

export const helpLinks = [
    {
        id: "help",
        title: "Help",
        icon: <ErrorOutlineOutlinedIcon/>,
        name: "Help" 
    },
    {
        id: "settings",
        title: "Settings",
        icon: <SettingsIcon/>,
        name: "Settings"
    },
    {
        id: "logout",
        title: "Log out",
        icon: <DoDisturbOnOutlinedIcon/>,
        name: "Logout",
    },
]