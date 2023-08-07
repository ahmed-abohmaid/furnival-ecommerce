import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp';

export const navELements = [
  {
    id: 1,
    title: 'overview',
    icon: <GridViewRoundedIcon />,
  },
  {
    id: 2,
    title: 'products',
    icon: <LocalMallOutlinedIcon />,
    children: [
      { id: 1, title: 'products', path: '/products' },
      { id: 2, title: 'all products', path: '/products/all' },
    ],
  },
  {
    id: 3,
    title: 'categories',
    icon: <StorefrontOutlinedIcon />,
    children: [
      { id: 1, title: 'Categories', path: '/categories' },
      { id: 2, title: 'all categories', path: '/categories/all' },
      { id: 3, title: 'add category', path: '/categories/add' },
    ],
  },
  {
    id: 4,
    title: 'orders',
    icon: <LocalShippingOutlinedIcon />,
    children: [
      { id: 1, title: 'orders', path: '/orders' },
      { id: 2, title: 'all orders', path: '/orders/all' },
    ],
  },
  {
    id: 5,
    title: 'users',
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    id: 6,
    title: 'message',
    icon: <MailOutlineRoundedIcon />,
  },
  {
    id: 7,
    title: 'blogs',
    icon: <BookmarksOutlinedIcon />,
    children: [
      { id: 1, title: 'blogs', path: '/blogs' },
      { id: 2, title: 'add blog', path: '/blogs/add' },
    ],
  },
  {
    id: 8,
    title: 'report',
    icon: <ShowChartSharpIcon />,
  },
  {
    id: 9,
    title: 'setting',
    icon: <SettingsOutlinedIcon />,
  },
];
